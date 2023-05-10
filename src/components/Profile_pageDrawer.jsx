import { Global } from '@emotion/react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Typography from '@mui/material/Typography'
import { grey } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'
import * as React from 'react'
import Filter from '../content/Filter'
import shadows from '@mui/material/styles/shadows'

const drawerBleeding = 56

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light'
      ? grey[100]
      : theme.palette.background.default
}))

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
  shadows: theme.shadows[17],
  borderTop: '2px solid silver'
}))

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? 'blue' : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)'
}))

function SwipeableEdgeDrawer (props) {
  const { window } = props
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Root>
      {/* <span onClick={toggleDrawer(true)} >Filter</span> */}
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible'
          }
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor='bottom'
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>
            Filter your choice
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto'
          }}
        >
          <Filter value='FromDown' />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  )
}

SwipeableEdgeDrawer.propTypes = {
  window: PropTypes.func
}

export default SwipeableEdgeDrawer
