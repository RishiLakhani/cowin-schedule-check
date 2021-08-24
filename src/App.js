import React, {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import Form from './components/Form'
import Table from './components/Table'

const App = () => {
    const [dates, setDates] = useState([])
    const [centers, setCenters] = useState([])

    useEffect(() => {
        getDates()
    }, [])

    const pinSet = p => {
        getCenters(p)
    }

    const getDates = () => {
        setDates([])
        const d = new Date()
        var day=d.getDate()
        var month=d.getMonth()+1
        var year=d.getFullYear()
        for(let i=0; i<7; i++) {
            if ([1,3,5,7,8,10,12].includes(month)&&day>31){
                day = day - 31
                month = month + 1
            }
            else if ([4,6,9,11].includes(month)&&day>30) {
                day = day - 30
                month = month + 1
            }
            else if (month===2) {
                if (year%400===0||(year%100!==0&&year%4===0)) {
                    if(day>29){
                        day = day - 29
                        month = month + 1
                    }
                }
                else {
                    if(day>28){
                        day = day - 28
                        month = month + 1
                    }
                }
            }
            if (month>12) {
                month = month - 12
                year = year + 1
            }
            let date = (Math.floor(day/10)===0?('0'+day.toString()):(day.toString()))+'-'+(Math.floor(month/10)===0?('0'+month.toString()):(month.toString()))+'-'+year.toString()
            setDates(dates => [...dates, date])
            day=day+1
        }
    }

    const getCenters =(p) => {
        axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${p}&date=${dates[0]}`)
            .then(res => {
                setCenters([res.data])
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='Wrapper'>
            <Header />
            <Form action={pinSet}/>
            {centers.length===0?<label>No Slots Avaiable</label>:<Table dates={dates} centers={centers[0]['centers']}/>}
        </div>
    )
}

export default App