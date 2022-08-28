import { useState, useEffect } from "react";
import config from './helper'
const useFetch = (endPoint) => {

    const [Questions ,setQuestions] = useState(null);
    const [pending , setPending]= useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch(config.baseUrl + endPoint)
          .then (res => {
           if(!res.ok){
             throw Error(' Can\'t load..');
           }
         return res.json();
         })
          .then( data => {
           setQuestions(data);
           setPending(false);
           setError(null);
         })
          .catch(err => {
           setError(err.message);
           setPending(false);
         });  
        }, 3000);
      } , [endPoint]);   
      
      return {Questions, pending ,error};
}

export default useFetch;