import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function AccordionUsage() {
  const { t } = useTranslation()


  const theme = createTheme({
    palette: {
      primary: {
        main: "#00000000",
        textColor: 'white'
      },
    },
  });


  return (
    <div className='quetion-and-answer-container'>
      <ThemeProvider theme={theme}>
        <Accordion
          sx={{ backgroundColor: 'transparent', color: 'white', borderBottom:'1px solid grey', padding:'10px 0' }}>
          <AccordionSummary
            sx={{ fontSize: '23px', fontWeight: '500' }}
            expandIcon={<ExpandMoreIcon sx={{ backgroundColor: 'transparent', color: 'white' }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            color='primary'
          >
            {t('landing_question_1')}
          </AccordionSummary>
          <AccordionDetails>
            {t('landing_answer_1')}
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: 'transparent', color: 'white', borderBottom:'1px solid grey', padding:'10px 0' }}>
          <AccordionSummary
            sx={{ fontSize: '23px', fontWeight: '500' }}
            expandIcon={<ExpandMoreIcon sx={{ backgroundColor: 'transparent', color: 'white' }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            {t('landing_question_2')}
          </AccordionSummary>
          <AccordionDetails>
            {t('landing_answer_2')}
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: 'transparent', color: 'white', borderBottom:'1px solid grey', padding:'10px 0' }}>
          <AccordionSummary
            sx={{ fontSize: '23px', fontWeight: '500' }}
            expandIcon={<ExpandMoreIcon sx={{ backgroundColor: 'transparent', color: 'white' }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            {t('landing_question_3')}
          </AccordionSummary>
          <AccordionDetails>
            {t('landing_answer_3')}
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: 'transparent', color: 'white', borderBottom:'1px solid grey', padding:'10px 0' }}>
          <AccordionSummary
            sx={{ fontSize: '23px', fontWeight: '500' }}
            expandIcon={<ExpandMoreIcon sx={{ backgroundColor: 'transparent', color: 'white' }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            {t('landing_question_4')}
          </AccordionSummary>
          <AccordionDetails>
            {t('landing_answer_4')}
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  );
}