import React from 'react'
import './OneID.css'
import { useTranslation } from 'react-i18next'

function OneID_border() {
    const {t} = useTranslation()
    return (
        <div className='one-id-border'>

            <div className='one-id-parent one-parent'>

                <div className='one-id-first'>
                    <div className="one-line-radio one_1"> {t('landing_1id_system_1')}</div>
                    <div className="one-parent">
                        <div className='one-height-ml one-width-xxl one-right one-bottom'>
                            <div className='one_2 one-line-radio'>{t('landing_1id_system_2')}</div>
                        </div>
                        <div className='one-width-ml'>
                            <div className='one-height'></div>
                            <div className='one-top one-height'></div>
                        </div>
                    </div>
                </div>

                <div className='one-id-second'>
                    <div className='one-radio one-back one-shadow'>
                        1ID
                    </div>
                </div>



                <div className='one-id-third one-column one-parent'>

                    <div className='one-width-max one-height-xxxl  one-parent'>
                        <div className='one-width-xxxl  one-height-xxl'></div>
                        <div className='one-height-xxxl one-left one-top one-width-xxl '>
                            <div className="one_3 one-line-radio">
                                {t('landing_1id_system_4')}
                            </div>
                        </div>
                    </div>

                    <div className=' one-height-xxxl one-width-max one-parent'>
                        <div className='one-height-xxxl one-top one-right one-width-ml'></div>
                        <div className='one-height-xxxl one-bottom one-width-xxxl'>
                            <div className="one_4 one-line-radio">
                           {t('landing_1id_sustem_3')}
                            </div>
                        </div>
                    </div>

                </div>



            </div>

            <div className='one-id-parent-2 one-margin-top'>
                <div className='one-height-ml one-parent '>
                    <div className='one-height-xxxl one-width-xxxl'>
                        <div className='one-height-mid one-bottom one-width-xxxl'></div>
                        <div className='one-height-mid one-width-xxxl'>
                            <div className='one-line-radio one_5'>
                            {t('landing_1id_system_5')}
                            </div>
                        </div>
                    </div>
                    <div className='one-width-xxxl one-left one-bottom one-height-ml'>
                        <div className='one-line-radio one_6'>{t('landing_1id_system_6')}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OneID_border