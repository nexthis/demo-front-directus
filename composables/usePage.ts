import { useQuery } from '@tanstack/vue-query'
import { get } from '@vueuse/core'
import _ from 'lodash'


interface Props {
  slug: MaybeRef<string>
  onServer?: boolean
}

export function usePage({ onServer = true, slug }: Props) {
  const { getItems } = useDirectusItems();


  const result = useQuery({
    queryKey: ['page', slug],
    queryFn: async () => getItems({
      collection: 'pages',
      params:{
        filter: {
          slug: {
            _eq: get(slug),
          },
        },
        fields: ['*', { blocks: ['*', { item: ['*', { articles: ['*', { articles_id: ['*'] }] }] }] }],
        limit: 1,
      }
    }),
    select: data => _.first(data),
  })

  onServerPrefetch(async () => {
    await result.suspense()
  })

  return result
}
