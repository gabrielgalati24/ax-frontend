import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Navbar from '../navbar/Navbar.jsx';
export function Coach() {
  const [coach, setCoach] = useState();
  const [becados, setBecados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditable, setIsEditable] = useState(true);
  let { id } = useParams();
  useEffect(() => {
    //fetch apii al coach
    let newBecados = []
    fetch(`http://localhost:5000/api/auth/coach/id`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        id: id

      })

    }).then(res => res.json())
      .then(data => {
        console.log(data)
        setCoach(data.coach)
      })



    fetch(`http://localhost:5000/api/auth/all-becados`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }

    }).then(res => res.json())
      .then(data => {
        console.log(data)
        newBecados = data
      })

    let b = newBecados.map(becado => {

      if (coach.becados.includes(becado._id)) {
        return becado
      }
    })
    console.log(b)
    setBecados(b)
  }, [])






  return (
    <div className='bg-blend-color-dodge'>
      <Navbar />
      Coach
      <p>nombre:{coach?.name} {id}</p>

      <p>becados asignados</p>
      <button onClick={() => setIsEditable(!isEditable)}>edit enable</button>
      <form >
        <div className="form-group">
          <div className="row">

            <div className="col">
              <label>Nombre</label>
              <input type="email" class="form-control" placeholder="name@example.com" disabled={isEditable} value={coach?.name} ></input>
            </div>
            <div className="col">
              <label>Apellido</label>
              <input type="email" class="form-control" placeholder="" disabled={isEditable}></input>
            </div>

            <div className="row">
              <div className="col">
                <label htmlFor="">Ronin id</label>
                <input type="text" />
              </div>
            </div>

          </div>
        </div>


      </form>






      <ul>
        becados del coach
        {
          becados.map(becado => {
            return <li>{becado.name}</li>
          })
        }
      </ul>
    </div>
  )
}
