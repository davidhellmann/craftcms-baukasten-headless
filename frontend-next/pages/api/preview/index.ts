import type {NextApiRequest, NextApiResponse} from "next";
import {cmsClient} from "../../../lib/graphql/client/graphql-client";
import {gql} from 'graphql-request'

const Preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    token,
    secret,
    'x-craft-preview': xCraftPreview,
    'x-craft-live-preview': xCraftLivePreview
  } = req.query

  if (secret !== process.env.CRAFT_CMS_PREVIEW_TOKEN) {
    res.status(401).json({message: 'Wrong or missing secret'})
    return
  }

  if (typeof token !== 'string') {
    res.status(401).json({message: 'Token missing'})
    return
  }

  if (!req.query.entryUid) {
    res.status(401).json({message: 'Not allowed to access this route'})
    return
  }

  const previewParams = {
    token: token || '',
    xCraftPreview: xCraftPreview || '',
    xCraftLivePreview: xCraftLivePreview || '',
  }

  const client = cmsClient(previewParams)
  const pageQuery = gql`
    query($uid: [String], $siteId: [QueryArgument]!) {
      entry(uid: $uid, status: null, siteId: $siteId) {
        id
        uri
        typeHandle
      }
    }`

  const data = await client.request(pageQuery, {
    uid: req.query.entryUid,
    siteId: req.query.siteId,
  })

  if (!data?.entry?.uri) {
    res.status(404).json({
      message: `URL of the entry ${req.query.entryUid} could not be fetched`,
    })
    return
  }

  res.setPreviewData({
    maxAge: 60 * 60,
    token,
    secret,
    url: req.url,
    typeHandle: data?.entry?.typeHandle,
  })

  const { entry: { uri } } = data
  const isHome = uri === '__home__'
  const location = `/${isHome ? '' : uri}`

  // Redirect to the path from the fetched url
  res.writeHead(307, {Location: location})
  res.end()
}

export default Preview

