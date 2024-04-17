import Header from '@/components/Header'
import { Box } from '@mui/material'
import { mockPieData } from '@/data/mockData'
import PieChart from '@/components/PieChart'

const Pie = () => {
    return (
        <Box component={'section'} className="flex h-full flex-col p-4">
            <Header title="Pie Chart" description="Simple Pie Chart" />
            <Box className="h-full">
                <PieChart data={mockPieData} />
            </Box>
        </Box>
    )
}

export default Pie
