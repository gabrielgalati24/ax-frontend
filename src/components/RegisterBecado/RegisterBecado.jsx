import  {useState} from 'react';
import {
    Link
    } from "react-router-dom";
    import Navbar from '../navbar/Navbar.jsx';
import  LoginService  from '../../services/registerService';
export const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');

   let data = await LoginService(name, password);

    if (data.ok) {
        setLoading(false);
        localStorage.setItem('token', data.token);
        // localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('username', data.user.name);

        window.location.href = '/';
    }else{
        setLoading(false);
        setError(data.message);
    }
}

    return(
        
<div>
<Navbar/>
<div className='d-flex justify-content-center'>   
            <form className='bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 grid place-content-center h-screen' onSubmit={ e => handleSubmit(e) }>
            <h1 className='p-4 text-4xl text-center'>Registar Becado</h1>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                    Username:
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="username" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <br />
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                    Contraseña:
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" value={password} onChange={e => setPassword(e.target.value) } />
                </label>
                <br />
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                    Ronin id:
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" value={password} onChange={e => setPassword(e.target.value) } />
                </label>
                <br />
       {
           loading ?
              <button className="px-6 py-2 text-sm transition-colors duration-300 rounded shadow-xl text-cyan-100 bg-cyan-500 hover:bg-cyan-600 shadow-cyan-400/30" type="submit" disabled>Registrando...</button>
                :   
                <button className="px-6 py-2 text-sm transition-colors duration-300 rounded  shadow-xl text-cyan-100 bg-cyan-500 hover:bg-cyan-600 shadow-cyan-400/30"  type="submit">Registrar</button>
       }
            {error && <p>{error}</p>}


            </form>

        </div>
</div>
    )
}