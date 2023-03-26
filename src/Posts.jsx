import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { PostDetail } from "./PostDetail";

const maxPostPage = 26;

async function fetchPosts(page) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  );
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    if(currentPage < maxPostPage){
      const nextPage = currentPage + 1
      queryClient.prefetchQuery(["posts", nextPage], () => fetchPosts(nextPage), { staleTime: 2000, keepPreviousData: true})  
    }
  }, [currentPage, queryClient])

  const { data, isError, isLoading } = useQuery(["posts", currentPage], () => fetchPosts(currentPage), { staleTime: 2000});

  if(isLoading) return <p>Loading...</p>
  if(isError) return <h3>Something went wrong, try again!</h3>

  return (
    <>
      <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button
          disabled={currentPage <= 1}
          onClick={() => {
            fetchPosts(currentPage - 1)
            setCurrentPage(currentPage => currentPage - 1)
          }
        }>
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage >= maxPostPage}
          onClick={() => {
            fetchPosts(currentPage + 1)
            setCurrentPage(currentPage => currentPage + 1)
          }
        }>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}