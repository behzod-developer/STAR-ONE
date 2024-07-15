import React, { useEffect, useState } from 'react'
import { header_static_data } from '../../../database/header_data'

import axios from 'axios'
import NumberAnimation from '../../../container/NumberAnimation/NumberAnimation'

function Header_data_2() {

    const [headerStaticDatas, setHeaderStaticDatas] = useState([])

    useEffect(() => {
        async function fetchStaticData() {
            try {
                const res_data = await axios.get(`${header_static_data}`)
                setHeaderStaticDatas([res_data?.data])
            }
            catch (err) {
                console.log(err)
            }
        } fetchStaticData()
    }, [])

    console.log(headerStaticDatas)

    return (
        <div className='header_static_map'>
            {headerStaticDatas.map(item => (
                <div className="header-data-2">
                    <div className="data-array">
                        <div className="static-parent">
                            <h1 className='static-data-h1'>+</h1>
                            <NumberAnimation start={0} end={item.active_sellers} duration={2000} />
                        </div>
                        <span>активных продавцов</span>
                    </div>
                    <div className="data-array">
                        <div className="static-parent">
                            <h1 className='static-data-h1'>+</h1>
                            <NumberAnimation start={0} end={item.daily_sales} duration={2000} />
                        </div>
                        <span>Продаж товаров в день</span>
                    </div>
                    <div className="data-array">
                        <div className="static-parent">
                            <NumberAnimation start={0} end={item.users} duration={2000} />
                            <h1 className='static-data-h1'>%</h1>
                        </div>
                        <span>Рост пользователей</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Header_data_2