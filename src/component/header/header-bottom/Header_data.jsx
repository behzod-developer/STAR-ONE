import React from 'react'
import img_1 from '../../../assets/2 1.png'
import img_2 from '../../../assets/3 1.png'
import img_3 from '../../../assets/4 1.png'
import img_4 from '../../../assets/5 1.png'
import img_5 from '../../../assets/6 1.png'
import img_6 from '../../../assets/7 1.png'
import Header_data_2 from './Header_data_2'

function Header_data() {
  return (
    <div className="header-data">
        <h5>Продавцы, которые сотрудничают и продают с нами свою продукцию</h5>
        <div className="header-logo-image">
            <img src={img_1} alt="loading..." />
            <img src={img_2} alt="loading..." />
            <img src={img_3} alt="loading..." />
            <img src={img_4} alt="loading..." />
            <img src={img_5} alt="loading..." />
            <img src={img_6} alt="loading..." />
        </div>
        <Header_data_2 />
    </div>
  )
}

export default Header_data