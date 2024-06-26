import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './pages/global/Topbar'
import Sidebar from './pages/global/Sidebar'
import Dashboard from './pages/dashboard'
import Team from './pages/team'
import Invoices from './pages/invoices'
import Contacts from './pages/contacts'
import Bar from './pages/bar'
import Form from './pages/form'
import Line from './pages/line'
import Pie from './pages/pie'
import FAQ from './pages/faq'
import Geography from './pages/geography'
import Calendar from './pages/calendar'

function App() {
    const [theme, colorMode] = useMode()

    return (
        <BrowserRouter>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    {/* cssbaseline automatically applies theme.palette.background.default
                 to the background of the page */}
                    <CssBaseline />
                    <div
                        className="app flex max-h-screen"
                        style={{ maxWidth: '100vw' }}
                    >
                        <Sidebar />
                        <main
                            className="content flex h-screen w-full flex-col"
                            style={{ maxWidth: '100vw' }}
                        >
                            <Topbar />
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/team" element={<Team />} />
                                <Route
                                    path="/contacts"
                                    element={<Contacts />}
                                />
                                <Route
                                    path="/invoices"
                                    element={<Invoices />}
                                />
                                <Route path="/form" element={<Form />} />
                                <Route
                                    path="/calendar"
                                    element={<Calendar />} 
                                />
                                <Route path="/faq" element={<FAQ />} />
                                <Route path="/bar" element={<Bar />} />
                                <Route path="/pie" element={<Pie />} />
                                <Route path="/line" element={<Line />} />
                                
                                <Route
                                    path="/geography"
                                    element={<Geography />}
                                />
                               
                            </Routes>
                        </main>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </BrowserRouter>
    )
}

export default App
