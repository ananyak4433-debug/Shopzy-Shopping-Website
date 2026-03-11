// // import { useMemo, useState } from "react";

// // function New() {
// //   const [count, setCount] = useState(0);

// //   const total = useMemo(() => {
// //     return count * 1000;
// //   }, [count]);

// //   console.log(total);
// //   console.log(count);
  
  
// //   return (
// //     <>
// //       <h1>{total}</h1>
// //       <button onClick={() => setCount(count + 1)}>+</button>
// //     </>
// //   );
// // }


// //   <button onClick={() => setCount(count + 1)}>Increment</button>
// //        <button onClick={() => setCount(count - 1)}>Decrement</button>

// //         <h2>Count: {count}</h2>


// // export default New;





// import { useMemo, useState } from "react";

// function New(){
//   const [count,setCount]=useState(0);
//   const [input, setInput]=useState(0);


//   function expensiveTask(num){
//     console.log("Inside Expensive Task");
//     for(let i=0; i<=1000000000; i++){}
//     return num*2;
//   }

//   // let doubleValue=expensiveTask(input)
//   let doubleValue=useMemo(()=>expensiveTask(input),[input]);

//   return(
//     <div>
//       <button onClick={()=>setCount(count+1)}>Increment</button>

//       <div>
//         count:{count}
//       </div>

//       <input type="number" 
//       placeholder="Enter Number" 
//       value={input} 
//       onChange={(e)=>setInput(e.target.value)} />

//       <div>
//         Double:{doubleValue}
//       </div>
//     </div>
//   )
// }

// export default New;