import {useState,useEffect}from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Navbar from '../navbar/Navbar.jsx';
import Table1 from "../tables/Table1.jsx"
export function AllCoach() {
    const [coachs, setCoach] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
  //fetch apii al coach
  setIsLoading(true);
  fetch(`http://localhost:5000/api/auth/all-coach`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  
  }).then(res => res.json())
    .then(data =>{
      console.log(data)
      setCoach(data.coachs)
    })
    .catch(err => console.log(err))
    setIsLoading(false);
    },[])

    if(isLoading){
      return <div >
      <Navbar/> 
      <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
      </div>
    }

    // if(!coachs.length){
    //     return(
    //         <div>
    //            <Navbar/>
    //             <h1>no hay Coach</h1>
     
    //         </div>
    //     )
    // }
  return (
    <div>
        <Navbar/>
    todos los coach
    
<div>
  {
    coachs.length === 0 && <h1>no hay coach</h1>
  }
{
    coachs?.map(coach =>{
            return(
                <div key={coach._id}>
                    <Link
                    to={`/coach/${coach._id}`}
                    >
            

                    <h1>{coach.name}</h1>
                    </Link>
                </div>
            )
        })
    }
 
</div>
       <Table1></Table1>
    </div>
  )
}
