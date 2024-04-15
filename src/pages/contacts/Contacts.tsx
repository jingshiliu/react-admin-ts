import { Box, Typography } from '@mui/material'
import { DataGrid, GridToolbar, type GridColDef } from '@mui/x-data-grid'
import { type ColorMode, tokens, ColorModeContext } from '@/theme'
import { useContext } from 'react'

import { mockDataContacts } from '@/data/mockData'
import Header from '@/components/Header'

function Contacts() {
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
            flex: 3,
        },
        {
            field: 'age',
            headerName: 'Age',
            flex: 1,
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            flex: 2,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 3,
        },

        {
            field: 'address',
            headerName: 'Address',
            flex: 4,
        },
        {
            field: 'city',
            headerName: 'City',
            flex: 1,
        },
        {
            field: 'zipCode',
            headerName: 'Zip Code',
            flex: 2,
        },
        {
            field: 'registrarId',
            headerName: 'Registrar ID',
            flex: 2,
        },
    ]

    return (
        <Box className="flex h-full flex-col p-4">
            <Header
                title="Contacts"
                description="List of Contacts for Future Reference"
            />
            <Box
                className="mt-8 flex h-[90%]"
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
                    '& .MuiDataGrid-toolbarContainer': {
                        backgroundColor: colors.primary[500],
                        color: `${colors.greenAccent[200]} !important`,
                        '.MuiButton-text': {
                            color: `${colors.primary[100]} !important`,
                        },
                    },
                    '& .name-col': {
                        color: colors.greenAccent[400],
                    },
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    slots={{
                        toolbar: GridToolbar,
                    }}
                />
            </Box>
        </Box>
    )
}

export default Contacts
