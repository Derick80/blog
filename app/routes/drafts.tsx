import type { LoaderArgs, SerializeFrom } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'
import { PostCard } from '~/components/shared/blog-ui/post-card'
import { isAuthenticated } from '~/utils/server/auth/auth.server'
import { getUserDrafts } from '~/utils/server/post.server'
import { Center } from '@mantine/core'

import type { MetaFunction } from '@remix-run/node' // or cloudflare/deno

export const meta: MetaFunction = () => {
  return {
    title: "Work on your drafts | Derick's Blog | Drafts",
    description: 'Work on your drafts and share your knowledge with the world'
  }
}
export async function loader({ request }: LoaderArgs) {
  const user = await isAuthenticated(request)
  if (!user) {
    return { redirect: '/login' }
  }

  const drafts = await getUserDrafts(user.id)
  invariant(drafts, 'drafts are required')
  return json({ user, drafts })
}

export default function Drafts() {
  const data = useLoaderData<{
    user: SerializeFrom<typeof isAuthenticated>
    drafts: SerializeFrom<typeof getUserDrafts>
  }>()

  return (
    <>
      <div className='flex grow flex-col items-center gap-5'>
        <h1>Drafts</h1>
        {data.drafts.length > 0 ? (
          data.drafts.map((draft) => (
            <PostCard
              key={draft.id}
              data={draft}
              showCategories={true}
              showComments={false}
              showOptions={true}
              showLikes={false}
              showFavorites={false}
              showShare={false}
              user={data.user}
            />

            //             <div key={draft.id}>

            //               <div className='flex flex-col'>
            // {draft.title}
            //                 <div className='flex flex-col'>
            //                   <p dangerouslySetInnerHTML={{ __html: draft.body }} />

            //                   </div>
            //                   </div>
            //               </div>
          ))
        ) : (
          <Center>
            <h2>You have no drafts</h2>
          </Center>
        )}
      </div>
    </>
  )
}
