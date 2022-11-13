import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className={'bg-secondary-100 text-secondary-700 p-4 rounded-md'}>
        <h1 >Couldn't find requested resource</h1>
        <Link className={'underline decoration-secondary-800 text-secondary-800 hover:text-secondary-900 hover:decoration-2 transition'} href={'/'}>Go back to the homepage</Link>
      </div>
    </>
  )
}
