import React , {useEffect,useState}  from 'react'
import axios from 'axios';


export default function ProjectList(props) 
{

    const [projectList,setProjectList]= useState([])

       const ProjectAPI=(URL='https://ThabisoFakude40.bsite.net/api/Projects/')=>{
           return{
               fetchAll:()=>axios.get(URL),
               delete:id=>axios.delete(URL+id)
           }
               
           
       }

     useEffect(()=>{
         refreshProjectList();
     },[])
    function refreshProjectList(){
        
        ProjectAPI().fetchAll()
        .then(res=>setProjectList(res.data))
        .catch(err=> console.log(err))
    } 


        const onDelete=(e,id)=>{
            if(window.confirm('Are you sure you want to delete this record')){
                ProjectAPI().delete(id)
                .then(res=>refreshProjectList())
                .catch(err=>console.log(err))
            }
             
        }

    
  return (
    <div className='update-form-container'>
                            
                            <table className='table table-success table-striped table-hover table-boredered'>
                                <thead >
                                    <tr>
                                       
                                       <th scope='col'>ProjectName</th> 
                                       <th scope='col'>GithubLink</th>
                                       <th scope='col'>URLLink</th>
                                       <th scope='col'> ImageName</th>
                                       <th scope='col'>Message</th>
                                       <th scope='col'>Action</th>    
                                        
                                        
                                    </tr>
                                    
                                </thead>
                                

                                <tbody>
                                    
                                   
                            {
                                projectList.map((project,index)=>(
                                    <tr key={index}>
                                    <td>{project.ProjectName}</td>  
                                    <td>{project.GithubLink}</td>
                                    <td>{project.URLLink}</td>
                                    <td>{project.ImageName}</td>
                                    <td>{project.Message}</td>
                                    <td>
                                        <button className='btn btn-light delete-button' onClick={e=> onDelete(e,parseInt(project.ID))}>Delete</button>
                                    </td> 
                               </tr>
                                ))
                                             
                                   

                                
                                
                                
                            }
                                     
                                </tbody>
                                </table>
     </div>
                        

)
}

                  

                  
                  
                  