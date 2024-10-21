import { Button } from '@mui/material'
import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import userpool from '../userpool'
import { logout } from '../services/authenticate';

const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    let user=userpool.getCurrentUser();
    console.log(user);
    if(!user){
      navigate('/login');
    }
  },[]);

  const handleLogoout=()=>{
    logout();
  };

  return (
    <div className='Dashboard'>
      <h1>Dashboard</h1>
      <Button
        style={{margin:"10px"}}
        variant='contained'
        onClick={handleLogoout}
      >
        Logout
      </Button>
    </div>
  )
}

export default Dashboard