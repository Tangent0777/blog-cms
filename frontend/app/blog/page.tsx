

// import Link from "next/link"
// import { getPosts } from "@/lib/api"

// export default async function BlogPage() {
//   const posts = await getPosts()

//   return (
//     <main
//       style={{
//         maxWidth: "1200px", 
//         margin: "0 auto",
//         padding: "60px 20px",
//       }}
//     >
//       {/* TITLE */}
//       <h1
//         style={{
//           fontSize: "36px",
//           fontWeight: "bold",
//           marginBottom: "40px",
//           textAlign: "center",
//         }}
//       >
//         Blog
//       </h1>

//       {/* GRID */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(220px, 320px))",
// justifyContent: "center",
//           gap: "30px",
//           maxWidth: "1200px",
//         }}
//       >
//         {posts?.map((post: any) => (
//           <div
//             key={post.id}
//             style={{
//               border: "1px solid #636363",
//               borderRadius: "12px",
//               overflow: "hidden",
//               boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
//               background: "#141414",
//             }}
//           >
//             {/* IMAGE */}
//             {post.image && (
//               <img
//                 src={`http://localhost:1337${
//                   post.image.formats?.small?.url || post.image.url
//                 }`}
//                 alt={post.Title}
//                 style={{
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "cover",
//                 }}
//               />
//             )}

            
//             <div style={{ padding: "20px" }}>
//               <h2
//                 style={{
//                   fontSize: "20px",
//                   fontWeight: "regular",
//                   marginBottom: "12px",
//                   color: "#ffffff",
//                   fontFamily:"satoshi, sans-serif",
//                 }}
//               >
//                 {post.Title}
//               </h2>

//               <Link
//                 href={`/blog/${post.Slug}`}
//                 style={{
//                   color: "#e2e2e2",
//                   fontWeight: "500",
//                   fontSize: "12px",
//                   fontFamily:"satoshi, sans-serif",
//                 }}
//               >
//                 Read More →
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   )
// }

import Link from "next/link"
import { getPosts } from "@/lib/api"

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 20px",
      }}
    >
      {/* 🔥 HOVER STYLES */}
      <style>
        {`
          .blog-card {
            transition: all 0.3s ease;
          }

          .blog-card:hover {
            transform: translateY(0px);
            box-shadow: 0 12px 30px rgba(0,0,0,0.3);
            border-color: #888;
          }

          .blog-card img {
            transition: transform 0.4s ease;
          }

          .blog-card:hover img {
            transform: scale(1.05);
          }

          .blog-card:hover .blog-title {
            color: #a78bfa;
          }
        `}
      </style>

      {/* TITLE */}
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "40px",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        Blog
      </h1>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 320px))",
          justifyContent: "center",
          gap: "30px",
          maxWidth: "1200px",
        }}
      >
        {posts?.map((post: any) => (
          <Link
            key={post.id}
            href={`/blog/${post.Slug}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              className="blog-card"
              style={{
                border: "1px solid #636363",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#141414",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                cursor: "pointer",
              }}
            >
              {/* IMAGE */}
              {post.image && (
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${
                    post.image.formats?.small?.url || post.image.url
                  }`}
                  alt={post.Title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              )}

              {/* CONTENT */}
              <div style={{ padding: "20px" }}>
                <h2
                  className="blog-title"
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                    marginBottom: "12px",
                    color: "#ffffff",
                    fontFamily: "satoshi, sans-serif",
                  }}
                >
                  {post.Title}
                </h2>

                <span
  className="read-more"
  style={{
    color: "#e2e2e2",
    fontWeight: "500",
    fontSize: "14px",
    fontFamily: "satoshi, sans-serif",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  }}
>
  Read More

  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}