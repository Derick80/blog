import type { ActionFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useFetcher, useNavigation } from '@remix-run/react'
import { useEffect } from 'react'
import { isAuthenticated } from '~/models/auth/auth.server'
import { prisma } from '~/models/prisma.server'

type ActionData = {
  imageUrl?: string
}

export const action: ActionFunction = async ({ request }) => {
  const user = await isAuthenticated(request)
  if (!user) {
    return json({ error: 'Not authenticated' }, { status: 401 })
  }

  const formData = await request.formData()

  const imageUrl = formData.get('imageUrl') as string
  const title = formData.get('title') as string
  console.log(imageUrl, 'imageUrl')

  if (!imageUrl) {
    return json({
      errorMsg: 'Something went wrong while uploading'
    })
  }

  if (!title) {
    return json({
      errorMsg: 'Something went wrong while uploading'
    })
  }

  await prisma.imageTest.create({
    data: {
      imageUrl: imageUrl,
      title: title,
      userId: user.id
    }
  })

  return json({
    imageUrl
  })
}

export default function Uploader() {
  const fetcher = useFetcher<ActionData>()
const navigation = useNavigation()
  useEffect(() => {
    console.log(fetcher.state)
  }, [fetcher])

  const onClick = async () =>
    fetcher.submit({
      imageUrl: 'imageUrl',
      key: 'imageUrl',
      action: '/actions/image'
    })

  return (
    <>
      <fetcher.Form
        method='post'
        encType='multipart/form-data'
        action='/actions/image'
        onClick={onClick}
        className='col-span-2 col-start-3 flex flex-col rounded-xl shadow-md'
      >
        <label htmlFor='imageUrl'>Image to upload</label>
        <input
          id='imageUrl'
          className='rounded-xl bg-crimson12 text-slate12'
          type='file'
          name='imageUrl'
          accept='image/*'
        />
        <button type='submit'>          {navigation.state === 'submitting' ? 'Submitting...' : navigation.state === "loading" ? "Saved!": 'Upload'}
</button>
      </fetcher.Form>
      {fetcher.data ? (
        <>
          <div>
            File has been uploaded to S3 and is available under the following
            URL (if the bucket has public access enabled):
          </div>
          <input type='hidden' name='imageUrl' value={fetcher.data.imageUrl} />
          {fetcher?.data?.imageUrl}

          <img src={fetcher.data.imageUrl} alt={'#'} />
        </>
      ) : null}
      <form
        className='col-span-2 col-start-3 flex flex-col rounded-xl shadow-md'
        method='post'
      >
        <label htmlFor='imageUrl'>Image</label>
        <input
          type='text'
          className='rounded-xl bg-crimson12 text-slate12'
          name='imageUrl'
          value={fetcher?.data?.imageUrl}
          onChange={(e) => console.log(e.target.value)}
        />
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          className='rounded-xl bg-crimson12 text-slate12'
          name='title'
          onChange={(e) => console.log(e.target.value)}
        />

        <button type='submit'>
          {navigation.state === 'submitting' ? 'Submitting...' : navigation.state === "loading" ? "Saved!": 'Submit'}
        </button>
      </form>
    </>
  )
}
