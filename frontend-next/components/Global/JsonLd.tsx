import {parseJsonLd} from "../../utils/parseJsonLd";

interface IJsonLd extends IComponent {
  seo: {
    metaJsonLdContainer: string
  }
}


export const JsonLd = ({seo}: IJsonLd) => {
  // Comp Settings
  const cs: IComponentSettings = {
    name: 'Seomatic',
  };

  const { jsonLd } = parseJsonLd(seo)
  console.log('asdasdas')
  console.log(jsonLd)

  // Template
  return (
    <>
      {jsonLd?.map((item) => (
        <script  key={item['@context']} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </>
  );
};
