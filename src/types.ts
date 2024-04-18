import { type OverridableComponent } from '@mui/material/OverridableComponent'
import { type SvgIconTypeMap } from '@mui/material'

export type MUIIcon = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName?: string
}

export enum AppTheme{
    LIGHT = 'light',
    DARK = 'dark'
}

export type InvoiceItem = {
    id: string
    name: string
    email: string
    cost: number
    date: string
    phone: string
}