import Link from 'next/link';

const posts = [
  { slug: 'post-1', title: 'Meu Primeiro Post', summary: 'Resumo do post 1' },
  { slug: 'post-2', title: 'Outro Post Interessante', summary: 'Resumo do post 2' },
];

export default function Blog() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      {posts.map((post) => (
        <div key={post.slug} className="mb-4">
          <h2 className="text-2xl font-semibold">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
          <p>{post.summary}</p>
        </div>
      ))}
    </div>
  );
}