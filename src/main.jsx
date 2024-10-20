import { useEffect, useState } from "react";
import  ReactDOM  from "react-dom/client";
import axios from "axios"
import { useForm } from 'react-hook-form';
import "./index.css"


const Applayout = ()=>{

  const { reset, register, control, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [data , setData] = useState([])
  
  const fetchdta = async(data)=>{
    const data1 = await axios.get("https://backendtest-nu.vercel.app/?vercelToolbarCode=l6xoaVPekClcrjz");
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
    reset();
    
  }
  useEffect(()=>{
    fetchdta();
  },[])

  return(
    <>
        <form action="" method="post" onSubmit={handleSubmit(onsubmit)} className="" >
          <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col gap-5 justify-center items-center border-2 p-10">
          <div>
            <p>TechX form!</p>
          </div>
            <input type="text" name="partid" id="partid" placeholder="name" {...register("name")} className="border p-3" required/>
            <input type="email" name="" id="" placeholder="email" {...register("email")} className="border p-3" required/>
            <input type="text" name="" id="" placeholder="college" {...register("college")} className="border p-3" required/>
            <input type="text" name="" id="" placeholder="dept" {...register("dept")} className="border p-3" required />
            <select name="" id="" {...register("event1")} className="w-full p-3 border" required>
            <option value="ev1">ev1</option>
              <option value="ev2">ev2</option>
              <option value="ev1">ev4</option>
              <option value="ev2">ev5</option>
            </select>
            <select name="" id="" {...register("event2")} className="w-full p-3 border" required>
              <option value="ev1">ev1</option>
              <option value="ev2">ev2</option>
              <option value="ev1">ev4</option>
              <option value="ev2">ev5</option>
            </select>

            <button type="submit" className="border rounded-lg px-5 py-2">Submit</button>
          </div>

          </div>

          
          
        </form>

        
      </>
  )
}

const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout></Applayout>);