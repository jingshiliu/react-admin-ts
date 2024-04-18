import ProgressCircle from '@/components/ProgressCircle'
import { Box, Typography } from '@mui/material'

const CampaignSection = ({ colors }) => {
    const revenue = 324123
    return (
        <Box
            className="relative col-span-1 flex flex-col items-center justify-center rounded p-4"
            component={'section'}
            sx={{
                backgroundColor: colors.primary[400],
                height: '34vh',
            }}
        >
            <Typography
                className="absolute left-4 top-4"
                sx={{
                    color: colors.primary[100],
                    fontSize: '1.5em',
                    fontWeight: 'bold',
                }}
            >
                Campaign
            </Typography>

            <Box className="flex flex-col items-center justify-center">
                <ProgressCircle progress={0.75} size={200} />
                <Typography
                    sx={{
                        color: colors.greenAccent[500],
                        textAlign: 'center',
                        display: 'inline-block',
                        marginTop: '0.5rem',
                        fontSize: '1.5em',
                    }}
                >
                    ${revenue.toLocaleString()} revenue generated
                </Typography>
                <Typography fontSize={'1.2em'} color={colors.primary[100]}>
                    Include extra misc expenditures and costs
                </Typography>
            </Box>
        </Box>
    )
}

export default CampaignSection
