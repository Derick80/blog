import { Menu, Button, Text } from '@mantine/core'
import { ExitIcon } from '@radix-ui/react-icons'
import { Form, NavLink } from '@remix-run/react'
import {
  IconChevronDown,
  IconDoorExit,
  IconEdit,
  IconPhoto,
  IconSettings,
  IconMessageCircle,
  IconFilePencil,
  IconLogout,
  IconNewSection,
  IconSearch,
  IconSun,
  IconArrowsLeftRight,
  IconTrash,
  IconChevronLeft,
  IconPencilPlus
} from '@tabler/icons'
import { useState } from 'react'
import { Divider } from '../layout/divider'

export default function Dropdown() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Menu shadow='md' width={200}>
        <Menu.Target>
          <Button variant='default'>
            <IconChevronDown />
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Blog</Menu.Label>
          <Menu.Item icon={<IconNewSection size={14} />}>
            <NavLink
              style={{
                textDecoration: 'none',
                color: 'currentcolor'
              }}
              to='/blog/new'
              onClick={() => setOpen(!open)}
            >
              <p>New Post</p>
            </NavLink>
          </Menu.Item>
          <Menu.Item icon={<IconPencilPlus size={14} />}>
            <NavLink to='/blog/drafts' onClick={() => setOpen(!open)}>
              <Text>Drafts</Text>
            </NavLink>
          </Menu.Item>
          <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
          <Menu.Item
            icon={<IconSearch size={14} />}
            rightSection={
              <Text size='xs' color='dimmed'>
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Account</Menu.Label>
          <Menu.Item icon={<IconLogout size={14} />}>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? 'border-black flex space-x-2 border-b-2'
                    : 'flex flex-row items-center space-x-2'
                }`
              }
              to='/logout'
              onClick={() => setOpen(!open)}
            >
              <>
                <Form method='post' action='/logout'>
                  <Button type='submit' color={'red'}>
                    <p>Logout</p>{' '}
                  </Button>
                </Form>
              </>
            </NavLink>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}
