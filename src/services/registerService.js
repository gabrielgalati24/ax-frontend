import API from '../services/api';
async function RegisterService(name, password){

    return fetch(`${API}/api/auth`, {
        method: 'POST',
        headers: {  
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name ,
            password
        })

    }).then(response => {
        console.log(response.body);
        return response.json()
    }).then(data => {
            console.log(data);

            return data;
        })
}
export default RegisterService;