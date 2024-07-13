import React from 'react';
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng.target.value);
  };

  return (
    <div className='demo'>
      <h1>{t('welcome')}</h1>
      <p>{t('hello_world')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('uz')}>Uzbek</button>

      <select onChange={changeLanguage} name="">
        <option value="ru">ru</option>
        <option value="uz">uz</option>
      </select>
    </div>
  );
};

export default MyComponent;