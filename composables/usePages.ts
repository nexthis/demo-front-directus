
import { useQuery } from '@tanstack/vue-query'

export function usePages() {
  const { getItems } = useDirectusItems();

  const result = useQuery({
    queryKey: ['pages'],
    queryFn: async () => {
      const data = await getItems({
        collection: 'pages'
      })

      return data
    },
  })

  onServerPrefetch(async () => {
    await result.suspense()
  })

  return result
}
