import React from "react";
import { saveAs } from "file-saver";

function Request() {

    const saveFile = () => {
      
  
        saveAs(
          "https://drive.google.com/file/d/1sHZ4pPopqS2IXkCwm5cUk37lgXwKYq_9/view?usp=sharing",
          "datastructure.pdf"
        );
      
  
    };
    return (
      <div className="pt-5 my-5">
        
        <button className="btn btn-outline-success" onClick={saveFile} id="datastructure">Datastructure.pdf</button>
      </div>
    );
  
  
}
export default Request;