import { Box, Typography } from '@mui/material'
import ProgressCircle from './ProgressCircle'
import { ColorMode, ColorModeContext, tokens } from '@/theme'
import { useContext, useMemo } from 'react'
import { type MUIIcon } from '@/types'

interface StatBoxProps {
    icon: MUIIcon
    quantity: number
    title: string
    progress: number
    difference: number
}

const StatBox = ({
    icon,
    quantity,
    title,
    progress,
    difference,
}: StatBoxProps) => {
    const { themeMode } = useContext<ColorMode>(ColorModeContext)
    const colors = useMemo(() => tokens(themeMode), [themeMode])
    const Icon = icon

    return (
        <Box
            className="flex h-full w-full justify-between p-6 px-10 "
            sx={{
                background: colors.primary[400],
                borderRadius: '0.4rem',
            }}
        >
            <Box color={colors.greenAccent[500]}>
                <Icon sx={{ fontSize: 35 }} />
                <Typography
                    color={colors.primary[100]}
                    fontSize={'20px'}
                    margin={'0.2em 0'}
                    fontWeight={900}
                >
                    {quantity.toLocaleString()}
                </Typography>
                <Typography fontSize={'15px'}>{title}</Typography>
            </Box>

            <Box className="flex flex-col items-center justify-center">
                <ProgressCircle progress={progress} size={50} />

                <Typography
                    sx={{
                        color: colors.greenAccent[500],
                        textAlign: 'center',
                        fontStyle: 'italic',
                        display: 'inline-block',
                        marginTop: '0.5rem',
                    }}
                >
                    {difference}%
                </Typography>
            </Box>
        </Box>
    )
}

export default StatBox
