import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Details from "../components/details";
import moment from 'moment';
import 'moment/locale/fr'
import axios from 'axios';
import Footer from '../components/Footer';
moment.locale('fr')

export default function StudentDetails() {
  const {state}=useLocation()
  const [presences, setPresences] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/etudiants/liste/${state.id}`).then((response)=>{
      setPresences(response.data)
    } ).catch(error=>console.error(error))
    }, [state.id])
  return (
    < >
      <Navbar/>
	  <div className='mt-5'>	  </div>
      <Details userinfo={state} presences={presences}/>
      <section className="ftco-section">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6 text-center mb-5">
						<h2 className="heading-section">Les Présences  </h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="">
							<table className="table table-striped">
							<thead>
								<tr>
								<th>N*</th>
								<th>Date</th>
								<th>Heure</th>
								</tr>
							</thead>
							<tbody>
								{	presences.map((item,index)=>(
									<tr key={index}>
										<th scope="row">{index+1}</th>
										<td> {moment(item.date).format('LL')} </td>
										<td> {moment(item.date).format('LT')}</td>
									</tr>
								))}
							</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
		< Footer />
    </>
    
  )
}
