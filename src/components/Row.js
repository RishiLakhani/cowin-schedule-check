import React from 'react'
import Session from './Session'

const Row = props => {
    const {center, dates} = props
    const sessions = center['sessions']
    return (
        <tr>
            <td className='hosp'>
                <label className='name'>{center['name']}</label>
                <br />
                <label className='address'>{center['address']}, {center['district_name']}, {center['state_name']}, {center['pincode']}</label>
                <br />
                {center['fee_type']==='Paid'?(
                    center['vaccine_fees'].map((fees) => {
                        return <label className='fees'>{fees['vaccine']+': '+fees['fee']}</label>
                    })
                ):(
                    <label></label>
                )}
            </td>
            {dates.map((date) => {
                return <Session sessions={sessions} date={date} />
            })}
        </tr>
    )
}

export default Row
