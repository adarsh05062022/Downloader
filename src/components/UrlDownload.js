import React from "react";

const UrlDownload = ()=>{
    
    const downloadfile =   ()=>{
        let url = document.getElementById("urlLink").value;
         fetch(url).then(res => res.blob()).then(file =>{
            let tempUrl = URL.createObjectURL(file);

            let aTag = document.createElement("a");
            aTag.href = tempUrl;
            aTag.download = "filename"
            // aTag.remove()
            // aTag.textContent = ""
            // document.body.appendChild(aTag);
            aTag.click()

        })
        
        
    }
    return(
        <>
        <div className="container">
            <div>
            <h1>Hello this is downloadig page</h1>
            <div>
                <input type="url" name="" id="urlLink" placeholder="paste your link here" required />
                
            </div>
            
            <button className="my-2" onClick={downloadfile}>Download</button> 
            </div>
             

             
        </div>
        </>
    );
}

export default UrlDownload;