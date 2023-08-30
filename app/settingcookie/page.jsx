"use client"
import React from 'react';
import { useRouter } from 'next/navigation'

function Readingcookie() {
    const router = useRouter();
    const handleClick = async () => {
        const response = await fetch(`http://localhost:3000/api/cookie`,{
            method: "POST"
        });
        //console.log(response);
        if(response.status === 201){
            router.push('/readingcookie');
        }
    };

    const bearerTokenClick = async () => {
        const response = await fetch(`http://localhost:3000/api/home`,{
            method: "POST"
        });
        //console.log(response);
        if(response.status === 201){
            router.push('/dashboard');
        }
    };
  
    return (
        <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Set Cookie</button>
            <br/><br/><br/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={bearerTokenClick}>Set Bearer Token</button>
        </>
    );
}

export default Readingcookie
