import { useQuery, useMutation } from "react-query"

async function fetchComments(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {method: 'GET'})
    return response.json()
}

async function deletePost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/postId/${id}`, {method: 'DELETE'})
    return response.json()
}

export function PostDetail({ post }) {
  const { data, isError, isLoading } = useQuery(['postComments', post.id], () => fetchComments(post.id))
  const deleteMutation = useMutation(postId => deletePost(postId))

  if(isLoading) return <p>Loading....</p>
  if(isError) return <h3>Something went wrong, try again!</h3>

  return (
      <>
        <h3>{post.title}</h3>
        <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
        {deleteMutation.isLoading && <p>Deleting the post...</p>}
        {deleteMutation.isError && <p style={{ color: 'red', fontSize: '14px'}}>Error deleting the post</p>}
        {deleteMutation.isSuccess && <p style={{ color: 'green', fontSize: '14px' }}>Post has not been deleted due to the API :)</p>}
        <p>{post.body}</p>
        <h4>Comments</h4>
        <li key={data.id}>
            ({data.email}): {data.body}
        </li>
      </>
    );
}