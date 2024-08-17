import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results/index'
import Freelances from './pages/Freelances/index'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="*" element={<Error />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/Results" element={<Results />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)