const getData = async () => {
  const query = {
    query: `query MyQuery {
      entry(section: "home") {
        id
        title
        slug
      }
    }`
  }
  const res = await fetch('http://zahnarzt-wernitz.test/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer KOTwKkTfXNRzI_u2gQPBO7OfyxXoCihi'
    },
    body: JSON.stringify(query),
  });
  return res.json();
}

const Page = async () => {
  const {data: {entry} } = await getData();
  console.log(entry)

  return (
    <h1>{entry.title}</h1>
  )
}

export default Page
