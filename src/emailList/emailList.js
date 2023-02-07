import React , {useEffect,useState}  from 'react'
import axios from 'axios';


export default function EmailsList(props) 
{

    const [Emails,setEmails]= useState([])

       const ProjectAPI=(URL='https://ThabisoFakude40.bsite.net/api/Emails/')=>{
           return{
               fetchAll:()=>axios.get(URL),
               delete:id=>axios.delete(URL+id)
           }
               
           
       }

     useEffect(()=>{
         refreshEmails();
     },[])
    function refreshEmails(){
        
        ProjectAPI().fetchAll()
        .then(res=>setEmails(res.data))
        .catch(err=> console.log(err))
    } 


       
             
        

    
  return (
    <div className='update-form-container'>
                            
                            <table className='table table-success table-striped table-hover table-boredered'>
                                <thead >
                                    <tr>
                                       
                                       <th scope='col'>Name</th> 
                                       <th scope='col'>EmailAddress</th>
                                       <th scope='col'>Message</th>  
                                        
                                    </tr>
                                    
                                </thead>
                                

                                <tbody>
                                    
                                   
                            {
                                Emails.map((project,index)=>(
                            <tr key={index}>

                                    <td>{project.Name}</td>  
                                    <td>{project.EmailAddress}</td>
                                    <td>{project.Message}</td>
                                   
                            </tr>
                                ))
                                             
                                   

                                
                                
                                
                            }
                                     
                                </tbody>
                                </table>
     </div>
                        

)
}
