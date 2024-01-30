import { useEffect, useState } from "react";
import axios from 'axios';
function Github(){
  const[data,setdata]=useState("");
  useEffect(()=>{
    axios.get(`https://api.github.com/users/jainmayank12566`)
    .then((data12)=>{
      console.log(data12.data);
      setdata(data12.data);
    })
  },[]);
  return(
    <div>
      <h1 className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">followers {data.followers}</h1>
      <img src={data.avatar_url} alt="" />
      <h1 className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">{data.login}</h1>
    </div>
  )
}
export default Github;