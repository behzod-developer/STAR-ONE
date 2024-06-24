import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav>

            <img src="" alt="Logo.png" />

            <ul>
                <NavLink>Модели</NavLink>
                <NavLink>Экосистема</NavLink>
                <NavLink>Возможности</NavLink>
                <NavLink>Шаги</NavLink>
                <NavLink>
                        <select name="" id="">
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                        </select>
                </NavLink>
            </ul>

            <button>Войти</button>

        </nav>
    )
}

export default Navbar