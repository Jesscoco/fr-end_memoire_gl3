import React from 'react'
import moment from 'moment'
import 'moment/locale/fr'
import AttendanceChart from './attendanceChart'
moment.locale('fr')

export default function Details({userinfo}){
    return(
        <>
            <section >
                <div className="container py-5">
                    
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="card mb-4">
                            <div className="card-body">
                                <div className="card-body text-center">
                                <i style={{fontSize:"75px"}}className="bi bi-person "></i>
                                <h5 className="my-3">{`${userinfo.nom} ${userinfo.prenoms}`}</h5>
                                <p className="text-muted mb-1">{`${userinfo.matricule}`}</p>
                                <p className="text-muted mb-4">{`${userinfo.annee_academique}`}</p>
                            </div>
                            <hr/>
                                <div className="row">

                                    <div className="col-sm-3">
                                        <p className="mb-0 text-start">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted text-end mb-0">{`${userinfo.email}`} </p>
                                    </div>
                                </div>
                                <hr/>

                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0 text-start">Telephone</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted text-end mb-0">{`${userinfo.telephone}`}</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">Date et lieu de naissance</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted text-end mb-0">{`${moment(userinfo.date_naissance).format('LL') } à ${userinfo.lieu_naissance}`} </p>
                                    </div>
                                </div>
                                <hr/>

                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 text-start">Spécialité</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted text-end mb-0"> {`${userinfo.specialite}`}</p>
                                        </div>
                                    </div>
                                <hr/>
                                <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0 text-start">Code Spécialité</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted text-end mb-0">{`${userinfo.code_specialite}`}</p>
                                </div>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                        <AttendanceChart/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}