import {useHistory, useParams} from "react-router-dom"
import useFetchData from "./useFetchData";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetchData(`https://api.themoviedb.org/3/movie/${id}?api_key=45c685770740af4c6a53380349be9847`);
    const history = useHistory();

    const handleClick = () => {
        fetch(' http://localhost:8000/blogs/' + id, {
            method:'DELETE'
        }).then(() =>{
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.release_date}</p>
                    <p>{blog.overview}</p>
                    <button onClick={handleClick}>delete </button>
                </article>
            )}
            
        </div>
     );
}
 
export default BlogDetails;