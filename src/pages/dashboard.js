import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Table from '../components/table';
import axios from 'axios';
import Footer from '../components/Footer';

export default function Dashboard() {
  const [etudiant, setEtudiant] = useState([])
  const [filterData, setFilterData] = useState({anneeScolaire:'', classe:'',filiere:'',date:''})
  useEffect(() => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/etudiants/`).then((response)=>{
    setEtudiant(response.data)
  } ).catch(error=>console.error(error))
  }, [])
  const handleSubmit=()=>{
    console.log(filterData)
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/etudiants/getstudent/`,filterData).then((response)=>{
      console.log(response.data.data)
      setEtudiant(response.data.data)
    } ).catch(error=>console.error(error)) 
	}
  return (
    <div className="mt-5 pt-5">
      <Navbar/>
      <Table etudiants={etudiant} filterData={filterData} setFilterData= {setFilterData} handleSubmit={handleSubmit}/>
      <Footer/>
    </div> 
  )
}
