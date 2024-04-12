import { Box, IconButton, type Theme, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens, type ColorMode } from '../../theme'
import { AppTheme } from '../../types'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'
import App from '@/App'

function Topbar(props) {
    const theme: Theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const {themeMode, toggleColorMode} = useContext<ColorMode>(ColorModeContext)
console.log(themeMode)
    return (
        <Box className={'p-4 flex justify-between'}>
            <Box >
                <InputBase />
            </Box>
            <Box>
                <IconButton
                    onClick={toggleColorMode}
                >
                    {
                        themeMode === AppTheme.LIGHT ? (
                            <LightModeOutlinedIcon />
                        ) : (
                            <DarkModeOutlinedIcon />
                        )
                    }
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar
