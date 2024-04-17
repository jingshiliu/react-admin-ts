import Header from '@/components/Header'
import { Box } from '@mui/material'
import { mockLineData } from '@/data/mockData'
import LineChart from '@/components/LineChart'

const Line = () => {
    return (
        <Box component={'section'} className="flex h-full flex-col p-4">
            <Header title="Line Chart" description="Simple Line Chart" />
            <Box component={'section'} className="h-full">
                <LineChart data={mockLineData} />
            </Box>
        </Box>
    )
}

export default Line