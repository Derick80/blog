import type { LoaderArgs, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Outlet, useFetcher, useLoaderData } from '@remix-run/react'
import UserCard from '~/components/shared/user-ui/user-card'
import { isAuthenticated } from '~/utils/server/auth/auth.server'
import type { UserProps } from '~/utils/server/user.server'
import { getUsers } from '~/utils/server/user.server'
import type { UserType } from '~/utils/schemas/user-schema'
import { Button, Select } from '@mantine/core'
import { getProfiles } from '~/utils/server/profile.server'
import type { Profile } from '~/utils/schemas/profile-schema'
import { useState } from 'react'
export const meta: MetaFunction = () => {
  return {
    title: `Derick's Personal Blog | Users`,
    description: `Registered users may search for other registered users`
  }
}
export type TestUser = {
  [key: string]: {
    id: string
    email: string
    userName: string
    avatarUrl: string
    role: string
    _count: {
      accounts: number
      tokens: number
      posts: number
      likes: number
      projects: number
    }
  }
}
export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url)

  const user = await isAuthenticated(request)
  const currentUser = user?.id

  const users = await getUsers()
  const profiles = await getProfiles()
  const userNames = users.map((user) => user.userName)

  return json({ users, profiles, currentUser, userNames })
}

export default function Users() {
  const data = useLoaderData<{
    users: UserType[]
    profiles: Profile[]
    currentUser: string
    userNames: string[]
  }>()
  const [searchValue, onSearchChange] = useState('')
  const userFetcher = useFetcher()
  return (
    <div className='flex w-full flex-col items-center gap-5 '>
      <div className='text-2xl font-semibold'>Users</div>
      <userFetcher.Form method='get' action={`users/${searchValue}`}>
        <Select
          label='Search by username'
          placeholder='Pick one'
          searchable
          searchValue={searchValue}
          nothingFound='No options'
          data={data.userNames}
        />
        <Button type='submit'>Search</Button>
      </userFetcher.Form>
      {data.users.map((user: UserProps) => (
        <>
          <UserCard key={user.id} user={user} profiles={data?.profiles} />
        </>
      ))}
      <Outlet />
    </div>
  )
}
