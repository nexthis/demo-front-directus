import _ from 'lodash'

import { useQuery } from '@tanstack/vue-query'

interface Props {
  onServer?: boolean
  slug: string
}

const defaultProps: Required<Props> = {
  onServer: true,
  slug: '',
}

export function useArticle(propsInit: Props) {
  const props = { ...defaultProps, ...propsInit }

  const { getItems } = useDirectusItems();

  const result = useQuery({
    queryKey: ['article', props.slug],
    queryFn: () => getItems({
      collection: 'articles',
      params: {
        fields: ['*'],
        filter: {
          slug: {
            _eq: props.slug,
          },
        },
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
