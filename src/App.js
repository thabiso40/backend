
import './App.css';
import Navbar from './Navbar/Navbar';

import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProjectList from './projectList/ProjectList';
import Profile from './Profile/Profile';
import EmailList from './emailList/emailList';

function App() {
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
          <Routes>
                <Route path="/" element={<ProjectList/>}/>
                  
                <Route path="/Profile" element={<Profile/>} />

                <Route path="/emailList" element={<EmailList/>} />
          </Routes>

      </Router>
        
      
     
    
    </div>
  );
}

export default App;
