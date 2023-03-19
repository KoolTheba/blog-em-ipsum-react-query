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
    // replace with useQuery
    const data = [];
  
    return (
      <>
        <h3 style={{ color: "blue" }}>{post.title}</h3>
        <button>Delete</button> <button>Update title</button>
        <p>{post.body}</p>
        <h4>Comments</h4>
        {data.map((comment) => (
          <li key={comment.id}>
            {comment.email}: {comment.body}
          </li>
        ))}
      </>
    );
}