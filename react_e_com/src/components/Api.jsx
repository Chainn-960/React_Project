import {useState, useEffect} from 'react'

function Api() {

  const [ users, setusers ] = useState([]);
  const[loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(()=>{
    fetch('/api/users?_limit=5')
    .then((res=>{
      if(!res.ok) throw new Error('Fetchb failed');
      return res.json();
    }))
    .then(data =>{
      setusers(data);
      setloading(false);
    })
    .then(err =>{
      seterror(err.message);
      setloading(false);
    })
  })
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1> error :{error}</h1>
  return (
    <ul>{
      users.map(user =>(<li key ={user.id}> {user.name}-{user.email}</li>))}

    </ul>
    
  )
}

export default Api