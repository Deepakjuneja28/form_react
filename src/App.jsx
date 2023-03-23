import React, { useState } from "react";
import "./index.css";

function App() {
  const [formData, setFormData] = useState({ firstName: "" , lastName:"" , email:'', rememberMe:false,});

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]:type === "checkbox" ? checked: value }));
  }

  function submitHandler(event){
    event.preventDefault();
    alert('your data is saved')
    console.log(formData)
  }

  return (
    <div className="flex flex-col items-center h-[100vh] justify-center ">
      <form onSubmit={submitHandler}  className="border-white border-2 h-[600px] w-[500px]  bg-white rounded-lg items-center ">
        <h1 className=" text-3xl m-12  font-extrabold bg-white text- text-center opacity-35">Sign In</h1>

        

    <div className="bg-white text-center m">
    <input
          className="border-2  p-3  bg-white w-[400px] items-center "
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          id="firstName"
          onChange={changeHandler}
        />
    </div>
       <br />

        <div className="bg-white text-center">

          <input
          className="border-2  p-3  bg-white w-[400px] "
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          id="lastName"
          onChange={changeHandler}
        />
        </div>
           <br />
        <div className="bg-white text-center">

          <input
          className="border-2  p-3  bg-white w-[400px] "
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          id="email"
          onChange={changeHandler}
        />
        </div>
           <br />

           <div className="bg-white text-center">

          <input
          className="border-2  p-3  bg-white w-[400px] "
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          id="password"
          onChange={changeHandler}
        />
           </div>

      <br />

      <div className=" bg-white  ml-14 flex gap-2">

        <input type="checkbox"
        className=" mr-"
        id="rememberMe"
        name="rememberMe"
        checked={formData.rememberMe}
        onChange={changeHandler}
        
        
        />
        <label className="bg-white text-gray-400 " htmlFor="rememberMe"> Remember Me</label>
      </div>

        <br />
        <br />

       <div className="text-white text-center border-2 w-[400px] items-center mx-auto p-2 cursor-pointer rounded-lg
       transition-all ease-in-out hover:scale-110">
        <button className="">Submit</button>
       </div>


      </form>
    </div>
  );
}

export default App;
