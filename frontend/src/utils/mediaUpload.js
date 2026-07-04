import { createClient } from "@supabase/supabase-js";




let url="https://apnlssuesylgubftevnm.supabase.co"
let key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwbmxzc3Vlc3lsZ3ViZnRldm5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxODQzMjEsImV4cCI6MjA5ODc2MDMyMX0.f6Of6pLwoihySSr6RQPUXsEZm9MtsktLvMnkkhoSRr4"
const supabase = createClient(url, key);

export default function uploadMedia(file){
//send to superbase storage
    return new Promise((resolve, reject) => {
        
        if(!file){
            reject("No file provided");
            return;
        }else{

            const timeStamp = new Date().getTime();
            const fileName = timeStamp + "_" + file.name;
            
             supabase.storage.from("images").upload(fileName, file, {
            upsert:false,
            cacheControl :"3600"
            
                }).then(()=>{

                    

                    const publicUrl = supabase.storage.from("images").getPublicUrl(fileName);
                    resolve(publicUrl);

                }).catch((error)=>{
                    
                    reject(error);
                });
        }
    })
}

