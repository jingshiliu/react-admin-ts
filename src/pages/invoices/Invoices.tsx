import { Box } from '@mui/material'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import { type ColorMode, tokens, ColorModeContext } from '@/theme'
import { useContext } from 'react'

import { mockDataInvoices } from '@/data/mockData'
import Header from '@/components/Header'

function Invoices() {
    const { themeMode } = useContext<ColorMode>(ColorModeContext)
    const colors = tokens(themeMode)

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            flex: 1,
        },
        {
            field: 'name',
            headerName: 'Name',
            cellClassName: 'name-col',
            flex: 2,
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            flex: 2,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 2,
        },
        {
            field: 'cost',
            headerName: 'Cost',
            flex: 2,
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 2,
        },
    ]

    return (
        <Box className="flex h-full flex-col p-4">
            <Header title="Invoices" description="List of Invoice Balances" />
            <Box
                className="mt-8 flex h-full"
                sx={{
                    '& .MuiDataGrid-root': {
                        border: 'none',
                        backgroundColor: colors.primary[400],
                        color: colors.primary[100],
                        width: 'inherit',
                    },
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: 'none',
                    },
                    '& .MuiDataGrid-columnHeaderCheckbox': {
                        backgroundColor: colors.blueAccent[700],
                    },
                    '& .MuiDataGrid-footerContainer': {
                        backgroundColor: colors.blueAccent[700],
                        borderRadius: ' 0 0 8px 8px',
                    },
                    '& .MuiCheckbox-root': {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    '& .name-col': {
                        color: colors.greenAccent[400],
                    },
                }}
            >
                <DataGrid
                    rows={mockDataInvoices}
                    columns={columns}
                    checkboxSelection
                />
            </Box>
        </Box>
    )
}

export default Invoices
