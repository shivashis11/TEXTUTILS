import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//  import About from './components/About';
import {  useState } from 'react';
import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";




function App() {

  const [mode, setmode] = useState('light'); // whether the dark mode is enabled or not 
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },1500)

    
  }
  const toggleMode = () =>{
    if(mode === 'light'){
    setmode('dark');
    document.body.style.backgroundColor = "#1d3d6c";
    showAlert("dark mode has been enabled ", "success");
    document.title = 'TextUtils - dark';

    }else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled ", "success");
       document.title = 'TextUtils - light';
    }
  }
  
  return (
    <>  

    <Navbar title="TextUtils" AboutText = "About" mode = {mode}  toggleMode={toggleMode} />
       <Alert alert = {alert} />
      
       <div className="container my-3" >
         < TextForm heading = "Enter the text to analyze below "  showAlert = {showAlert} mode = {mode} />

       </div>
       {/* <Navbar title="TextUtils" aboutText="About Text"  />  */}
       
       
        {/* <Router>
       <Navbar title="TextUtils" AboutText = "About" mode = {mode}  toggleMode={toggleMode} />
       <Alert alert = {alert} />
      
       <div className="container my-3" >
        <Switch>
              <Route exact path="/about">
                <About  mode = {mode}/>
              </Route>
              <Route exact path="/">
                < TextForm heading = "Enter the text to analyze below "  showAlert = {showAlert} mode = {mode} />

              </Route>
        </Switch>


       </div>
       </Router> */}
    
    </>
  );
}

export default App;
 