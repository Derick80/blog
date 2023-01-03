import { useFetcher, useLoaderData } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { ClientOnly } from 'remix-utils'
import { Select } from '~/components/shared/box/select-box'
import FormField from '~/components/shared/form-field'
import { ImageUploader } from '~/components/shared/image-uploader'
import Quill from '~/components/shared/quill-client'
import type { loader } from '~/root'
import type { SerializedPost } from '~/utils/schemas/post-schema'

export type EditPostProps = {
  post: SerializedPost
}

export default function Edit({ post }: EditPostProps) {
  const data = useLoaderData<typeof loader>()
  //   fetcher works! Grab all the categories from the database and display them in the select box. Use fetcher to ping the database and grab the categories.
  const fetcher = useFetcher()
  useEffect(() => {
    if (fetcher.state === 'idle' && !fetcher.data) {
      fetcher.load('/postTags')
    }
  }, [fetcher])

  //   grab the categories from the fetcher
  const cata =
    fetcher.data && fetcher.data.data ? fetcher.data.data.categories : []

  //   form data for the post
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    body: '',
    imageUrl: '',
    categories: [] as string[]
  })

  const handleFileUpload = async (file: File) => {
    const inputFormData = new FormData()
    inputFormData.append('imageUrl', file)
    const response = await fetch('/actions/image', {
      method: 'POST',
      body: inputFormData
    })

    const { imageUrl } = await response.json()
    console.log('imageUrl', imageUrl)

    setFormData({
      ...formData,
      imageUrl: imageUrl
    })
  }

  function handleSelects(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target
    if (formData.categories.includes(value)) {
      setFormData((prev) => ({
        ...prev,
        categories: prev.categories.filter((item) => item !== value)
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        categories: [...prev.categories, value]
      }))
    }
  }

  return (
    <div className='flex w-full items-center justify-center '>
      <form method='post' action='/blog/new' className='w-full'>
        <label htmlFor='title'>Title</label>
        <input
          className='form-field-primary'
          type='text'
          name='title'
          id='title'
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <label htmlFor='description'>Description</label>
        <input
          type='text'
          name='description'
          id='description'
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />

        <label htmlFor='body'>Post Content</label>

        <div className='flex flex-col items-center justify-center'>
          <ClientOnly
            fallback={<div style={{ width: 500, height: 300 }}></div>}
          >
            {() => (
              <Quill
                defaultValue={post.body}
                value={formData.body}
                name='body'
              />
            )}
          </ClientOnly>
        </div>

        {/* <FormField
          name='body'
          type='textarea'
          value={formData.body}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        /> */}

        <div className='flex flex-row items-center justify-center'>
          <input
            type='hidden'
            name='imageUrl'
            id='imageUrl'
            value={formData.imageUrl}
            onChange={(e) =>
              setFormData({ ...formData, imageUrl: e.target.value })
            }
          />

          <div className='flex w-96 flex-col bg-slate-100 pt-2 text-zinc-800 dark:bg-zinc-800 dark:text-slate-100'>
            <div className='flex w-full rounded-md bg-red-300'>
              {formData.categories.map((item) => (
                <div key={item} className='flex items-center'>
                  <p>{item}</p>
                  <button
                    type='button'
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        categories: prev.categories.filter(
                          (cat) => cat !== item
                        )
                      }))
                    }}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <Select
              options={cata}
              multiple={true}
              label='Categories'
              name='categories'
              value={formData.categories}
              onChange={(event) => handleSelects(event)}
            />
          </div>
          <br />
        </div>
        <ImageUploader
          onChange={handleFileUpload}
          imageUrl={formData.imageUrl}
        />
        <button
          type='submit'
          className='btn-base btn-solid-primary'
          name='_action'
          value='save'
        >
          Save
        </button>
        {post.published ? (
          <button
            type='submit'
            className='btn-base btn-solid-warn'
            name='_action'
            value='unpublish'
          >
            Unpublish
          </button>
        ) : (
          <button
            type='submit'
            className='btn-base btn-solid-warn'
            name='_action'
            value='publish'
          >
            Publish
          </button>
        )}
        <button
          type='submit'
          className='btn-base btn-solid-danger'
          name='_action'
          value='delete'
        >
          Delete
        </button>
      </form>
    </div>
  )
}