import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function GitHub() {
      const data = useLoaderData()
    // const [data,setdata] = useState([])
    // useEffect(() =>{
    //     fetch(' https://github.com/iamdipeeka/')
    //     .then(Response=>Response.json)
    //     .then(data =>{
           
    //         console.log(data);
    //        setdata(data)
    //     })
    // },[])


    return(
        <div className="text-center m-4 bg-gray-500 text-white">Github followers:{data.followers}
        <img src={data.avatar_url} alt="Git picture" width={400} />
        
        </div>
    )
    
}

export const githubInfoloader = async () =>{
  const response = await  fetch('https://api.github.com/users/iamdipeeka')

  return response.json()
}