import { Typography, Box } from '@mui/material'
import { type ColorMode, ColorModeContext, tokens } from '../theme'
import { useContext } from 'react'

interface HeaderProps {
    title: string
    description: string
}

function Header({ title, description }: HeaderProps) {
    const { themeMode } = useContext<ColorMode>(ColorModeContext)
    const colors = tokens(themeMode)

    return (
        <Box fontSize="larger" component={'header'}>
            <Typography
                variant="h2"
                sx={{ color: colors.grey[100] }}
                fontWeight="bold"
                marginBottom="5px"
            >
                {title}
            </Typography>
            <Typography
                variant="body1"
                sx={{ color: colors.greenAccent[400] }}
                fontSize={'large'}
            >
                {description}
            </Typography>
        </Box>
    )
}

export default Header
