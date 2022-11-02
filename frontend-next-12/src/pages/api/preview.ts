import type {NextApiRequest, NextApiResponse} from 'next'
import {gql} from 'graphql-request'
import cmsClient from '@lib/cmsClient'

const IS_PROD = process.env.NODE_ENV === "production";
const setCookieSameSite = (res: NextApiResponse, value: string) => {
  const cookies: number | string | string[] | undefined = res.getHeader("Set-Cookie");

  console.log(cookies)
  if (typeof cookies === 'object') {
    const modifiedCookies = cookies.map(cookie => {
      return cookie.replace('SameSite=Lax', `SameSite=${value}; ${IS_PROD ? "Secure;" : "Secure;"}`)
    })
    res.setHeader("Set-Cookie", modifiedCookies);
  }
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const {token} = req.query

  if (typeof token !== 'string') {
    res.status(401).json({message: 'Token missing'})
    return
  }

  if (!req.query.entryUid) {
    res.status(401).json({message: 'Not allowed to access this route'})
    return
  }

  const client = cmsClient(token)

  const pageQuery = gql`
    query($uid: [String]) {
      entry(uid: $uid, status: null) {
        id
        uri
        uid
        typeHandle
        status
      }
    }
  `


  const data = await client.request(pageQuery, {
    uid: req.query.entryUid,
  })

  if (!data?.entry?.uri) {
    res.status(404).json({
      message: `URL of the entry ${req.query.entryUid} could not be fetched`,
    })
    return
  }

  res.setPreviewData({
    token,
    typeHandle: data?.entry?.typeHandle,
  }, {
    maxAge: 60 * 60,
  })
  setCookieSameSite(res, "None");

  const {
    entry: {uri},
  } = data

  const isHome = uri === '__home__'

  const location = `/${isHome ? '' : uri}`

  // Redirect to the path from the fetched url
  res.writeHead(307, {Location: location})
  res.end()
}
