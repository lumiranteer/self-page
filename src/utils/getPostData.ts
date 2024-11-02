

type Post = {
  title: string
  file: string
}

export default function getPostData(post: String) {
  return {
    slug: post.split('/').pop().split('.').shift(),
  }
}
