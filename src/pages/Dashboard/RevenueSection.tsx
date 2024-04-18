import LineChart from '@/components/LineChart'
import { Box, IconButton, Typography } from '@mui/material'
import { mockLineData } from '@/data/mockData'

import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined'

const RevenueSection = ({ colors }) => {
    const revenue = 329842
    return (
        <Box
            component={'section'}
            className="col-span-2 rounded py-6"
            sx={{
                backgroundColor: colors.primary[400],
                height: '34vh',
            }}
        >
            <Box className="flex justify-between px-8">
                <Box>
                    <Typography fontWeight={800} color={colors.primary[100]}>
                        Revenue Generated
                    </Typography>
                    <Typography
                        fontWeight={800}
                        fontSize={'1.5em'}
                        color={colors.greenAccent[500]}
                    >
                        ${revenue.toLocaleString()}
                    </Typography>
                </Box>
                <IconButton sx={{ color: colors.greenAccent[500] }}>
                    <CloudDownloadOutlinedIcon />
                </IconButton>
            </Box>
            <Box className="relative bottom-8 h-full">
                <LineChart data={mockLineData} />
            </Box>
        </Box>
    )
}

export default RevenueSection
