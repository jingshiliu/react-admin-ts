import { Box, Typography } from '@mui/material'
import { mockDataInvoices } from '@/data/mockData'
import type { InvoiceItem } from '@/types'

const TransactionCard = ({
    name,
    email,
    cost,
    date,
    colors,
}: InvoiceItem & { colors: any }) => {
    return (
        <Box className="flex items-center justify-between py-4 " sx={{
            borderTop: `2px solid ${colors.primary[500]}`,
        }}>
            <Box>
                <Typography
                    sx={{
                        color: colors.greenAccent[500],
                        fontWeight: 600,
                        fontSize: '1.2em',
                    }}
                >
                    {name}
                </Typography>
                <Typography>{email}</Typography>
            </Box>
            <Typography>{date}</Typography>
            <Typography
                className="rounded px-4 py-2"
                sx={{
                    backgroundColor: colors.greenAccent[500],
                }}
            >
                ${cost}
            </Typography>
        </Box>
    )
}

const TransactionSection = ({ colors }) => {
    return (
        <Box
            className="h-2/5 overflow-y-scroll rounded pb-4"
            sx={{
                backgroundColor: colors.primary[400],
            }}
        >
            <Typography
                className="sticky left-0 top-0 p-6 pb-2"
                sx={{
                    color: colors.primary[100],
                    fontWeight: 800,
                    fontSize: '1.3em',
                    backgroundColor: colors.primary[400],
                }}
            >
                Recent Transactions
            </Typography>
            <Box className="px-6">
                {(mockDataInvoices as InvoiceItem[]).map((invoice) => (
                    <TransactionCard {...invoice} colors={colors} />
                ))}
            </Box>
        </Box>
    )
}

export default TransactionSection
