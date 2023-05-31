import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
const Home = () =>{
    const [posts,setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const API_URL = "https://fakestoreapi.com/products";
    async function fatchApi(){
        try{
            setLoading(true)
            const result = await fetch(API_URL);
            const data = await result.json();
            console.log("Data is here");
            console.log(data);
            setPosts(data);
            setLoading(false)
        }
        catch(err){
         console.log("Data is not here")
         setPosts([]);
        }
    }
    useEffect( ()=>{
     fatchApi();
    },[] )
    return(
        <div>
            
      {
        loading ? <Spinner />  :
        posts.length > 0 ? 
        (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }
    </div>
    );
}
export default Home;