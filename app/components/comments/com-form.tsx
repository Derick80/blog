import { Box, Button, Group, Textarea } from '@mantine/core'
import { Form, useNavigation } from '@remix-run/react'
import React, { useEffect } from 'react'

export default function FormComments({
  postId,
  parentId
}: {
  postId: string
  parentId?: string
}) {
  // use the next few lines to reset the comment form without user navigating away from the page
  let navigation = useNavigation()
  let isUpdating =
    navigation.state === 'submitting' &&
    navigation.formAction === '/actions/comment'

  let formRef = React.useRef<HTMLFormElement>(null)
  useEffect(() => {
    if (!isUpdating) {
      formRef.current?.reset()
    }
  }, [isUpdating])
  return (
    <Box
      mt='md'
      mb='md'
      sx={{
        maxWidth: '600px'
      }}
    >
      <Form
        ref={formRef}
        method='post'
        className='w-full'
        action={`/actions/comment`}
      >
        <input type='hidden' name='postId' value={postId} />
        {parentId && <input type='hidden' name='parentId' value={parentId} />}
        <Textarea
          required
          name='message'
          placeholder='your comment here'
          label='Comment'
        />

        <Group position='right' mt='md'>
          <Button
            type='submit'
            name='_action'
            value={parentId ? 'reply' : 'create'}
          >
            {parentId ? 'post reply' : 'post comment'}
          </Button>
        </Group>
      </Form>
    </Box>
  )
}
