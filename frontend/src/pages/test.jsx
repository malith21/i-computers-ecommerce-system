import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import uploadMedia from "../utils/mediaUpload.js";


let url="https://apnlssuesylgubftevnm.supabase.co"
let key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwbmxzc3Vlc3lsZ3ViZnRldm5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxODQzMjEsImV4cCI6MjA5ODc2MDMyMX0.f6Of6pLwoihySSr6RQPUXsEZm9MtsktLvMnkkhoSRr4"
const supabase = createClient(url, key);

export default function TestPage(){
    
    const [file, setFile] = useState(null);

   async function handleUpload(){
       try{

              const url = await uploadMedia(file);
              console.log(url);

       }catch(error){
           console.error(error);
       }
       
    }

    return(

        <div className="w-full h-full flex flex-col items-center justify-center">
            <input onChange={
                (e)=>{
                    setFile(e.target.files[0]);
                }
            }

            type="file"/>

            <button onClick={handleUpload} className="bg-accent text-primary px-4 py-2 rounded-lg mt-4">
                Upload
            </button>
          
        </div>
    )
}