import {useState,useEffect}from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Navbar from '../navbar/Navbar.jsx';
export function AllBecados() {
    const [coachs, setCoach] = useState([]);
    useEffect(()=>{
  //fetch apii al coach
  
  fetch(`http://localhost:5000/api/auth/all-becados`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  
  }).then(res => res.json())
    .then(data =>{
      console.log(data)
   
      setCoach(data.becados)
    })
    },[])

    // if(coachs?.length){
    //     return(
    //         <div>
    //             <h1>no hay becados</h1>
     
    //         </div>
    //     )
    // }
  return (
    <div>
        <Navbar/>
    todos los becados
    
<div>
{
    coachs?.map(coach =>{
            return(
                <div key={coach._id}>
                    <Link
                    to={`/becado/${coach._id}`}
                    >

                    <h1>{coach.name}</h1>
                    </Link>
                </div>
            )
        })
    }
</div>
    
    </div>
  )
}
