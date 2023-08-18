import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route, } from "react-router-dom";



function App() {
  const [btnText, setBtnText] = useState('Dark mode')
  const [alert, setAlert] = useState(null)
  const showA = (message, types) => {
    setAlert({
      msg: message,
      type: types
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [darkStyle, setDarkStyle] = useState(
    {
      color: '#142640d1',
      backgroundColor: 'white'
    }
  )
  const [darkBtnStyle, setDarkBtnStyle] = useState({
    color: "white",
    backgroundColor: '#142640d1'
  })

  const darkBtn = () => {
    if (darkStyle.color === '#142640d1') {
      setDarkStyle(
        {
          color: 'white',
          backgroundColor: '#142640d1'

        }
      )
      setDarkBtnStyle({
        color: '#142640d1 ',
        backgroundColor: 'white'
      }
      )
      setBtnText("light Mode")
    }
    else {
      setDarkStyle(
        {
          color: '#142640d1',
          backgroundColor: 'white'

        }
      )
      setDarkBtnStyle({
        color: 'white',
        backgroundColor: '#142640d1'
      }
      )
      setBtnText("Dark Mode")

    }
  }


  return (
    <div style={darkStyle}>
      <Navbar title="TextUtils" darkBtn={darkBtn} darkBtnStyle={darkBtnStyle} btnText={btnText} />
      <Alert alertMsg={alert} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={

            <Form heading="Enter the text below" darkStyle={darkStyle} showA={showA} />
          }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
