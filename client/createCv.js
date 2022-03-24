import React, {useState} from 'react'

const CreateCv = () => {

    const [myProfile, setMyProfile] = useState();
    const [getInTouch, setGetInTouch] = useState();
    const [skills, setSkills] = useState();
    const [projects, setProjects] = useState();
    const [image, setImage] = useState('http://dtzjtrurukjr');
    
     const cvInfo = {
    myProfile: myProfile,
    getInTouch: getInTouch,
    skills: skills,
    projects: projects,
  }

  // const sendCvInfo = () => {
    
  //   axios.post('http://localhost:3000/createcv', cvInfo)
  // }
  // useEffect(() => {
  //   axios.post('http://localhost:3000/createcv', cvInfo)
  // }, [])

  return (
    <div>
        <div className="cv-info">

<div className="left-box">
<label htmlFor="">my profile</label>
  <textarea type="text" value={myProfile}
  name="myProfile"
  onChange={(e) => setMyProfile(e.target.value)}
  />

  <label htmlFor="">getInTouch</label>
  <textarea type="text" value={getInTouch}
    name="getInTouch"
    onChange={(e) => setGetInTouch(e.target.value)}
  />

  <label htmlFor="">skills</label>
  <textarea type="text" value={skills}
    name="skills"
    onChange={(e) => setSkills(e.target.value)}
  />

  <label htmlFor="">projects</label>
  <textarea type="text" value={projects}
     name="projects"
     onChange={(e) => setProjects(e.target.value)}
  />
</div>

<div className="rigth-box">
{/* <label htmlFor="">my profile</label>
  <textarea type="text" value={cv.myProfile} />

  <label htmlFor="">getInTouch</label>
  <textarea type="text" value={cv.getInTouch} />

  <label htmlFor="">skills</label>
  <textarea type="text" value={cv.skills} />

  <label htmlFor="">projects</label>
  <textarea type="text" value={cv.projects} /> */}
</div>
</div>
    </div>
  )
}

export default CreateCv