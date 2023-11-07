// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
    const {data: blogs, isPending, error} = useFetch('https://api.themoviedb.org/3/movie/top_rated?api_key=45c685770740af4c6a53380349be9847')
        console.log(blogs)
    // const handleDelete =(id) => {
    //     const newBlog = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlog)
    // }
   
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>is Loading...</div>}
           {blogs && <BlogList blogs={blogs} title={"All Blogs!"} />}
        </div>
     );
}
 
export default Home;