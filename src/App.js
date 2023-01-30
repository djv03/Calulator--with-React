import {
  useState,
  useRef
} from "react"; 
import "./App.css";
import Footer from "./Footer";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
    inputRef.current.value=null;
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
    e.preventDefault(); 
    setResult((result) => result -Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    // Add the code for the plus function 
    e.preventDefault(); 
    setResult((result) => result* Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    // Add the code for the divide function
    e.preventDefault(); 
    setResult((result) => result/ Number(inputRef.current.value));  
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault();
    inputRef.current.value=null;
    
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function
    e.preventDefault(); 
    setResult(()=>0);  
  }; 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
        {/* my answer of caculation goes here */}
          {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button> 
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput}>resetInput</button> 
        <button onClick={resetResult}>reset result</button> 
        <div className="container">
          <h2 className="heading">Instruction to use App</h2>
          <p className="instr">1.enter your number in input field and hit ENTER</p>
          <p className="instr">2. hit button according to your desired operation like add,sub etc</p>
          <p className="instr">3. erase number in the input and enter new number and hit ENTER again </p>
          <h3>you have your result!!! </h3>
        </div>
      </form> 
      <Footer/>
    </div> 
  ); 
} 
 
export default App; 
