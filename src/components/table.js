import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print';

function Table({etudiants, filterData, setFilterData, handleSubmit}) {
	const handleChange=(data)=>{
		setFilterData((previousData)=>{
			return{...previousData, ...data}
			})
	}
	const navigate =useNavigate()
	const onHandleDetails=(e, item)=>{
		e.preventDefault()
		navigate("details",{state:item})
	}
	const tableRef=useRef()
	const handlePrint = useReactToPrint({
		content: () => tableRef.current,
	  });
  return (
	<>
		<div className="d-flex">
			<div className="p-4  shadow-sm ml-5 bd-rounded">
			<select className="form-select shadow-none" value={filterData.anneeScolaire} onChange={event=>handleChange({anneeScolaire: event.target.value})} aria-label="Default select example">
				<option selected value="" >Année académique</option>
				<option value="2021-2022">2021-2022</option>
				<option value="2020-2021">2020-2021</option>
			</select>
			</div>
		
			<div className="p-4 shadow-sm mx-5 bd-rounded">
			<select className="form-select shadow-none" value={filterData.classe} onChange={event=>handleChange({classe: event.target.value})} aria-label="Default select example">
				<option value="" selected>Année de Licence</option>
				<option value="s1s2">1ère année</option>
				<option value="s3s4">2ème année</option>
				<option value="s5s6">3ème année</option>
			</select>
			</div>
		
			<div className="p-4 shadow-sm bd-rounded">
			<select className="form-select shadow-none" value={filterData.filiere} onChange={event=>handleChange({filiere: event.target.value})} aria-label="Default select example">
				<option value="" selected >Filière</option>
				<option value="Génie Logiciel">Génie Logiciel</option>
				<option value="Internet et Multimédia">Internet et Multimédia</option>
				<option value="Sécurite Informatique">Sécurité Informatique</option>
			</select>
			</div>
			<div className="p-4 shadow-sm ml-5 bd-rounded">
			<input type={'date'} className="form-control shadow-none" value={filterData.date} onChange={event=>handleChange({date: event.target.value})} aria-label="Default select example"/>
			</div>
			<div className='p-4'>
				<button type="button" className="btn btn-secondary shadow-none"onClick={()=> handleSubmit()}>Rechercher</button>
			</div>

		</div>
		<section className="ftco-section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
							<div class="d-flex justify-content-end ">
								<button onClick={handlePrint} class="btn btn-info  shadow-none">Exporter</button>
							</div>
						<div ref={tableRef} className="">
							
							<div className="text-center text-uppercase mb-5">
								<h4 className="heading-section">Liste de présence {filterData.filiere} {filterData.date && `du ${filterData.date}`}</h4>
							</div>
							
							<table className="table table-striped">
							<thead>
								<tr>
								<th>N*</th>
								<th>Matricule</th>
								<th>Nom</th>
								<th>Prénoms</th>
								<th>Spécialité</th>
								</tr>
							</thead>
							<tbody>
								{	etudiants.map((item,index)=>(
									<tr key={index}>
										<th scope="row">{index+1}</th>
										<td><Link to="details" onClick={(e)=>onHandleDetails(e,item)}> {item.matricule} </Link></td>
										<td>{item.nom}</td>
										<td>{item.prenoms}</td>
										<td>{item.specialite}</td>
									</tr>
								))}
							</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
	
    
  )
}

export default Table