import React from 'react'

const Session = props => {
    const {sessions, date} = props
    
    const display = () => {
        let jsx=[]
        let k=0
        for(let i=0; i<sessions.length; i++) {
            if(date===sessions[i]['date']) {
                let session=sessions[i]
                jsx.push(
                    <div>
                        <div className='name'>{session['vaccine']}</div>
                        {/* <label className='available2'>D1{session['available_capacity_dose1']}</label> */}
                        <label className='available'>{session['available_capacity']}</label>
                        {/* <label className='available2'>D2{session['available_capacity_dose2']}</label> */}
                        <br />
                        <div className='age'>{session['max_age_limit']?session['min_age_limit']+'-'+session['max_age_limit']+' Only':session['min_age_limit']+' & Above'}</div>
                        <br />
                    </div>
                )
            }
            else {
                k++
            }
        }
        if(k===sessions.length) {
            jsx=<label className='available'>NA</label>
        }
        return jsx
    }

    return (
        <td className='date_slot'>
            <br />
            {display()}
        </td>
    )
}   

export default Session
