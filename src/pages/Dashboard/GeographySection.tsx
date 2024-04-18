import GeoChart from '@/components/GeoChart'
import { Box, Typography } from '@mui/material'
import { mockGeographyData } from '@/data/mockData'

const GeographySection = ({ colors }) => {
    return (
        <Box
            className="col-span-1 h-full items-center justify-center rounded p-4"
            component={'section'}
            sx={{
                backgroundColor: colors.primary[400],
                height: '34vh',
            }}
        >
            <Typography
                sx={{
                    color: colors.primary[100],
                    fontSize: '1.5em',
                    fontWeight: 'bold',
                }}
            >
                Sales Quanitity
            </Typography>

            <Box height={"90%"}>
            <GeoChart data={mockGeographyData} isDashboard />
            </Box>
        </Box>
    )
}

export default GeographySection
