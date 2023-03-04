import React, { useState, useEffect } from 'react';

const Users = [
  {
    id: 1,
    name: "rodrigo",
  },
  {
    id: 2,
    name: "luis",
  },
  {
    id: 3,
    name: "rumpler",
  },
  {
    id: 4,
    name: "braun",
  },
];






const User = () => {  

  const [dataBaseUsers, setDataBaseUsers] = useState(Users);
  const [found, setFound] = useState(null);

  const Search = () => {
    let dataUserFound= dataBaseUsers.find(user => user.id === 1 ? user : null );
    setFound(dataUserFound);   
  }


  return (
    <>
      <h2>User</h2>
      <input type="search" placeholder="Search..." />
      <button  onClick={Search}>Usuario</button>
      <ul>
        {dataBaseUsers.map(data => <li key={data.id} >{data.name} </li>)}
      </ul>
    </>
  );
};

export default User;
