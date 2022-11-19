import * as R from 'ramda'

interface ISeoProps {
  metaJsonLdContainer: string
}

type Meta = { [k: string]: any }

type TSEO = {
  metaJsonLdContainer: Meta
}

export interface ISEO {
  jsonLd: Meta[]
}

const filterEmptyValues = (item: any): boolean => item?.length !== 0
const flattenValues = R.pipe(R.values, R.filter(filterEmptyValues), R.flatten)

export const parseJsonLd = (seo: ISeoProps): ISEO => {
  const parsed = R.toPairs(seo).reduce<TSEO>(
    (acc, [key, value]) => ({ ...acc, [key]: JSON.parse(value) }),
    {} as TSEO,
  )

  const {
    metaJsonLdContainer,
  } = parsed

  const jsonLd = flattenValues(metaJsonLdContainer)

  return {
    jsonLd
  }
}
