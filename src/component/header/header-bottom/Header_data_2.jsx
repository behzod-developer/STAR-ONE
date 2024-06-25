import React from 'react'
import { header_data } from '../../../database/header_data'

function Header_data_2() {
    return (
        <div className='header-data-2'>
            {header_data.map( item=> (
                <div className="data-array">
                    <h1>{item.number}</h1>
                    <span>{item.text}</span>
                </div>
            ))}
        </div>
    )
}

export default Header_data_2