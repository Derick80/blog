import { useOptionalUser } from '~/utils/utilities'
import { Button, Drawer, Flex, Group, Text, Title } from '@mantine/core'
import { BrandIcon } from '../icons'
import { Form, Link } from '@remix-run/react'
import Footer from './footer'
import React from 'react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export default function Layout({ children }: { children: React.ReactNode }) {
  const user = useOptionalUser()
  const [open, setOpen] = React.useState(false)
  return (
      <div className='flex h-screen w-full flex-col items-center'>
         <div
          className='flex flex-row items-center justify-between w-full px-5 py-5 md:px-10 md:py-10'
        >
           <div className='h-20 w-20'>
            <BrandIcon />
          </div>
          <div
          className='md:text-5xl text-xl font-bold '
          > Derick  Hoskinson PhD</div>
            <div className='hidden mx-auto items-center gap-5 md:flex md:flex-row'>
            <Link to='/' onClick={() => setOpen(false)}>
              <Text>Home</Text>
            </Link>
            <Link to='/blog' onClick={() => setOpen(false)}>
              <Text>Blog</Text>
            </Link>
            <Link to='/about' onClick={() => setOpen(false)}>
              <Text>About</Text>
            </Link>
            <Link to='/projects' onClick={() => setOpen(false)}>
              <Text>Projects</Text>
            </Link>
            <Link to='/travel' onClick={() => setOpen(false)}>
              <Text>Travel</Text>
            </Link>
            <Link to='/users' onClick={() => setOpen(false)}>
              <Text>Users</Text>
            </Link>
            <Link to='/omega' onClick={() => setOpen(false)}>
              <Text>omega</Text>
            </Link>
            <Link to='/beta' onClick={() => setOpen(false)}>
              <Text>Beta</Text>
            </Link>

            {user ? (
              <Form method='post' action='/logout'>
                <button type='submit'>Logout</button>
              </Form>
            ) : (
              <Link to='/login'>Login</Link>
            )}
          </div>
           <div className='flex flex-col items-center gap-1 md:hidden'>
            <Drawer
              opened={open}
              onClose={() => setOpen(false)}
              title='Menu'
              padding='xl'
              size='xl'
              position='top'
              transition='slide-down'
              transitionDuration={250}
              transitionTimingFunction='ease'
            >
              <div className='flex flex-col items-center md:flex-row'>
                <Link to='/' onClick={() => setOpen(!open)}>
                  <Text>Home</Text>
                </Link>
                <Link to='/blog' onClick={() => setOpen(!open)}>
                  <Text>Blog</Text>
                </Link>
                <Link to='/about' onClick={() => setOpen(!open)}>
                  <Text>About</Text>
                </Link>
                <Link to='/projects' onClick={() => setOpen(!open)}>
                  <Text>Projects</Text>
                </Link>
                <Link to='/travel' onClick={() => setOpen(!open)}>
                  <Text>Travel</Text>
                </Link>
                <Link to='/users' onClick={() => setOpen(!open)}>
                  <Text>Users</Text>
                </Link>

                {user ? (
                  <Form method='post' action='/logout'>
                    <button type='submit'>Logout</button>
                  </Form>
                ) : (
                  <Link to='/login'>Login</Link>
                )}
              </div>
            </Drawer>
          </div>
          <div className='flex mx-auto items-center gap-5 md:hidden'>
          <Button
            color='teal'
            variant='subtle'
            className='block md:hidden '
            onClick={() => setOpen(!open)}
          >
            <HamburgerMenuIcon />
          </Button>
          </div>
          </div>


        <div className='mt-1 flex h-full w-[350px] grow flex-col gap-5 md:w-full'>
          {children}
        </div>
        <Footer />
    </div>
  )
}
