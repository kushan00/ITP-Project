import React, { Component,useState,useEffect } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';

// dima
import Homeheader from './components/Homeheader';
import Homefooter from './components/Homefooter';

// diniru
import ClientLogin from './components/ClientLogin';
import AllSubjectsView from './components/AllSubjectsView';
import AddEnrollment from './components/AddEnrollment';
import SubjectEmail from './components/SubjectEmail';

import Apply from './components/Apply'

// dima
import Specialevents from './components/Specialevents';
import Loginpage from './components/Loginpage';
import middle from './components/Middle';
import Aboutus from './components/Aboutus';
import Displaytimetables from './components/Displaytimetables';

// minosh
import Courses from './components/Courses';
import Course from './components/Course';
import BuyCourseDula from './components/BuyCourseDula';
import Login from './components/Login';


//malki
import Registration from './components/Registration';
import profile from './components/profile';




  function App() {

     

      const[posts , setPosts] = useState([])
    
      useEffect(() => {
    
        axios.get('http://localhost:8000/courses')
        .then(res => setPosts(res.data) )
        .catch(error => console.log(error));
    
    
      })

      

    return (
    <BrowserRouter>
      <div >
          <Homeheader/>

        <Route path="/apply"  component={Apply}></Route>   

        {/* diniru */}
        <Route path="/login"  component={ClientLogin}></Route> 
        <Route path="/allsubjects"  component={AllSubjectsView}></Route>
        <Route path="/addenrollsub/:id"  component={AddEnrollment}></Route>
        <Route path="/subemail"  component={SubjectEmail}></Route>

        {/* dima */}
        <Route path="/middle"exact component={middle}></Route>
        <Route path="/special" component={Specialevents}></Route>
        <Route path="/about" component={Aboutus}></Route>
        <Route path="/admin"  component={Loginpage}></Route>
        <Route path="/displaytimetables" component={Displaytimetables}></Route>

        {/* minosh */}
        <Route path = "/buycourse" component = {BuyCourseDula}></Route> 
        <Route  path="/course"  render={()=> <Courses posts={posts} />} 
        />
        <Route path="/course1/:id"    render={(props)=>  <Course {...props} posts={posts} />} />
        <Route  path="/log"  render={()=> <Login posts={posts} />} 
        />
        

    

        <Route path="/course/:id"    render={(props)=>  <Course {...props} posts={posts} />} />
        <Route  path="/allCourse"  component={Course} />

        {/* malki */}
        <Route path="/signupstd" component={Registration}></Route>
        <Route path="/loginstd" component={profile}></Route>


        <Route path="" component={Homefooter}></Route>

        

      </div>
    </BrowserRouter>
    )
  }

  export default App;

