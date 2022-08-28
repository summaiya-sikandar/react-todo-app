const Question = (props) => {
    const Questions= props.ques;
  
    return ( 
        <div>
         <h2>Questions!!!</h2>
         {Questions.map((Questions) => (
           <div key={Questions.id}> 
             <p>{Questions.title}</p>
           </div>
          ))}
        </div>
     );
}
 
export default Question;