import React from 'react'
import './Section_2.css'

function Section_2() {
  return (
    <div className='section_2-container'>
      <div className='section_2-parent section_2-between'>
        <div className='section_2-parent section_2-gap'>
          <div className='section_2-line'></div>
          <div className='section_2-header-text'>
            <h2>Посмотрите и узнайте лучшие услуги, которые мы предоставляем</h2>
          </div>
        </div>
        <div className='section_2-header-text-2'>
          <p>Используйте уникальные инструменты для продвижения и повышения видимости ваших товаров. Увеличьте продажи и привлекайте больше клиентов, создавая успешный бизнес вместе с нами!</p>
        </div>
      </div>

      <div>
        <div className='section_2-left-box'>
          <h4>Управление</h4>
          <p>Простота и эффективность в одном месте! Управляйте вашими товарами легко - добавляйте, обновляйте и контролируйте их статус, предлагая клиентам непревзойденный опыт покупок.</p>
          <div className="section_2-cards">
            <div className="section_2-card-1"></div>
            <div className="section_2-card-2"></div>
            <div className="section_2-card-3"></div>
          </div>
        </div>
        <div>
          <div>
            <div className='section_2-back-box'></div>
            <div className='section_2-back-box'></div>
          </div>
          <div>
            <div className='section_2-back-box'></div>
            <div className='section_2-back-box'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section_2