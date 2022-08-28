
import Question from "./questionlist";
import useFetch from "./useFetch";

const Homepage = () => {
   
    const { Questions , pending,error} = useFetch('questions');
  
   
  
   return ( 
        <div>
          {error && <div>{error}</div> }
          {pending && <div> Loading...</div> }
          {Questions && <Question ques={Questions}/> }
        </div>
     );
        }
       
 
export default Homepage;