// const API_URL = "http://localhost:1337/api"

// export async function getPosts() {
//   const res = await fetch(`${API_URL}/posts`)
//   const data = await res.json()
//   return data.data
// }

// export async function getPostBySlug(slug) {
//   const res = await fetch(
//     `${API_URL}/posts?filters[slug][$eq]=${slug}`
//   )
//   const data = await res.json()
//   return data.data[0]
// }

// const API_URL = "http://localhost:1337/api"

// // Get all posts
// export async function getPosts() {
//   const res = await fetch(`${API_URL}/posts`, {
//     cache: "no-store", // ensures fresh data
//   })

//   const data = await res.json()

//   return data.data
// }

// // Get single post by slug
// export async function getPostBySlug(slug) {
//   const res = await fetch(
//     `${API_URL}/posts?filters[Slug][$eq]=${slug}`,
//     {
//       cache: "no-store",
//     }
//   )

//   const data = await res.json()

//   // safety check to avoid crash
//   if (!data.data || data.data.length === 0) {
//     return null
//   }

//   return data.data[0]
// }


const API_URL = "http://localhost:1337/api"

// ✅ Get all posts
export async function getPosts() {
  const res = await fetch(`${API_URL}/posts?populate=*`, {
    cache: "no-store",
  })

  const data = await res.json()

  // safety check
  if (!data.data) return []

  return data.data
}

// ✅ Get single post by slug
export async function getPostBySlug(slug) {
  const res = await fetch(
    `${API_URL}/posts?filters[Slug][$eq]=${slug}&populate=*`,
    {
      cache: "no-store",
    }
  )

  const data = await res.json()

  // debug (you can remove later)
  console.log("API RESPONSE:", data)

  // safety check
  if (!data.data || data.data.length === 0) {
    return null
  }

  return data.data[0]
}