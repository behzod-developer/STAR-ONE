import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { changeLanguage } from 'i18next'

function Navbar() {
    return (
        <nav>
            <li className='logo'>
                <img src="" alt="Logo.png" />
                <span>Business</span>
            </li>
            <ul>
                <NavLink>Модели</NavLink>
                <NavLink>Экосистема</NavLink>
                <NavLink>Возможности</NavLink>
                <NavLink>Шаги</NavLink>
                <NavLink>
                    <select name="language" onChange={changeLanguage} id="">
                        <option value="ru">🇷🇺</option>
                        <option value="uz">🇺🇿</option>
                    </select>
                </NavLink>
            </ul>

            <button>Войти</button>

        </nav>
    )
}

export default Navbar