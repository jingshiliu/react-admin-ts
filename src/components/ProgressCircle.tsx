import { type ColorMode, ColorModeContext, tokens } from '@/theme'
import { Box } from '@mui/material'
import { useContext, useMemo } from 'react'

type ProgressCircleProps = {
    progress?: number
    size?: number
}

const ProgressCircle = ({
    progress = 0.75,
    size = 40,
}: ProgressCircleProps) => {
    const { themeMode } = useContext<ColorMode>(ColorModeContext)
    const colors = useMemo(() => tokens(themeMode), [themeMode])
    const angle = useMemo<number>(() => 360 * progress, [progress])

    return (
        <Box
            sx={{
                background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
                        conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
                        ${colors.greenAccent[500]}`,
                borderRadius: '50%',
                height: `${size}px`,
                width: `${size}px`,
            }}
        />
    )
}

export default ProgressCircle
