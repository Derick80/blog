// This file was automatically generated. Do not modify it.
export interface RemixDocs {
  '/blog/:postId/:commentId/delete': {
    loader: { output: never }
    action: { output: { message: string } }
  }
  '/blog/:postId/:commentId/edit': {
    loader: {
      output: {
        comment: {
          id: string
          message: string
          createdAt: string
          updatedAt: string
          createdBy: string
          userId: string
          postId: string
        } | null
      }
    }
    action: {
      output:
        | { message: string }
        | {
            formErrors: {
              message?: string | undefined
              commentId?: string | undefined
              userId?: string | undefined
              postId?: string | undefined
            }
            fields: {
              message: string
              userId: string
              postId: string
              commentId: string
            }
            form: string
          }
    }
  }
  '/blog/categories/:categoryId': {
    loader: {
      output:
        | {
            readonly headers: {}
            readonly ok: boolean
            readonly redirected: boolean
            readonly status: number
            readonly statusText: string
            readonly type:
              | 'basic'
              | 'cors'
              | 'default'
              | 'error'
              | 'opaque'
              | 'opaqueredirect'
            readonly url: string
            readonly body: { readonly locked: boolean } | null
            readonly bodyUsed: boolean
          }
        | { redirect: string }
    }
  }
  '/blog/:postId/:commentId': {
    loader: {
      output: {
        comment: {
          id: string
          message: string
          createdAt: string
          updatedAt: string
          createdBy: string
          userId: string
          postId: string
        } | null
      }
    }
    action: {
      output:
        | { message: string }
        | {
            formErrors: {
              message?: string | undefined
              commentId?: string | undefined
              userId?: string | undefined
              postId?: string | undefined
            }
            fields: {
              message: string
              userId: string
              postId: string
              commentId: string
            }
            form: string
          }
    }
  }
  '/blog/:postId/favorite': {
    loader: { output: never }
    action: { output: { error: string } | { success: boolean } }
  }
  '/blog/:postId/comment': {
    loader: {
      output:
        | { message: string }
        | {
            postId: string
            user: {
              id: string
              email: string
              userName: string
              avatarUrl: string | null
              role: 'ADMIN' | 'USER' | 'MEMBER'
              _count: {
                accounts: number
                tokens: number
                japanImages: number
                travelLogs: number
                posts: number
                likes: number
                favorites: number
                projects: number
                comments: number
              }
            }
          }
    }
    action: {
      output:
        | {
            readonly headers: {}
            readonly ok: boolean
            readonly redirected: boolean
            readonly status: number
            readonly statusText: string
            readonly type:
              | 'basic'
              | 'cors'
              | 'default'
              | 'error'
              | 'opaque'
              | 'opaqueredirect'
            readonly url: string
            readonly body: { readonly locked: boolean } | null
            readonly bodyUsed: boolean
          }
        | {
            readonly headers: {}
            readonly ok: boolean
            readonly redirected: boolean
            readonly status: number
            readonly statusText: string
            readonly type:
              | 'basic'
              | 'cors'
              | 'default'
              | 'error'
              | 'opaque'
              | 'opaqueredirect'
            readonly url: string
            readonly body: { readonly locked: boolean } | null
            readonly bodyUsed: boolean
          }
    }
  }
  '/travel/:imageId/edit': {
    loader: {
      output: {
        image: {
          id: number
          imageUrl: string
          imageTitle: string | null
          imageDescription: string | null
          album: string
          city: string
          year: string
          userId: string
        }
      }
    }
    action: {
      output:
        | { fieldErrors: null; fields: null; formError: string }
        | {
            fieldErrors: {
              imageTitle: string | null
              imageDescription: string | null
              imageUrl: string | null
            }
            fields: {
              id: number
              imageTitle: string
              imageUrl: string
              imageDescription: string
              album: string
              year: string
            }
            formError: null
          }
    }
  }
  '/blog/:postId': {
    loader: {
      output:
        | { message: string }
        | {
            postId: string
            user: {
              id: string
              email: string
              userName: string
              avatarUrl: string | null
              role: 'ADMIN' | 'USER' | 'MEMBER'
              _count: {
                accounts: number
                tokens: number
                japanImages: number
                travelLogs: number
                posts: number
                likes: number
                favorites: number
                projects: number
                comments: number
              }
            }
            post: {
              id: string
              title: string
              description: string
              body: string
              imageUrl: string
              createdBy: string
              published: boolean
              createdAt: string
              updatedAt: string
              userId: string
              _count: {
                comments: number
                favorites: number
                categories: number
                likes: number
              }
              likes: {
                userId: string
                postId: string
                createdAt: string
                updatedAt: string
              }[]
              comments: {
                id: string
                message: string
                createdAt: string
                updatedAt: string
                createdBy: string
                userId: string
                postId: string
                user: {
                  id: string
                  userName: string
                  email: string
                  password: string | null
                  avatarUrl: string | null
                  createdAt: string
                  updatedAt: string
                  role: 'ADMIN' | 'USER' | 'MEMBER'
                }
              }[]
            } | null
          }
    }
    action: {
      output:
        | {
            readonly headers: {}
            readonly ok: boolean
            readonly redirected: boolean
            readonly status: number
            readonly statusText: string
            readonly type:
              | 'basic'
              | 'cors'
              | 'default'
              | 'error'
              | 'opaque'
              | 'opaqueredirect'
            readonly url: string
            readonly body: { readonly locked: boolean } | null
            readonly bodyUsed: boolean
          }
        | {
            readonly headers: {}
            readonly ok: boolean
            readonly redirected: boolean
            readonly status: number
            readonly statusText: string
            readonly type:
              | 'basic'
              | 'cors'
              | 'default'
              | 'error'
              | 'opaque'
              | 'opaqueredirect'
            readonly url: string
            readonly body: { readonly locked: boolean } | null
            readonly bodyUsed: boolean
          }
    }
  }
  '/actions/set-theme': { loader: { output: any }; action: { output: any } }
  '/blog/:postId/edit': {
    loader: {
      output: {
        post: {
          id: string
          title: string
          description: string
          body: string
          imageUrl: string
          createdBy: string
          published: boolean
          createdAt: string
          updatedAt: string
          userId: string
          likes: {
            userId: string
            postId: string
            createdAt: string
            updatedAt: string
          }[]
          _count: {
            comments: number
            favorites: number
            categories: number
            likes: number
          }
          comments: {
            id: string
            message: string
            createdAt: string
            updatedAt: string
            createdBy: string
            userId: string
            postId: string
            user: {
              id: string
              userName: string
              email: string
              password: string | null
              avatarUrl: string | null
              createdAt: string
              updatedAt: string
              role: 'ADMIN' | 'USER' | 'MEMBER'
            }
          }[]
        } | null
      }
    }
    action: {
      output:
        | {
            readonly headers: {}
            readonly ok: boolean
            readonly redirected: boolean
            readonly status: number
            readonly statusText: string
            readonly type:
              | 'basic'
              | 'cors'
              | 'default'
              | 'error'
              | 'opaque'
              | 'opaqueredirect'
            readonly url: string
            readonly body: { readonly locked: boolean } | null
            readonly bodyUsed: boolean
          }
        | {
            readonly headers: {}
            readonly ok: boolean
            readonly redirected: boolean
            readonly status: number
            readonly statusText: string
            readonly type:
              | 'basic'
              | 'cors'
              | 'default'
              | 'error'
              | 'opaque'
              | 'opaqueredirect'
            readonly url: string
            readonly body: { readonly locked: boolean } | null
            readonly bodyUsed: boolean
          }
    }
  }
  '/blog/:postId/like': { loader: { output: any }; action: { output: any } }
  '/projects': {
    loader: {
      output: {
        projects: {
          id: string
          title: string
          description: string
          projectImg: string
          projectUrl: string
          githubUrl: string
          userId: string
          categories: { id: string; label: string; value: string }[]
          user: {
            id: string
            userName: string
            email: string
            password: string | null
            avatarUrl: string | null
            createdAt: string
            updatedAt: string
            role: 'ADMIN' | 'USER' | 'MEMBER'
          }
        }[]
      }
    }
  }
  '/actions/image': { action: { output: any } }
  '/auth/register': {
    action: {
      output:
        | string
        | {
            readonly headers: {}
            readonly ok: boolean
            readonly redirected: boolean
            readonly status: number
            readonly statusText: string
            readonly type:
              | 'basic'
              | 'cors'
              | 'default'
              | 'error'
              | 'opaque'
              | 'opaqueredirect'
            readonly url: string
            readonly body: { readonly locked: boolean } | null
            readonly bodyUsed: boolean
          }
    }
  }
  '/users/:userId': { loader: { output: {} } }
  '/travel': {
    loader: {
      output: {
        NYC: {
          id: number
          imageUrl: string
          imageTitle: string | null
          imageDescription: string | null
          album: string
          city: string
          year: string
          userId: string
        }[]
        Japan: {
          id: number
          imageUrl: string
          imageTitle: string | null
          imageDescription: string | null
          album: string
          city: string
          year: string
          userId: string
        }[]
        albums: {
          id: number
          album: string
          city: string
          imageTitle: string
          imageDescription: string
          imageUrl: string
          year: string
          userId: string
        }[]
        albumNames: string[]
      }
    }
  }
  '/about': {
    loader: {
      output: {
        about: {
          id: string
          userName: string
          firstName: string
          lastName: string
          bio: string
          location: string
          education: string
          occupation: string
          profilePicture: string
          createdAt: string
          updatedAt: string
          email: string
        }[]
      }
    }
  }
  '/auth/github': { loader: { output: any }; action: { output: any } }
  '/auth/github/callback': { loader: { output: any } }
  '/auth/logout': { action: { output: never } }
  '/users': {
    loader: {
      output:
        | {
            readonly headers: {}
            readonly ok: boolean
            readonly redirected: boolean
            readonly status: number
            readonly statusText: string
            readonly type:
              | 'basic'
              | 'cors'
              | 'default'
              | 'error'
              | 'opaque'
              | 'opaqueredirect'
            readonly url: string
            readonly body: { readonly locked: boolean } | null
            readonly bodyUsed: boolean
          }
        | { redirect: string }
    }
  }
  '/auth/login': {
    loader: {
      output: {
        readonly headers: {}
        readonly ok: boolean
        readonly redirected: boolean
        readonly status: number
        readonly statusText: string
        readonly type:
          | 'basic'
          | 'cors'
          | 'default'
          | 'error'
          | 'opaque'
          | 'opaqueredirect'
        readonly url: string
        readonly body: { readonly locked: boolean } | null
        readonly bodyUsed: boolean
      } | null
    }
    action: { output: any }
  }
  '/blog': {
    loader: {
      output: {
        posts: {
          comments: {
            user: {
              avatarUrl: string | null
              id: string
              userName: string
              email: string
              password: string | null
              createdAt: string
              updatedAt: string
              role: 'ADMIN' | 'USER' | 'MEMBER'
            }
            id: string
            message: string
            createdAt: string
            updatedAt: string
            createdBy: string
            userId: string
            postId: string
          }[]
          commentsCount: number
          likesCount: number
          id: string
          title: string
          description: string
          body: string
          imageUrl: string
          createdBy: string
          published: boolean
          createdAt: string
          updatedAt: string
          userId: string
          categories: { id: string; label: string; value: string }[]
          likes: {
            userId: string
            postId: string
            createdAt: string
            updatedAt: string
          }[]
        }[]
        results: {
          id: string
          title: string
          description: string
          body: string
          imageUrl: string
          postedBy: string
          postedAt: string
          message: string
          postId: string
          userId: string
          createdAt: string
          updatedAt: string
          createdBy: string
          published: boolean
          comment: {
            id: string
            message: string
            createdAt: string
            updatedAt: string
            createdBy: string
            userId: string
            postId: string
          }[]
          userName: string
          email: string
          avatarUrl: string | null
          _count: {
            comments: number
            favorites: number
            categories: number
            likes: number
          }
          likes: {
            userId: string
            postId: string
            createdAt: string
            updatedAt: string
          }[]
        }[]
      }
    }
    action: {
      output:
        | {
            readonly headers: {}
            readonly ok: boolean
            readonly redirected: boolean
            readonly status: number
            readonly statusText: string
            readonly type:
              | 'basic'
              | 'cors'
              | 'default'
              | 'error'
              | 'opaque'
              | 'opaqueredirect'
            readonly url: string
            readonly body: { readonly locked: boolean } | null
            readonly bodyUsed: boolean
          }
        | {
            readonly headers: {}
            readonly ok: boolean
            readonly redirected: boolean
            readonly status: number
            readonly statusText: string
            readonly type:
              | 'basic'
              | 'cors'
              | 'default'
              | 'error'
              | 'opaque'
              | 'opaqueredirect'
            readonly url: string
            readonly body: { readonly locked: boolean } | null
            readonly bodyUsed: boolean
          }
    }
  }
  '/travel/new': {
    loader: {
      output: {
        user: {
          id: string
          email: string
          userName: string
          avatarUrl: string | null
          role: 'ADMIN' | 'USER' | 'MEMBER'
          _count: {
            accounts: number
            tokens: number
            japanImages: number
            travelLogs: number
            posts: number
            likes: number
            favorites: number
            projects: number
            comments: number
          }
        }
      }
    }
    action: { output: any }
  }
  '/blog/new': {
    loader: {
      output:
        | {
            readonly headers: {}
            readonly ok: boolean
            readonly redirected: boolean
            readonly status: number
            readonly statusText: string
            readonly type:
              | 'basic'
              | 'cors'
              | 'default'
              | 'error'
              | 'opaque'
              | 'opaqueredirect'
            readonly url: string
            readonly body: { readonly locked: boolean } | null
            readonly bodyUsed: boolean
          }
        | { redirect: string }
    }
    action: {
      output:
        | {
            readonly headers: {}
            readonly ok: boolean
            readonly redirected: boolean
            readonly status: number
            readonly statusText: string
            readonly type:
              | 'basic'
              | 'cors'
              | 'default'
              | 'error'
              | 'opaque'
              | 'opaqueredirect'
            readonly url: string
            readonly body: { readonly locked: boolean } | null
            readonly bodyUsed: boolean
          }
        | { redirect: string }
    }
  }
  '/postTags': {
    loader: {
      output: { data: { categories: { label: string; value: string }[] } }
    }
  }
  '/drafts': {
    loader: {
      output:
        | {
            readonly headers: {}
            readonly ok: boolean
            readonly redirected: boolean
            readonly status: number
            readonly statusText: string
            readonly type:
              | 'basic'
              | 'cors'
              | 'default'
              | 'error'
              | 'opaque'
              | 'opaqueredirect'
            readonly url: string
            readonly body: { readonly locked: boolean } | null
            readonly bodyUsed: boolean
          }
        | { redirect: string }
    }
  }
  '/': {
    loader: {
      output: {
        posts: {
          email: string
          id: string
          userName: string
          avatarUrl: string | null
          role: 'ADMIN' | 'USER' | 'MEMBER'
          posts: {
            id: string
            title: string
            description: string
            body: string
            imageUrl: string
            createdBy: string
            published: boolean
            createdAt: string
            updatedAt: string
            userId: string
          }[]
          _count: {
            accounts: number
            tokens: number
            japanImages: number
            travelLogs: number
            posts: number
            likes: number
            favorites: number
            projects: number
            comments: number
          }
        }[]
        blogPostCount: number
      }
    }
  }
  '/beta': {
    loader: {
      output: {
        results: {
          id: string
          title: string
          description: string
          body: string
          imageUrl: string
          postedBy: string
          postedAt: string
          message: string
          postId: string
          userId: string
          createdAt: string
          updatedAt: string
          createdBy: string
          published: boolean
          comment: {
            id: string
            message: string
            createdAt: string
            updatedAt: string
            createdBy: string
            userId: string
            postId: string
          }[]
          userName: string
          email: string
          avatarUrl: string | null
          _count: {
            comments: number
            favorites: number
            categories: number
            likes: number
          }
          likes: {
            userId: string
            postId: string
            createdAt: string
            updatedAt: string
          }[]
        }[]
      }
    }
  }
}
