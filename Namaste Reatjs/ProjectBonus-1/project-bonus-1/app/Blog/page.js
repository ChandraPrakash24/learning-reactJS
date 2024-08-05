import Link from 'next/link'
import React from 'react'
const Blog = () => {
  return (
    <div>Blog
    <Link href="/">Home</Link>
    <Link href="/About">About</Link>
    </div>
  )
}

export default Blog