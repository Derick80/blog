/* eslint-disable react/no-danger-with-children */
import type { Post, SerializedPost } from '~/utils/schemas/post-schema'
import type { User } from '~/utils/schemas/user-schema'
import PostOptions from './post-options'
import FavoriteContainer from './favorite-container'
import LikeContainer from './like-container'
import { ShareButton } from './share-button'
import type { CommentWithChildren } from '~/utils/schemas/comment-schema'
import type { Favorite } from '~/utils/schemas/favorite.schema'
import { NavLink } from '@remix-run/react'
import CategoryContainer from '../category-container'
import {
  AspectRatio,
  Avatar,
  Button,
  Card,
  Divider,
  Flex,
  Group,
  Image,
  Spoiler,
  Text,
  Tooltip,
  TypographyStylesProvider
} from '@mantine/core'
import type { Like } from '~/utils/schemas/like-schema'
import FormComments from '~/components/comments/com-form'
import ListComments from '~/components/comments/comList'
import formatComments from './format-comments'
import React from 'react'
import { ChatBubbleIcon } from '@radix-ui/react-icons'
import { useOptionalUser } from '~/utils/utilities'

export type ManyPostProps = {
  data: Post & {
    comments: CommentWithChildren[]
  } & {
    favorites: Favorite[]
    likes: Like[]
    _count: {
      comments: number
      favorites: number
      likes: number
    }
  }
  user: User | null
}

export type EditPostCardProps = {
  data: SerializedPost & {
    comments: CommentWithChildren[]
  } & {
    favorites: Favorite[]
    likes: Like[]
    _count: {
      comments: number
      favorites: number
      likes: number
    }
  }
  user: User | null
}
export type TheBasicCardProps = {
  showLikes: boolean
  showFavorites: boolean
  showComments: boolean
  showShare: boolean
  showOptions: boolean
  showCategories: boolean
} & EditPostCardProps
export type BasicCardProps = {
  showLikes: boolean
  showFavorites: boolean
  showComments: boolean
  showShare: boolean
  showOptions: boolean
  showCategories: boolean
} & ManyPostProps

export const PostCard = ({
  data,
  user,
  showComments,
  showLikes,
  showFavorites,
  showShare,
  showOptions,
  showCategories
}: BasicCardProps | TheBasicCardProps) => {
  const currentUser = useOptionalUser()
  const {
    id,
    title,
    description,
    body,
    imageUrl,
    createdAt,
    categories,
    likes,
    _count,
    favorites
  } = data

  const [open, setOpen] = React.useState(false)
  return (
    <>
      <div key={id} className='radius-md w-[350px] p-2 shadow-sm md:w-[650px]'>
        <div>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              radius='md'
              style={{
                width: '100%',
                height: '100%'
              }}
              fit='cover'
            />
          )}
        </div>

        <div>
          <NavLink
            to={`/blog/${id}`}
            className='text-gray-900 text-lg font-bold'
            style={{ textDecoration: 'none', color: 'currentcolor' }}
          >
            <h2 className='text-gray-900 text-lg font-bold'>{title}</h2>
          </NavLink>
          {showCategories && (
            <div
              className='flex flex-row space-x-2 p-2'
              style={{ width: 'fit-content' }}
            >
              {categories.map((category, index) => (
                <CategoryContainer
                  key={index}
                  index={index}
                  value={category.value}
                />
              ))}
            </div>
          )}

          <div className='prose prose-sm h-full'>
            <Spoiler maxHeight={120} showLabel='Show more' hideLabel='Hide'>
              {body && (
                <p
                  dangerouslySetInnerHTML={{ __html: body }}
                  className='prose prose-sm h-full dark:prose-invert'
                ></p>
              )}
            </Spoiler>
            <p className='prose prose-sm dark:prose-invert'>{description}</p>
          </div>
        </div>

        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-row space-x-2 p-2'>
            {showLikes && likes && currentUser && (
              <LikeContainer
                postId={id}
                likes={likes}
                likeCounts={_count?.likes}
                currentUser={currentUser.id}
              />
            )}
            {showFavorites && currentUser && (
              <FavoriteContainer
                postId={id}
                favorites={favorites}
                currentUser={currentUser.id}
              />
            )}
            {showComments && data.comments && (
              <Button
                type='button'
                variant='subtle'
                onClick={() => setOpen(!open)}
              >
                <div className='flex flex-row space-x-1'>
                  <ChatBubbleIcon />
                  <p className='text-xs'> {_count.comments}</p>
                </div>
              </Button>
            )}
            {showShare && id && <ShareButton id={id} />}
            {showOptions && <PostOptions id={id} />}
          </div>
          <div className='flex flex-col items-center space-x-2'>
            {user?.avatarUrl && (
              <Tooltip label={user?.userName} position='top'>
                <Avatar
                  src={user?.avatarUrl}
                  variant='filled'
                  radius='xl'
                  size='sm'
                />
              </Tooltip>
            )}
            <p className='text-gray-200 text-xs'>
              {createdAt && new Date(createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <Divider />
        <Group position='right'></Group>
        {showComments && data.comments && id && (
          <div className='flex flex-col'>
            <FormComments postId={id} />
            {open && data.comments && (
              <ListComments comments={formatComments(data.comments || [])} />
            )}
            <Button onClick={() => setOpen(!open)}>
              {open ? 'Hide' : 'Show'} Comments
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
