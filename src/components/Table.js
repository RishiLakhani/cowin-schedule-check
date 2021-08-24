import React from 'react'
import Row from './Row'

const Table = props => {
    const {dates, centers} = props
    return (
        <table id='Table'>
            <thead>
                <tr>
                    <th className='hosp'>Hospital Name and Address</th>
                    {dates.map((value) => {
                        return <th className='date_slot'>{value.substring(0,5)}</th>
                    })}
                </tr>
            </thead>
            {centers.length!==0?(
                <tbody>
                    {centers.map((center) => {
                        return <Row center={center} dates={dates} />
                    })}
                </tbody>
            ) : (
                <h1>No Centers present</h1>
            )}
        </table>
    )
}

export default Table
