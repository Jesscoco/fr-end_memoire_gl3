import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import axios from 'axios';
import 'moment/locale/fr'
moment.locale('fr')

export default function AttendanceChart({presences, userinfo}) {
  const [xdata, setData] = useState([])
  const [emploiData, setEmploiData] = useState([])
	const [emploi, setEmploi] = useState([])
  	useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/etudiants/getagenda/${userinfo.code_specialite}`).then((response)=>{
      setEmploi(response.data)
    } ).catch(error=>console.error(error))

    ///////////////////////////
    const emploiFormat= emploi.map((item)=>{
      return{
        date:new Date(moment(item.date).format('YYYY-MM-DD'))
      }
    })
    emploiFormat.sort((item1, item2) =>item1.date -item2.date)
    
    const emploiReformat = emploiFormat.map((item)=>{
      return{
        date: new Date(item.date).toLocaleDateString()
      }
    })
    let newData= {}
    const formatChartData =()=>{
      for (let date = 0; date < emploiReformat.length; date++) {
        const element = emploiReformat[date];
        if (newData[element.date]) {
          newData[element.date]++
        }else{
          newData[element.date] =1
        } 
      }
    }
    formatChartData() 
  const newDataFormat= Object.entries(newData).map(item=>{
    return{
      x:item[0],
      y:item[1]
    }
  })
  setEmploiData(newDataFormat)
    }, [userinfo.code_specialite, emploi ])


  /////////////////////////

  useEffect(() => {
    const presencesFormat= presences.map((item)=>{
      return{
        date:moment(item.date).format('L')
      }
    })
    let newData= {}
    const formatChartData =()=>{
      for (let date = 0; date < presencesFormat.length; date++) {
        const element = presencesFormat[date];
        if (newData[element.date]) {
          newData[element.date]++
        }else{
          newData[element.date] =1
        } 
      }
    }
    formatChartData()  
  //setLabel(Object.keys(newData).map(item=>`${item}`))
      const newDataFormat= Object.entries(newData).map(item=>{
      return{
        x:item[0],
        y:item[1]
      }
    })
    setData(newDataFormat)
  }, [presences])

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: "Courbe d'assiduité",
      },
    },
  };
    
  const data = {
    datasets: [
      {
        fill: false,
        label: 'emploi Du temps',
        data: emploiData,
        borderColor: 'rgb(255, 162, 235)',
        backgroundColor: 'rgba(255, 162, 235, 0.5)',
        tension: 0.4,
      },
      {
        fill: false,
        label: 'Etudiant',
        data:  xdata,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.4,
      },
     
    ],
  };
  

  return <Line options={options} data={data} />;
}
