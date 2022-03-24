import React, { useState, useEffect } from 'react';
import axios from 'axios';

const cvTemplates = () => {

    const [info, setInfo] = useState('');

  

    useEffect(() => {
       
      axios.get('http://localhost:3000/cvs').then((response) => {
          setInfo(response)
      })
    }, [])


  return (
    
         
        <div className="main-cv">
             { console.log(info.data)}
          {
          
          info !== '' ? 
            
          info.data.map((cv) => {
            console.log(cv);
              return(
                <div className='cv'>
               <div className="altern">

              
                  <div className='img-box'>
                    <img src={cv.image} alt="" />
                    <div className='personal-info'>
                      <p> Name : {cv.name} </p>
                      <p> phone number : {cv.phone} </p>
                      <p> Adresse : {cv.adresse} </p>
                    </div>
                  </div>
      
                <div className="cv-info">
      
                <div className="left-box">
                <label htmlFor="">my profile</label>
                  <div>{cv.myProfile}</div>
        
          
                  <label htmlFor="">getInTouch</label>
                  <div>{cv.getInTouch}</div>
                  
            
          
                  <label htmlFor="">skills</label>
                  <div>{cv.skills}</div>
            
          
                  <label htmlFor="">projects</label>
                  <div>{cv.projects}</div>
        
                </div>
          
                <div className="rigth-box">
                <label htmlFor="">my experience</label>
                <div>{cv.experience}</div>
                 
          
                  <label htmlFor="">Education</label>
                  <div>{cv.education}</div>
                 
          
                  <label htmlFor="">skills</label>
                  <div>{cv.skills}</div>
                  
          
                  <label htmlFor="">projects</label>
                  <div>{cv.projects}</div>
                  
                </div>
            </div>
            </div>
      </div>
              
              )
          })
          
          
          : null
        }
      </div> 
   
  )
}

export default cvTemplates