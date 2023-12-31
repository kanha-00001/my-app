
import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


 

function App() {
  const [Mode,setMode] = useState("light");

  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })

  };
  setTimeout(() => {
    setAlert(null);
  }, 3000);


  const toggleMode = () =>{
    if(Mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = '#716764';
      showAlert("dark mode is enabled","success");
    };
    if (Mode === "dark"){
      setMode("light");  
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled","success");
    };

  }
  return (
    <>
    
    <Navbar title="SOMETHING"  Home = "Home" mode={Mode}></Navbar>
    <Alert alert = {alert} />
    <div className='container my-3'>
    <Textform showAlert={showAlert} Heading = "ENTER YOUR TEXT TO ANALYZE"  toggleMode={toggleMode} />
    
      
   </div>
   

    </>
  )
  ;
  }
export default App;
