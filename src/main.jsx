import { useEffect, useState } from "react";
import  ReactDOM  from "react-dom/client";
import axios from "axios"
import { useForm } from 'react-hook-form';
import Dummy from "./dumy/Dummy";



const Applayout = ()=>{

  const {register , handleSubmit } = useForm()

  const [data , setData] = useState([])
  
  const fetchdta = async(data)=>{
    const data1 = await axios.get("https://backendtest-3v2v.onrender.com");
    setData(data1.data)
    // console.log(data.data);
  }

  const onsubmit =async (data)=>{
    try {
      // Post data using Axios
      const response = await axios.post('https://backendtest-3v2v.onrender.com', data);
      alert('Form submitted successfully!');
    }catch (error) {
      alert('Form submission failed.');
    }
  }
  useEffect(()=>{
    fetchdta();
  },[])

  return(
    <>
        <form action="" method="post" onSubmit={handleSubmit(onsubmit)}>
          <div>
            <input type="text" name="partid" id="partid" placeholder="name" {...register("name")}/>
            <input type="email" name="" id="" placeholder="email" {...register("email")} />
            <input type="text" name="" id="" placeholder="college" {...register("college")} />
            <input type="text" name="" id="" placeholder="dept" {...register("dept")} />
            <select name="" id="" {...register("event1")}>
              <option value="ev1">ev1</option>
              <option value="ev2">ev2</option>
            </select>
            <select name="" id="" {...register("event2")}>
              <option value="ev1">ev1</option>
              <option value="ev2">ev2</option>
            </select>

            <button type="submit">Submit</button>
          </div>
        </form>

        
      </>
  )
}

const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout></Applayout>);