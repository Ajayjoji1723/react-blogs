import { Router, Route, Routes } from 'react-router-dom';


import './App.css';

import Header from './components/Header';
import BlogsList from './components/BlogsList';
import BlogDetails from './components/BlogDeatils';

function App() {
  return (
    <div className="App">
     <Header />
      <Routes>
        <Route exact path = "/" element={<BlogsList />}/>
        <Route exact path = "/blogs/:id" element={<BlogDetails />}/>
      </Routes>

    </div>
  );
}

export default App;
