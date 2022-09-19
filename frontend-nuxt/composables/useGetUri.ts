interface IGetUri {
  matchingSite: object|null;
  uri: string|string[];
  locale: string|string[];
  path: string;
}

export const useGetUri = (params: IGetUri) => {
  const { matchingSite, uri, locale, path } = params;
  let _uri: string;

  if (matchingSite) {
    console.log('Matching Site: Yes')
    if (uri.length > 0) {
      _uri = [...uri].join('/');
    } else {
      _uri = [''].join('/');
    }
  }

  if (!matchingSite) {
    console.log('Matching Site: No')
    if (uri.length > 0) {
      _uri = [...locale, ...uri].join('/');
    } else {
      _uri = [locale].join('/');
    }
  }

  _uri = path.endsWith('/') ? _uri.slice(0, -1) : _uri

  return _uri || '__home__';
};

