import React,{useEffect,useState} from 'react'
import './Profile.css'
import ProjectList from '../projectList/ProjectList'
import axios from 'axios';
import {ToastContainer,toast,zoom,bounce} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const defaultimgsrc="./img/anonymous.png"
const initialFieldValues=
    {
        ID:0,
        ProjectName:'',
        GithubLink:'',
        URLLink:'',
        ImageName:'',
        Message:'',
        ImageFile:null,
        ImageSrc:defaultimgsrc,
    }
export default function Profile(props) {


const [values,setValues]=useState(initialFieldValues);
const [errors,setErrors]=useState({})
    const handleInputChange= e =>
    {
            const {name,value} = e.target;
            setValues({
                ...values,
                [name]:value
            })
    }

    
    const showPreview= e =>{
        if(e.target.files && e.target.files[0]){
            let ImageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload=x=>{
            setValues({
                ...values,
                ImageFile,
                ImageSrc: x.target.result
            })
                
               
            }
            reader.readAsDataURL(ImageFile)
            
        }
       else{
        setValues({
            ...values,
            ImageFile:null,
            ImageSrc:defaultimgsrc
        })
       }
    }
    const validate=()=>
    {
        let temp={}
        temp.ProjectName=values.ProjectName===""?false: true;
        temp.GithubLink=values.GithubLink===""?false:true;
        temp.URLLink=values.URLLink===""?false:true;
        temp.Message=values.Message===""?false:true;
        temp.ImageSrc=values.ImageSrc===defaultimgsrc?false:true;
        setErrors(temp)
        return Object.values(temp).every(x => x === true)
    }
    const resetForm= async () =>{
        setValues(initialFieldValues)
        document.getElementById('image-uploader').value=null;
        setErrors({})
    }
    const submitForm=async (e)=>
    {
            e.preventDefault();
            if(validate())
            {
                
                    const formData= new FormData()
                    formData.append('ID',values.ID)
                    formData.append('ProjectName',values.ProjectName)
                    formData.append('GithubLink',values.GithubLink)
                    formData.append('URLLink',values.URLLink)
                    formData.append('Message',values.Message)
                
                    formData.append('ImageFile',values.ImageFile)
                    const  res= await axios.post('https://ThabisoFakude40.bsite.net/api/Projects',formData);
                    toast.success("Project uploaded")
                   
                    
                    resetForm();
                
                
                  
                   
            }
            
    }
    const applyErrorClass= field =>((field in errors && errors[field]==false)?' invalid-field':'')


    const [projects,setProjects]= useState([])
    

   
  return (
    <div className='container'>
        
            <div className='profile-card'>
                    
                <div className='Form-Upload'>
                   
              

                    <form onSubmit={submitForm}>
                                <ToastContainer/>   

                        <div className='picture-container'>
                             <img src={values.ImageSrc} className='card-image-top'/>
                        </div>
                            <br/>

                            <input type='file'accept='image/*' 
                            id='image-uploader'
                            
                            className={'form-control-file'+ applyErrorClass('ImageSrc')}
                                onChange={showPreview}
                                />


                            <label htmlFor='ProjectName'>ProjectName</label>
                                <input 
                                 className={'form-control' + applyErrorClass('ProjectName')}
                                 name="ProjectName"
                                onChange={handleInputChange}
                                value={values.ProjectName}
                                />
                      
                            <label htmlFor='GithubLink'>GithubLink</label>
                                <input type='text'
                                 className={'form-control' + applyErrorClass('GithubLink')}
                                 name="GithubLink"
                             onChange={handleInputChange}
                                value={values.GithubLink}
                                />
 

                            <label htmlFor='URLLink'>URLLink</label>
                                <input type='text' 
                                 className={'form-control' + applyErrorClass('URLLink')}
                                 name="URLLink"
                                 onChange={handleInputChange}
                                value={values.URLLink}
                                />
 
                            <label htmlFor='Message'>Message</label>
                                <textarea type='text'
                                 className={'form-control' + applyErrorClass('Message')}
                                 name="Message"
                                onChange={handleInputChange}
                                value={values.Message}
                                />

                                <div className='form-group text-center'>
                                    <button type='submit' className='btn btn-secondary'> submit </button>
                                </div>
                     </form>

                </div>
                        

                        </div>
</div>
            
        
  
  )
}
