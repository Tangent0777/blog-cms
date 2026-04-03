
import Link from "next/link"

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>🚀 My CMS Website</h1>
      <p>Welcome to my blog powered by Strapi</p>

      <Link href="/blog">Go to Blog</Link>
    </main>
  )
}