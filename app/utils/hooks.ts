import { useFetcher } from '@remix-run/react'
import { useCallback, useEffect, useMemo, useState } from 'react'

// swap this out for react-router's useRevalidator when it has support for it
export function useRevalidator() {
  let { submit } = useFetcher()
  let revalidate = useCallback(() => {
    submit(null, { action: '/', method: 'post' })
  }, [submit])

  return useMemo(() => ({ revalidate }), [revalidate])
}

export function useEventSource(href: string) {
  const [data, setData] = useState(null)

  useEffect(() => {
    let source = new EventSource(href)
    source.addEventListener('message', (event) => {
      setData(event.data)
    })
    return () => source.close()
  }, [href, data])
  return data
}
