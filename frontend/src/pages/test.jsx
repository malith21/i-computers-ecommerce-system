import { useState } from "react";
export default function TestPage(){
         const [emotion, setEmotion] = useState("😊")

    return(

        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
            
           <div className="w-[300px] h-[300px] bg-white rounded-2xl flex items-center justify-center text-6xl cursor-pointer">
                {emotion}
           </div>

           <div className="w-[300px] h-[100px] bg-white rounded-2xl flex items-center justify-around mt-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={
                () => {
                    setEmotion("😢")
                }}>Sad</button>
            
           </div>
           <div className="w-[300px] h-[100px] bg-white rounded-2xl flex items-center justify-around mt-6">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={
                () => {
                    setEmotion("😊")
                }}>Happy</button>
           </div>
           <div className="w-[300px] h-[100px] bg-white rounded-2xl flex items-center justify-around mt-6">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={
                () => {
                    setEmotion("😡")
                }}>Angry</button>
           </div>
        </div>
    )
}