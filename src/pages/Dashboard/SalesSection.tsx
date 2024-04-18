import BarChart from '@/components/BarChart'
import { Box, Typography } from '@mui/material'
import { mockBarData } from '@/data/mockData'

const SaleSection = ({ colors }) => {
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

            <BarChart data={mockBarData} />
        </Box>
    )
}

export default SaleSection
