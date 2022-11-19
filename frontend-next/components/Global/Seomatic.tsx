import {parseSEO} from "../../utils/parseSEO";

interface ISeomatic extends IComponent {
  seo: {
    metaTitleContainer: string
    metaTagContainer: string
    metaLinkContainer: string
  }
}


export const Seomatic = ({seo}: ISeomatic) => {
  // Comp Settings
  const cs: IComponentSettings = {
    name: 'Seomatic',
  };

  const { title, meta, links } = parseSEO(seo)

  // Template
  return (
    <>
      <title>{title}</title>
      {meta?.map((item) => (
        <meta key={item.content} {...item} />
      ))}
      {links?.map((item) => (
        <link key={item.href} {...item} />
      ))}
    </>
  );
};
