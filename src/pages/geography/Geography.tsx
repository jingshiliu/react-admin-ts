import Header from '@/components/Header'
import { Box } from '@mui/material'
import { mockGeographyData } from '@/data/mockData'
import GeoChart from '@/components/GeoChart'
import { useContext, useMemo } from 'react'
import { ColorMode, ColorModeContext, tokens } from '@/theme'

const Geography = () => {
    const { themeMode } = useContext<ColorMode>(ColorModeContext)
    const colors = useMemo(() => tokens(themeMode), [themeMode])
    return (
        <Box component={'section'} className="flex h-full flex-col p-4">
            <Header title="Geography" description="Simple Geography Chart" />
            <Box
                component={'section'}
                className=" mt-4 box-content h-full rounded p-4"
                sx={{
                    backgroundColor: colors.primary[400],
                }}
            >
                <GeoChart data={mockGeographyData} />
            </Box>
        </Box>
    )
}

export default Geography
