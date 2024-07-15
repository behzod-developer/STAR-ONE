import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { changeLanguage } from 'i18next'
import { useTranslation } from 'react-i18next';

function Navbar() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng.target.value);
    };
    return (
        <nav>
            <li className='logo'>
                <img src="" alt="Logo.png" />
                <span>Business</span>
            </li>
            <ul>
                <NavLink>{t('landing_models')}</NavLink>
                <NavLink>{t('landing_ecosystem')}</NavLink>
                <NavLink>{t('landing_option')}</NavLink>
                <NavLink>{t('landing_move')}</NavLink>
                <NavLink>
                    <select name="language" onChange={changeLanguage} id="">
                        <option value="ru">🇷🇺</option>
                        <option value="uz">🇺🇿</option>
                    </select>
                </NavLink>
            </ul>

            <button>{t('landing_sigh')}</button>

        </nav>
    )
}

export default Navbar