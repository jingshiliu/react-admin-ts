import { Box, Typography } from '@mui/material'
import { DataGrid, type GridColDef, type GridRowsProp } from '@mui/x-data-grid'
import { type ColorMode, tokens, ColorModeContext } from '@/theme'
import { useContext } from 'react'

import { mockDataTeam } from '@/data/mockData'
import Header from '@/components/Header'

import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'

function AccessLevel({ access, colors }: { access: string; colors: any }) {
    let Icon
    let backgroundColor = colors.greenAccent[700]
    if (access === 'admin') {
        Icon = AdminPanelSettingsOutlinedIcon
        backgroundColor = colors.greenAccent[600]
    } else if (access === 'user') {
        Icon = LockPersonOutlinedIcon
    } else {
        Icon = SecurityOutlinedIcon
    }

    return (
        <Box className="flex h-full items-center">
            <Box
                className="flex w-2/3 items-center justify-center rounded p-2 "
                sx={{
                    backgroundColor: backgroundColor,
                    color: colors.grey[100],
                }}
            >
                <Icon className="mr-2 " />
                <Typography>{access}</Typography>
            </Box>
        </Box>
    )
}

function Team() {
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
            flex: 3,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 3,
        },

        {
            field: 'access',
            headerName: 'Access Level',
            flex: 3,
            renderCell: ({ row: { access } }) => (
                <AccessLevel access={access} colors={colors} />
            ),
        },
    ]

    return (
        <Box className="flex h-full flex-col p-4">
            <Header title="Team" description="Managing the Team Members" />
            <Box
                className="mt-8 h-full w-full"
                sx={{
                    '& .MuiDataGrid-root': {
                        border: 'none',
                        backgroundColor: colors.primary[400],
                        color: colors.primary[100],
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
                    rows={mockDataTeam}
                    columns={columns}
                    checkboxSelection
                />
            </Box>
        </Box>
    )
}

export default Team
