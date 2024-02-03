import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';




function App() {
  return (
    <div className="App">
      {/* Your main content */}
      <LoginForm />
      <div className="left-side-text">
        <p style={{fontWeight:'bold',fontSize:'30px',color:"white"}}>"Unlock Your</p>
        <p style={{fontWeight:'bold',fontSize:'50px',color:'white'}}> Creativity: Seamlessly </p>
        <p  style={{fontWeight:'bold',fontSize:'50px',color:'white'}}>Access Your Digital</p>
        <p style={{fontWeight:'bold',fontSize:'50px',color:'white'}} >Access Your Digital</p>
        <p style={{fontWeight:'bold',fontSize:'50px',color:'white'}}> Canvas with Builder's</p>
        <p style={{fontWeight:'bold',fontSize:'50px',color:'white'}}> Intuitive Login</p>
        <p style={{fontWeight:'bold',fontSize:'50px',color:'white'}}> Experience!"</p>
      </div>
     
      <div className="custom-box">
        {/* Content for the custom box */}
        <p style={{ fontWeight: 'bold', fontSize:'25px' }}>Create Account</p>
        <div className="rectangle-container">
        <button className="rectangle"> <p style={{color:"gray"}} >Sign up with Google</p></button>
          <button className="rectangle"><p style={{color:"gray"}} >Sign up with Facebook</p></button>
          
        </div>
        <p style={{color:"gray"}} >OR</p>
       
      </div>
      
    </div>
    

    
    
    

  );
}

export default App;
