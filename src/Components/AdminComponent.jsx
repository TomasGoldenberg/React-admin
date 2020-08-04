import React , {useState,useEffect} from "react";
import AdminRow from "./AdminRow";
import Pagination from "./Pagination";
import axios from 'axios';
import "../Assets/styles/components/AdminComponent.css"

const AdminComponent = ()=>{
    
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage]     = useState(1);
    const [itemsPerPage]   = useState(20);  
    
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        };
        
        fetchPosts();
    }, []);
    
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = posts.slice(indexOfFirstItem,indexOfLastItem)


    const paginate = (pageNumbers)=>{
        setCurrentPage(pageNumbers)
    }

    if (loading) {
       return <h2>Loading...</h2>;
     }
    return(
    <>
        <div className="titles">
            <h2 className="admin--id">Id</h2>
            <h2 className="admin--title">Title</h2>
            <h2 className="admin--body">Body</h2>

        </div>
       <div >
           {currentItem.map(item =>
            <AdminRow key={item.id} {...item} />
            )}
       </div>
       <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={posts.length}
            paginate={paginate}
        />



    </>
    )
}



export default AdminComponent;