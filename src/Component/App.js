import React from "react";
import './App.css';
import Blog from "./Menu/BlogRead/BlogRead";
import FormBlog from "./Menu/FormBlog/FormBlog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
// import Person from "./Menu/Person/Person";
import Bookmark from "./Menu/Bookmark/Bookmark";
import Forum from "./Menu/Forum/Forum";


function App() {
  return (

    <div>
    
    <Router>
      <Menu />
      <Routes>
        <Route path = '/BlogRead' element = {<Blog/>}/>
        <Route path = '/FormBlog' element = {<FormBlog/>}/>
        <Route path = '/Forum' element = {<Forum/>}/>
        <Route path = '/Bookmark' element = {<Bookmark/>}/>
        {/* <Route path = '/Person' element = {<Person/>}/> */}
      </Routes>
    </Router>
    </div>
  );
}


export default App;
