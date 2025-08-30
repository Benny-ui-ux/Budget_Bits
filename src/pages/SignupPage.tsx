import React, { useState } from "react";
import Header from '../components/common/Header.tsx';
export const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
   

<div className="flex flex-col items-center justify-center min-h-screen bg-primary">
     <Header title='Budget Bits' center></Header>
      <div className='flex flex-1 justifty-center items-center'>
      <div
        className=" justify-self-center bg-secondary  min-h-100 min-w-200 min-w- p-4  
      rounded shadow-md p-2 border-4 border-tertiary  gap-20"
      >
        <h1 className=" text-5xl font-bold text-center text-white mt-10 shadow-mb">
          Sign up to begin
        </h1>

        <div className="  flex flex-col gap-15 items-center w-full h-80 justify-center">
          <input
            className="h-12 w-100 bg-white border-2 border-tertiary rounded shadow-md p-2 text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />    
          <input
            className="h-12 w-100 bg-white border-2 border-tertiary  rounded shadow-md p-2 text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

        </div>
      </div>
      </div>
    </div>
    </>
  );
};
