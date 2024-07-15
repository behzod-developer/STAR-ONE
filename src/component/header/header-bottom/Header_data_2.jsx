import React, { useEffect, useState } from 'react'
import { header_static_data } from '../../../database/header_data'

import axios from 'axios'

function Header_data_2() {

    const [headerStaticDatas, setHeaderStaticDatas] = useState([])

    useEffect(()=> {
        async function fetchStaticData(){
            try{
                const res_data = await axios.get(`${header_static_data}`)
                setHeaderStaticDatas([res_data?.data])
            }
            catch(err){
                console.log(err)
            }
        } fetchStaticData()
    },[])

    console.log(headerStaticDatas)

    return (
        <div className='header_static_map'>
            {headerStaticDatas.map(item => (
                <div className="header-data-2">
                    <div className="data-array">
                        <h1>{item.active_sellers}</h1>
                        <span>active_sellers</span>
                    </div>
                    <div className="data-array">
                        <h1>{item.daily_sales}</h1>
                        <span>active_sellers</span>
                    </div>
                    <div className="data-array">
                        <h1>{item.users}</h1>
                        <span>active_sellers</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Header_data_2