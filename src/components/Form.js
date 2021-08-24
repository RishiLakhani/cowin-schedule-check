import React from 'react'

const Form = props => {
    const action = props.action
    const pinValidate = () => {
        const a = document.getElementById('pin_input').value
        const reg = /^[1-9]\d{5}$/
        if(reg.test(a)) {
            document.getElementById('invalid').style.visibility='hidden'
            document.getElementById('pin_input').style.borderBottomColor='black'
        }
        else {
            document.getElementById('pin_input').style.borderBottomColor='red'
            document.getElementById('invalid').style.visibility='visible'
        }
    }

    return (
        <div className='Form'>
            <label>Enter the PIN: </label>
            <br />
            <input id='pin_input' placeholder='PIN'  onChange={pinValidate} type='number' maxLength='6'></input>
            <button className='search' onClick={() => action(document.getElementById('pin_input').value)}>Search</button>
            <br />
            <label id='invalid'>Invalid pin</label>
        </div>
    )
}

export default Form
