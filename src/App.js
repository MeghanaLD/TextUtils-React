import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { use, useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  // const removeBodyClass=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  // }
  const toggleMode = (cls) => {
    // removeBodyClass()
    document.body.classList.add('bg-'+cls)
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-4">
        <Router>
        <Routes>
        <Route path="/TextUtils-React" element={<Navigate to="/" />} />
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils- word counter|character counter|remove extra spaces" mode={mode} />} />
        <Route path="/about" element={<About  mode={mode}/>} />
      </Routes>
      </Router>
   
          
        
      </div>
    </>
  );
}

export default App;
