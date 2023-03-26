import { useQuery } from "react-query"

async function fetchComments(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {method: 'GET'})
    return response.json()
}

async function deletePost(id) {
    const response = await fetch(`ttps://jsonplaceholder.typicode.com/postId/${id}`, {method: 'DELETE'})
    return response.json()
}

async function updatePost(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/postId/${id}`, {method: 'PATCH', data: {title: 'Love React Query'}})
    return response.json()
}

export function PostDetail({ post }) {
  const { data, isError, isFetching } = useQuery(['postComments', post.id], () => fetchComments(post.id))

  if(isFetching) return <p>Loading....</p>
  if(isError) return <h3>Something went wrong, try again!</h3>

  return (
      <>
        <h3>{post.title}</h3>
        <button>Delete</button> <button>Update title</button>
        <p>{post.body}</p>
        <h4>Comments</h4>
        <li key={data.id}>
            ({data.email}): {data.body}
        </li>
      </>
    );
}