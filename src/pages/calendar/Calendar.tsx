import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { type DateClickArg } from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { Box, Typography } from '@mui/material'
import Header from '@/components/Header'
import { useContext, useMemo, useState } from 'react'
import { ColorMode, ColorModeContext, tokens } from '@/theme'

type EventItem = {
    title: string
    date: string
}

const defaultEvents: EventItem[] = [
    { title: 'Event 1', date: '2021-10-01' },
    { title: 'Event 2', date: '2021-10-02' },
]

const CalendarEvent = ({
    title,
    date,
    colors,
}: EventItem & { colors: any }) => {
    return (
        <Box
            className="mb-4 rounded p-4"
            component={'li'}
            sx={{
                backgroundColor: colors.greenAccent[500],
                borderRadius: 'md',
                color: colors.primary[50],
            }}
        >
            <Typography>{title}</Typography>
            <Typography>{date}</Typography>
        </Box>
    )
}

const Calendar = (): JSX.Element => {
    const [events, setEvents] = useState<EventItem[]>(defaultEvents)
    const { themeMode } = useContext<ColorMode>(ColorModeContext)
    const colors = useMemo(() => tokens(themeMode), [themeMode])

    const handleDateClick = (selected: DateClickArg) => {
        const title = prompt('Enter Event Title')
        const calendarApi = selected.view.calendar
        calendarApi.unselect()
        console.log(selected)

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title: title,
                start: selected.date,
                allDay: selected.allDay,
            })
            setEvents([...events, { title, date: selected.dateStr }])
        }
    }

    const handleEventClick = (selected: any) => {
        if (window.confirm(`Delete Event: ${selected.event.title}`)) {
            selected.event.remove()
            setEvents(
                events.filter((event) => event.title !== selected.event.title),
            )
        }
    }

    return (
        <Box className="flex h-full flex-col p-4" component={'section'}>
            <Header
                title="Calendar"
                description="Full Calendar Interactive Page"
            />
            <Box className="mt-8 flex h-full w-full " component={'section'}>
                <Box
                    className="mr-6 w-1/4 rounded p-4 "
                    component={'ul'}
                    sx={{
                        backgroundColor: colors.primary[400],
                    }}
                >
                    <Typography variant="h5" mb={2}>
                        Events
                    </Typography>
                    {events.map(({ title, date }) => (
                        <CalendarEvent
                            title={title}
                            date={date}
                            colors={colors}
                            key={title}
                        />
                    ))}
                </Box>
                <Box className="h-full w-full">
                    <FullCalendar
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                        }}
                        initialView="dayGridMonth"
                        dateClick={handleDateClick}
                        editable={true}
                        eventClick={handleEventClick}
                        height={'100%'}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Calendar
