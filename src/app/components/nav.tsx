'use client'
import React, {useState} from "react";
import Link from "next/link";
export default function Nav(){
    return (
        <nav className="bg-green-300 p-3">
            <ul className="flex">
                <li className="mr-6 "><Link className="hover:text-red-500 hover:bg-blue-500" href="/Student" >Student</Link></li>
                <li className="mr-6" ><Link className="hover:text-red-500 hover:bg-blue-500" href="/Course" >Course</Link></li>
                <li className="mr-6 "><Link className="hover:text-red-500 hover:bg-blue-500" href="/Teacher">teacher</Link></li>
               
            </ul>
        </nav>
    );
}