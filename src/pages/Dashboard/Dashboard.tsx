import Header from '@/components/Header'
import { Box, Button } from '@mui/material'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import { type ColorMode, ColorModeContext, tokens } from '@/theme'
import { useContext } from 'react'

function Dashboard() {
    const { themeMode } = useContext<ColorMode>(ColorModeContext)
    const colors = tokens(themeMode)
    return (
        <Box className="p-4" component={'section'}>
            <Box className="flex items-end justify-between" component={'section'}>
                <Header
                    title="Dashboard"
                    description="Welcome to your dashboard!"
                />
                <Button
                    startIcon={<FileDownloadOutlinedIcon />}
                    sx={{
                        color: colors.primary[100],
                        backgroundColor: colors.blueAccent[700],
                        paddingX: '2rem',
                        paddingY: '0.8rem',
                        borderRadius: '0.4rem',
                        fontWeight: 'bold',
                    }}
                >
                    Download Report
                </Button>
            </Box>
        </Box>
    )
}

export default Dashboard
