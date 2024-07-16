import React, { useState } from 'react';
import './Swiper.css';
import { swiper_data } from '../../database/swiper_data';

function SwiperCard() {
    const [visibleCardIndex, setVisibleCardIndex] = useState(2);

    const handleClick = (item) => {
        setVisibleCardIndex(item);

    };

    return (
        <div className="swiper-container">
            {swiper_data.map((item, ind) => (
                <div style={{ flex: visibleCardIndex == ind ? "2" : "1" }} key={ind} onClick={() => handleClick(ind)} className={`swiper-card ${item.id}`}>
                    <div className={`swiper-text-container ${visibleCardIndex === ind ? 'visible' : ''} `} style={{ 'width': '500px!important;' }}>
                        <div className="swiper-icons">
                            <img src={item.icons} alt="Loading..." />
                        </div>
                        <div className={`swiper-text`}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default SwiperCard;
