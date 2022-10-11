import { useState } from "react";

function useToggle(initialState=true) {
    const [visible , setVisible] =useState(initialState);
   
    function toggle() {
        setVisible(prevState=> !prevState);

        
    }
  

return [visible ,toggle ]
}

export default useToggle