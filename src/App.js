import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import logo from './logo.svg';
import{ useState,useEffect } from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import './App.css';
// import Button from '@mui/material/Button';
// import { DatePicker } from '@mui/lab';
// import TextField from '@mui/material/TextField';
// // import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from "react-datepicker";
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbarExport,GridToolbarContainer } from '@mui/x-data-grid';
import "react-datepicker/dist/react-datepicker.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Table1 from './components/tables/Table1.jsx';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'axie slp',
    },
  },
};
const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1,2,3,4,3,2,11],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },

  ],
};

function App() {
  const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
  const [startDate, setStartDate] = useState(new Date());
  const [coach, setCoach] = useState([]);
  useEffect(()=>{
//fetch apii al coach

fetch(`http://localhost:5000/api/auth/all-coach`,{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }

}).then(res => res.json())
  .then(data =>{
    console.log(data)
    setCoach(data)
  })
  },[])
const handleChange = (newValue) => {
  setValue(newValue);
};

  return (
    <div className="App">
    {/* <Link to="/all-coach">all-coach</Link>
    <Link to="/register-becado"> Registar becados </Link> */}
    <Navbar/>
    <h1>sistema axie</h1>
    <div className="">
 
{/* <Line options={options} data={data} /> */}
</div>

{/* <Table1/> */}

<div>
  
</div>

{/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}

{/* <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onStateChange={(state) => console.log(state.selection)}
        components={{
          Toolbar: CustomToolbar,
        }}
      />

    </div> */}
    {/* <Table1></Table1> */}
    </div>
  );
}

export default App;
