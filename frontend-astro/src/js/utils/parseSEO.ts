// @ts-ignore
import { isEmpty, values, toPairs, reduce } from "lodash-es";

interface IParseSEO {
  metaTitleContainer: string;
  metaTagContainer: string;
  metaLinkContainer: string;
  metaJsonLdContainer: string;
}

type Meta = { [k: string]: any };

type TSEO = {
  metaTitleContainer: {
    title: {
      title: string;
    };
  };
  metaTagContainer: Meta;
  metaLinkContainer: Meta;
  metaJsonLdContainer: Meta;
};

export interface ISEO {
  seoTitle: string;
  meta: Meta[];
  links: Meta[];
  jsonLd: Meta[];
}

const filterEmptyValues = (item: any): boolean => !isEmpty(item);

const flattenValues = (obj: Meta) =>
  values(obj).filter(filterEmptyValues).flat();

export const parseSEO = (seo: IParseSEO): ISEO => {
  if (!seo) {
    return {} as ISEO;
  }
  const parsed = reduce(
    toPairs(seo),
    (acc: any, [key, value]: any) => ({
      ...acc,
      [key]: JSON.parse(value as string),
    }),
    {} as TSEO
  );

  const {
    metaTitleContainer,
    metaTagContainer,
    metaLinkContainer,
    metaJsonLdContainer,
  } = parsed;

  const meta = flattenValues(metaTagContainer);
  const links = flattenValues(metaLinkContainer);
  const jsonLd = flattenValues(metaJsonLdContainer);

  return {
    seoTitle: metaTitleContainer.title.title,
    meta,
    links,
    jsonLd,
  };
};
