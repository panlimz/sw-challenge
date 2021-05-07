export async function getSortedPostsData() {
    const res = await fetch('https://swapi.dev/api/')
    return res.json()
  }
  