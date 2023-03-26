# blog-em-ipsum-react-query
Let's create a blog with lorem ipsum content and pagination, as an alpha project using React Query 🌺

<br>
    <p>
        <img width='300px' height='250px' src='https://media.giphy.com/media/lQDn8MhvOA2rAh7c45/giphy.gif' alt="new-blog-post"/>
    </p>
</br>

## Want to practice?
You can start from scratch and follow these guidelines:
- Install dependencies: in this case, on a React app boilerplate, just add React Query
- Configure React Query on the app
- Implement the whole fetchPosts feature using `useQuery`, including `isLoading` and `error` handler
- As a user, I want to be able to call the next block of post with a pagination feaature
- Improve UX by using `prefetchQuery`: in this case, as a user, I want to seamlessly travel around the pages without seeing 'Loading...' all the time I click
- As a user, I want to click in a post title and read the comments about it: implement the `fetchComments` feature
- Extra, but 🟠 the API is not going to delete the post: implement the `deletePost` feature with `useMutation`
- Extra: use the React Query Devtools to check how your app behaves
- Extra: you can use Typescript

## A classic api as a reference
Check the documentation at https://jsonplaceholder.typicode.com/ and see how the api works

## Dependencies
- `react-query` version 3