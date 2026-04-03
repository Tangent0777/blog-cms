
import { getPostBySlug } from "@/lib/api"



export default async function PostPage({ params }: any) {
  const { slug } = await params   // ✅ KEEP THIS

  const post = await getPostBySlug(slug)

  if (!post) return <div>Post not found</div>

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "64px" }}>


      <h1  style={{
          fontSize: "40px",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "left",
          
        }}>{post.Title}</h1>

      {post.image && (
        <div style={{ display: "flex", justifyContent: "left" }}>
           
           
          <img
          src={`http://localhost:1337${
            post.image.formats?.medium?.url || post.image.url
          }`}
          alt={post.Title}
          style={{ width: "500px",
            justifyContent: "center",
           }}
        />
        </div>
      )}

      

 {/* <div>
  {post.Content?.map((block: any, i: number) => {
    const text = block.children?.map((child: any) => child.text).join("")

    // 🔥 HANDLE ALL HEADINGS (h1 → h6)
    if (block.type === "heading") {
      const Tag = `h${block.level}` as keyof JSX.IntrinsicElements

      return (
        <Tag
          key={i}
          style={{
            marginBottom: "16px",
            fontWeight: "bold",
            fontSize:
              block.level === 1
                ? "32px"
                : block.level === 2
                ? "28px"
                : block.level === 3
                ? "24px"
                : block.level === 4
                ? "20px"
                : block.level === 5
                ? "18px"
                : "16px",
          }}
        >
          {text}
        </Tag>
      )
    }

    // DEFAULT → PARAGRAPH
    return (
      <p key={i} style={{ marginBottom: "16px" }}>
        {text}
      </p>
    )
  })}
</div> */}

<div>
  {post.Content?.map((block: any, i: number) => {

    // 🔥 FUNCTION TO RENDER CHILDREN
    const renderChildren = (children: any[]) => {
      return children.map((child: any, j: number) => {

        // 🔗 LINK
        if (child.type === "link") {
          return (
            <a
              key={j}
              href={child.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4763AE", textDecoration: "underline" }}
            >
              {child.children?.map((c: any) => c.text).join("")}
            </a>
          )
        }

        // ✨ BOLD
        if (child.bold) {
          return <strong key={j}>{child.text}</strong>
        }

        // ✍️ ITALIC
        if (child.italic) {
          return <em key={j}>{child.text}</em>
        }

        // 🔤 DEFAULT
        return <span key={j}>{child.text}</span>
      })
    }

    // 🔥 HEADINGS
    if (block.type === "heading") {
      const Tag = `h${block.level}` as keyof JSX.IntrinsicElements

      return (
        <Tag
          key={i}
          style={{
            marginBottom: "16px",
            fontWeight: "bold",
            fontSize:
              block.level === 1
                ? "32px"
                : block.level === 2
                ? "28px"
                : block.level === 3
                ? "24px"
                : block.level === 4
                ? "20px"
                : block.level === 5
                ? "18px"
                : "16px",
          }}
        >
          {renderChildren(block.children)}
        </Tag>
      )
    }

    // 🔥 PARAGRAPH
    return (
      <p key={i} style={{ marginBottom: "16px" }}>
        {renderChildren(block.children)}
      </p>
    )
  })}
</div>

    </main>
  )
}

