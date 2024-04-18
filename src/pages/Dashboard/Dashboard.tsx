import Header from '@/components/Header'
import StatBox from '@/components/StatBox'

import { Box, Button } from '@mui/material'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import { type ColorMode, ColorModeContext, tokens } from '@/theme'
import { useContext } from 'react'
import MarkunreadIcon from '@mui/icons-material/Markunread'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';


function Dashboard() {
    const { themeMode } = useContext<ColorMode>(ColorModeContext)
    const colors = tokens(themeMode)
    return (
        <Box className="flex flex-col p-4" component={'section'}>
            <Box
                className="flex items-end justify-between"
                component={'section'}
            >
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

            <Box className="mt-4 h-full" component={'section'}>
                <Box className="grid grid-cols-4 gap-8">
                    <StatBox
                        title="Emails Sent"
                        quantity={123561}
                        progress={0.75}
                        difference={14}
                        icon={MarkunreadIcon}
                    />
                    <StatBox
                        title="Sales Obtained"
                        quantity={4141232}
                        progress={0.5}
                        difference={21}
                        icon={PointOfSaleIcon}
                    />
                    <StatBox
                        title="Emails Sent"
                        quantity={32441}
                        progress={0.3}
                        difference={-2}
                        icon={GroupAddIcon}
                    />
                    <StatBox
                        title="Emails Sent"
                        quantity={1234122}
                        progress={0.9}
                        difference={43}
                        icon={TrafficOutlinedIcon}
                    />
                </Box>
                <Box className="grid "></Box>
            </Box>
        </Box>
    )
}

export default Dashboard
