import { useContext, useEffect, useState } from 'react'
import { type ColorMode, ColorModeContext, tokens } from '@/theme'

import { Link, useLocation } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { Box, IconButton, type SvgIconTypeMap } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'

import ProfilePhoto from '@/assets/Jingshi_Liu_HeadShot.png'
import { type OverridableComponent } from '@mui/material/OverridableComponent'

type MUIIcon = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string
}

interface ItemProps {
    title: string
    icon: MUIIcon
    to: string
    curPath: string
}

function Item({ title, icon, to, curPath }: ItemProps) {
    const { themeMode } = useContext<ColorMode>(ColorModeContext)
    const colors = tokens(themeMode)
    const Icon = icon
    const color = {
        color:
            curPath !== to
                ? colors.primary[100]
                : colors.blueAccent[500],
    }

    return (
        <MenuItem
            component={<Link to={to} />}
            icon={<Icon sx={color} />}
        >
            <Typography sx={color}>{title}</Typography>
        </MenuItem>
    )
}

function Sidebar() {
    const location = useLocation()
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [curPath, setCurPath] = useState<string>(location.pathname)
    const { themeMode } = useContext<ColorMode>(ColorModeContext)
    const colors = tokens(themeMode)
    

    useEffect(() => {
        setCurPath(location.pathname)
    }, [location])

    const sectionLabelStyles = {
        fontSize: 12,
        backgroundColor: colors.primary[400],
        color: colors.primary[200],
        marginTop: 1,
        marginBottom: 1,
    }
    return (
        <Box
            sx={{
                '& .pro-sidebar-inner': {
                    background: `${colors.primary[400]} !important`,
                },
                '& .pro-icon-wrapper': {
                    backgroundColor: 'transparent !important',
                },
                '& .pro-inner-item': {
                    padding: '5px 35px 5px 20px ! important',
                },
                '& .pro-inner-item:hover': {
                    color: `${colors.blueAccent[400]} !important`,
                },
                '& .pro-menu-item.active': {
                    color: `${colors.blueAccent[400]} !important`,
                },
                '& .ps-sidebar-container': {
                    background: `${colors.primary[400]} !important`,
                },
            }}
        >
            <ProSidebar
                collapsed={collapsed}
                collapsedWidth="84px"
                className="p-6"
                width="300px"
                rootStyles={{
                    backgroundColor: colors.primary[400],
                    borderRight: `none`,
                    height: '100vh',
                    transition: 'all 200ms ease-in-out',
                }}
            >
                {/* ------------------------- Collapse Toggler -----------------------------*/}
                <Box
                    className="flex items-center justify-between"
                    sx={{
                        backgroundColor: colors.primary[400],
                    }}
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {!collapsed && (
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: 24,
                            }}
                        >
                            ADMIN
                        </Typography>
                    )}
                    <IconButton disableRipple>
                        <MenuIcon />
                    </IconButton>
                </Box>
                
                {/* ------------------------- Profile Photo -----------------------------*/}
                {!collapsed && (
                    <Box
                        className="flex flex-col items-center p-6 text-sm"
                        sx={{
                            backgroundColor: colors.primary[400],
                        }}
                    >
                        <img
                            src={ProfilePhoto}
                            alt=""
                            className="h-32 w-32 rounded-full object-cover"
                        />
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: 30,
                                }}
                            >
                                Jingshi Liu
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 20,
                                    textAlign: 'center',
                                    color: colors.greenAccent[500],
                                }}
                            >
                                VP Admin
                            </Typography>
                        </Box>
                    </Box>
                )}

                {/* ------------------------- Navigation Section -----------------------------*/}
                <Box
                    sx={{
                        padding: collapsed ? 0 : 3,
                        backgroundColor: colors.primary[400],
                    }}
                >
                    <Menu
                        menuItemStyles={{
                            button: {
                                color: colors.primary[100],
                                backgroundColor: colors.primary[400],
                                paddingLeft: 0,
                                ':hover': {
                                    backgroundColor: colors.primary[400],
                                },
                            },
                        }}
                    >
                        <Item
                            to="/"
                            title="Dashboard"
                            icon={HomeOutlinedIcon}
                            curPath={curPath}
                        />

                        <Typography sx={sectionLabelStyles}>Data</Typography>
                        <Item
                            to="/team"
                            title="Manage Team"
                            icon={PeopleAltOutlinedIcon}
                            curPath={curPath}
                        />
                        <Item
                            to="/contacts"
                            title="Contacts Information"
                            icon={ContactsOutlinedIcon}
                            curPath={curPath}
                        />
                        <Item
                            to="/invoices"
                            title="Invoices"
                            icon={ReceiptOutlinedIcon}
                            curPath={curPath}
                        />

                        <Typography sx={sectionLabelStyles}>Pages</Typography>
                        <Item
                            to="/form"
                            title="Profile Form"
                            icon={PersonOutlinedIcon}
                            curPath={curPath}
                        />
                        <Item
                            to="/calendar"
                            title="Calendar"
                            icon={CalendarTodayOutlinedIcon}
                            curPath={curPath}
                        />
                        <Item
                            to="/faq"
                            title="FAQ Page"
                            icon={HelpOutlinedIcon}
                            curPath={curPath}
                        />

                        <Typography sx={sectionLabelStyles}>Charts</Typography>
                        <Item
                            to="/bar"
                            title="Bar Chart"
                            icon={BarChartOutlinedIcon}
                            curPath={curPath}
                        />
                        <Item
                            to="/pie"
                            title="Pie Chart"
                            icon={PieChartOutlinedIcon}
                            curPath={curPath}
                        />
                        <Item
                            to="/line"
                            title="Line Chart"
                            icon={TimelineOutlinedIcon}
                            curPath={curPath}
                        />
                        <Item
                            to="/geography"
                            title="Geography Chart"
                            icon={MapOutlinedIcon}
                            curPath={curPath}
                        />
                    </Menu>
                </Box>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar
