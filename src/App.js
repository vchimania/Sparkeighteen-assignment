import './App.css';
import Card from './Card';
import Card2 from './Card2';
import Card3 from './Card3';
import {useState} from "react";

function App() {
  const [pageNumber,setPageNumber]=useState(1)
  const handleNext=()=>{
    if(pageNumber<3) setPageNumber(pageNumber+1)
  }
  const handlePrev=()=>{
    if(pageNumber>1) setPageNumber(pageNumber-1)
  }
  return (
    <div className="App">
     {pageNumber===1 && <Card/>}
     {pageNumber===2 && <Card2/>}
     {pageNumber===3 && <Card3/> }
     <button onClick={handlePrev} disabled={pageNumber===1} className="btn btn-light">Previous</button>
     <button onClick={handleNext} disabled={pageNumber===3} className="btn btn-dark">Next</button>
    </div>
  );
}

export default App;
