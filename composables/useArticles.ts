
import { useQuery } from '@tanstack/vue-query'

interface Props {
  onServer?: boolean

}

const defaultProps: Required<Props> = {
  onServer: true,
}

export function useArticles(propsInit?: Props) {
  const props = { ...defaultProps, ...propsInit }
  const { getItems } = useDirectusItems();


  const result = useQuery({
    queryKey: ['articles'],
    queryFn: () => getItems({
      collection: 'articles',
      params: {
        fields: ['*']
      }
    }),
  })

  onServerPrefetch(async () => {
    await result.suspense()
  })

  return result
}
