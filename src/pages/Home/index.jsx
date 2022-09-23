import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth';


const Home = () => {
  const { logout, authenticated } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }


  return (


    <div>
      <h1>Home</h1>
      <h1><strong>Autenticado: </strong>{String(authenticated)}</h1>
      <button onClick={handleLogout}>
        <h1>Logout</h1>
      </button>
    </div>
  );
};

export default Home;