import type {NextApiRequest, NextApiResponse} from "next";

const ClearPreview = async (req: NextApiRequest, res: NextApiResponse) => {
  res.clearPreviewData()
  res.writeHead(307, {Location: req.headers.referer || '/'})
  res.end()
}

export default ClearPreview

