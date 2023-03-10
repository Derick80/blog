import { useOptionalUser } from '~/utils/utilities'

export default function StatsCard() {
  const user = useOptionalUser()
  return (
    <>
      {user && (
        <div className='flex w-full flex-col items-center'>
          <ul className='flex flex-col items-center gap-3 md:flex-row'>
            <li className='flex flex-row items-center gap-3'>
              <h3 className='text-sm text-black dark:text-slate-50'>
                Welcome,
                {user.userName}
              </h3>
            </li>
            <li className='flex flex-row items-center gap-3'>
              <h3 className='text-sm text-black dark:text-slate-50'>
                Favorited Posts
              </h3>
              <div className='flex w-[24px] justify-center rounded-full bg-crimson8'>
                <p className='text-base text-slate-50'>
                  {user._count.favorites}
                </p>
              </div>
            </li>
            <li className='flex flex-row items-center gap-3'>
              <h3 className='text-base text-black dark:text-slate-50'>
                Liked Posts
              </h3>
              <div className='flex w-[24px] justify-center rounded-full bg-crimson8'>
                <p className='text-slate-50'>{user._count.likes}</p>
              </div>
            </li>
            <li className='flex flex-row items-center gap-3'>
              <h3 className='text-base text-black dark:text-slate-50'>
                # of posts
              </h3>
              <div className='flex w-[24px] justify-center rounded-full bg-crimson8'>
                <p className='text-base text-slate-50'>{user._count.posts}</p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
