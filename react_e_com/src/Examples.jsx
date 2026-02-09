import {useState}from 'react'

function Examples() {

    const [count,setcount] = useState(0);
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")

    const handleSubmit = () =>{
        console.log('Login',{email,password})

    }


  return (
    <div>

        <input type="email" placeholder='Email' value={email} onChange={(e)=> setemail(e.target.value)} />
        <input type ='password' placeholder='password' value={password} onChange={(e) => setpassword(e.target.value)} />
<p>Examples: {count}</p>
<button onClick={()=> setcount(count +1)}>Increment</button>
<button onClick={()=> setcount(count -1)}>Decrement</button>
<button onClick={handleSubmit}>Login</button>
    </div>
    
  )
}


export default Examples