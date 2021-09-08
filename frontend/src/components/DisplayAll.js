
import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import adminCourseDisplay from './adminCourseDisplay';


const DisplayAll = ({posts}) => {

    const[course,setCourse]  = useState([])
    const deleteCourse = id=>{

        axios.delete(`http://localhost:8000/courses/${id}`)
      
        .then(res => alert(res.data))
           
                     setCourse(course.filter(elem => elem._id !== id ));
        }


    return (

        <div>
     


<div className="container">
  <br></br>
  <h1>Manage All Course</h1>
  <div align="left">
    <p>The Course Currently Available In The Institue</p>
    </div>
  <div align="right">
    <p></p>
  <Link to ={{
        pathname:`/add-course`
      }}>
        
       <button type="button" className="btn btn-info "  > <i class="fas fa-plus-circle"></i>&nbsp;Add New Course </button>
    </Link>
</div >
 
    <br></br>
    <br></br>
<table class="table">
  <thead>
    <tr class="text-info bg-dark">
     
     
      <th Scope="col">❌</th>
      <th scope="row">Course ID</th>
      <th scope="row">Course Name</th>
      <th scope="row">Course Type</th> 
      <th scope="row">Enroll Requirement</th>
      <th scope="row">Course Duration</th>
      <th scope="row">Image</th>
      <th scope="row">More Information</th>
      <th scope="row">Delete Course</th>
      <th scope="row">Update Course</th>

    </tr>
    </thead>

  <tbody>

  {posts.map((course, index) =>(
 
 <tr key={index}>
 <th scope="row">{index+1}</th>
    
      <td>{course.courseID}</td>
      <td>{course.courseName}</td>
      <td>{course.courseType}</td>
      <td>{course.requirement}</td> 
      <td>{course.duration}</td>
      <td><div class="text-center">
    <img src={`/uploads/${course.courseImage}`} alt="..." style={{height: "55px" ,width: "84px" }}  />
    </div></td>

      <td> <Link to ={{
        pathname:`/course/${course._id}`
      }}>
       <button type="button" class="btn btn-success" style={{marginTop:'10px'}} > <i class="fas fa-search"></i>&nbsp;More.. </button>
    </Link></td>

      <td><button  onClick={() => deleteCourse(course._id)}    className="btn btn-danger" style={{marginTop:'10px'}}><i class="far fa-trash-alt">&nbsp;delete</i>
      </button></td>

 

        <td>
   

<Link to={`/Cupdate/${course._id}`} 

className="btn btn-warning" style={{marginTop:'13px'}}>

<i class="fas fa-edit"></i>&nbsp;Edit </Link>


        </td>
      
     
      
      

    </tr>
  
  ))}  
  
  </tbody>

</table>
</div>
          
       



       </div>
    )
}

export default DisplayAll
