import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'

import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Typography from '@mui/material/Typography'
import React from 'react'
import '../styles/Filter.css'
const Filter = () => {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <>
      <div
        style={{
          maxWidth: '1200px',
          background: 'white',
          borderTopRightRadius: '10px',
          borderTopLeftRadius: '10px',
          overflow: 'hidden',
          borderRadius: '10px'
        }}
      >
        <div>
          <h6 className='bg-danger p-3 linearGradient text-white'>
            Refined Your Search
          </h6>
        </div>

        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{ background: '#f50057', color: 'white', padding: '0px' }}
          >
            <Typography
              sx={{ paddingLeft: '5px', width: '100%', flexShrink: 0 }}
            >
              Material status
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    All
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Never Married
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Married
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Widowed
                  </Typography>
                }
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{ background: '#f50057', color: 'white', padding: '0px' }}
          >
            <Typography
              sx={{ paddingLeft: '5px', width: '100%', flexShrink: 0 }}
            >
              Material status
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    All
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Never Married
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Married
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Widowed
                  </Typography>
                }
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{ background: '#f50057', color: 'white', padding: '0px' }}
          >
            <Typography
              sx={{ paddingLeft: '5px', width: '100%', flexShrink: 0 }}
            >
              Material status
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    All
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Never Married
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Married
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Widowed
                  </Typography>
                }
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{ background: '#f50057', color: 'white', padding: '0px' }}
          >
            <Typography
              sx={{ paddingLeft: '5px', width: '100%', flexShrink: 0 }}
            >
              Material status
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    All
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Never Married
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Married
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Widowed
                  </Typography>
                }
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{ background: '#f50057', color: 'white', padding: '0px' }}
          >
            <Typography
              sx={{ paddingLeft: '5px', width: '100%', flexShrink: 0 }}
            >
              Material status
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    All
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Never Married
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Married
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Widowed
                  </Typography>
                }
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel6'}
          onChange={handleChange('panel6')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{ background: '#f50057', color: 'white', padding: '0px' }}
          >
            <Typography
              sx={{ paddingLeft: '5px', width: '100%', flexShrink: 0 }}
            >
              Material status
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    All
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Never Married
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Married
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Widowed
                  </Typography>
                }
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel7'}
          onChange={handleChange('panel7')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{ background: '#f50057', color: 'white', padding: '0px' }}
          >
            <Typography
              sx={{ paddingLeft: '5px', width: '100%', flexShrink: 0 }}
            >
              Material status
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    All
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Never Married
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Married
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Widowed
                  </Typography>
                }
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel8'}
          onChange={handleChange('panel8')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{ background: '#f50057', color: 'white', padding: '0px' }}
          >
            <Typography
              sx={{ paddingLeft: '5px', width: '100%', flexShrink: 0 }}
            >
              Material status
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    All
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Never Married
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Married
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ padding: '0' }}
                control={
                  <Checkbox
                    size='small'
                    sx={{
                      paddingY: '5px',
                      '& .MuiSvgIcon-root': { fontSize: 16 },
                      color: '#ad1457',
                      '&.Mui-checked': {
                        color: '#ad1457'
                      }
                    }}
                  />
                }
                label={
                  <Typography variant='body2' color='#ad1457'>
                    Widowed
                  </Typography>
                }
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>

      
       
      </div>

      {/* <div className='filter'>
        <div className='refine-text py-2'>
          <h6 className=''>Refine your search</h6>
        </div>
        <div className='accordion1 ' id='accordionExample'>
          <div className='accordion-item1'>
            <h2 className='accordion-header1' id='headingOne'>
              <button
                className='accordion-button1'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                Marital Status
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse1 show'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body1'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                  />
                  <label className='form-check-label' for='flexCheckDefault'>
                    All
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    Naver Married
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    Married
                  </label>
                </div>{' '}
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    Widowed
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='accordion-item1'>
            <h2 className='accordion-header1' id='headingTwo'>
              <button
                className='accordion-button1 collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
              >
                Income
              </button>
            </h2>
            <div
              id='collapseTwo'
              className='accordion-collapse1 collapse'
              aria-labelledby='headingTwo'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body1'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    All
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='accordion-item1'>
            <h2 className='accordion-header1' id='headingThree'>
              <button
                className='accordion-button1 collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                Working As
              </button>
            </h2>
            <div
              id='collapseThree'
              className='accordion-collapse1 collapse'
              aria-labelledby='headingThree'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body1'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    All
                  </label>
                </div>{' '}
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    Doctor
                  </label>
                </div>{' '}
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    Nurse
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='accordion-item1'>
            <h2 className='accordion-header1' id='headingFour'>
              <button
                className='accordion-button1 collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFour'
                aria-expanded='false'
                aria-controls='collapseFour'
              >
                Education
              </button>
            </h2>
            <div
              id='collapseFour'
              className='accordion-collapse1 collapse'
              aria-labelledby='headingFour'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body1'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    All
                  </label>
                </div>{' '}
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    BBA
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='accordion-item1'>
            <h2 className='accordion-header1' id='headingFive'>
              <button
                className='accordion-button1 collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFive'
                aria-expanded='false'
                aria-controls='collapseFive'
              >
                Diet
              </button>
            </h2>
            <div
              id='collapseFive'
              className='accordion-collapse1 collapse'
              aria-labelledby='headingFive'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body1'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    All
                  </label>
                </div>{' '}
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    Non-veg
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='accordion-item1'>
            <h2 className='accordion-header1' id='headingSix'>
              <button
                className='accordion-button1 collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseSix'
                aria-expanded='false'
                aria-controls='collapseSix'
              >
                Country
              </button>
            </h2>
            <div
              id='collapseSix'
              className='accordion-collapse1 collapse'
              aria-labelledby='headingSix'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body1'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    All
                  </label>
                </div>{' '}
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    Nepal
                  </label>
                </div>{' '}
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    India
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='accordion-item1'>
            <h2 className='accordion-header1' id='headingSeven'>
              <button
                className='accordion-button1 collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseSeven'
                aria-expanded='false'
                aria-controls='collapseSeven'
              >
                State
              </button>
            </h2>
            <div
              id='collapseSeven'
              className='accordion-collapse1 collapse'
              aria-labelledby='headingSeven'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body1'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    All
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='accordion-item1'>
            <h2 className='accordion-header1' id='headingEight'>
              <button
                className='accordion-button1 collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseEight'
                aria-expanded='false'
                aria-controls='collapseEight'
              >
                City
              </button>
            </h2>
            <div
              id='collapseEight'
              className='accordion-collapse1 collapse'
              aria-labelledby='headingEight'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body1'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    All
                  </label>
                </div>{' '}
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    Kathmandu
                  </label>
                </div>{' '}
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    Pokhara
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='accordion-item1'>
            <h2 className='accordion-header1' id='headingNine'>
              <button
                className='accordion-button1 collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseNine'
                aria-expanded='false'
                aria-controls='collapseNine'
              >
                Age
              </button>
            </h2>
            <div
              id='collapseNine'
              className='accordion-collapse1 collapse'
              aria-labelledby='headingNine'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body1'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    All
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='accordion-item1'>
            <h2 className='accordion-header1' id='headingTen'>
              <button
                className='accordion-button1 collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTen'
                aria-expanded='false'
                aria-controls='collapseTen'
              >
                Religion
              </button>
            </h2>
            <div
              id='collapseTen'
              className='accordion-collapse1 collapse'
              aria-labelledby='headingTen'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body1'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    All
                  </label>
                </div>{' '}
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    Hindu
                  </label>
                </div>{' '}
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    Sikh
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='accordion-item1'>
            <h2 className='accordion-header1' id='headingEleven'>
              <button
                className='accordion-button1 collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseEleven'
                aria-expanded='false'
                aria-controls='collapseEleven'
              >
                Caste
              </button>
            </h2>
            <div
              id='collapseEleven'
              className='accordion-collapse1 collapse'
              aria-labelledby='headingEleven'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body1'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    All
                  </label>
                </div>{' '}
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    Bahun
                  </label>
                </div>{' '}
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    Rai
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='accordion-item1'>
            <h2 className='accordion-header1' id='headingTwelve'>
              <button
                className='accordion-button1 collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwelve'
                aria-expanded='false'
                aria-controls='collapseTwelve'
              >
                Mother Tongue
              </button>
            </h2>
            <div
              id='collapseTwelve'
              className='accordion-collapse1 collapse'
              aria-labelledby='headingTwelve'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body1'>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    All
                  </label>
                </div>{' '}
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    Nepali
                  </label>
                </div>{' '}
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label' for='flexCheckChecked'>
                    English
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Filter
