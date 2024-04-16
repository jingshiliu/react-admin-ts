import Header from '@/components/Header'
import { ColorMode, ColorModeContext, tokens } from '@/theme'
import {
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material'
import { useContext, useMemo, useState } from 'react'

type FaqItem = {
    question: string
    answer: string
}

const faqs: FaqItem[] = [
    {
        question: 'What is the purpose of this app?',
        answer: 'This app is a demo of a dashboard app.',
    },
    {
        question: 'How do I use this app?',
        answer: 'You can use this app to view data.',
    },
    {
        question: 'What is the technology stack?',
        answer: 'This app uses React, Typescript, Material UI, Tailwind, Formik, Yup, FullCalendar, and ProSidebar.',
    },
    {
        question: 'How do I contact the developer?',
        answer: 'You can contact the developer at jingshi-liu.com.',
    },
    {
        question: 'Who developed this app?',
        answer: 'A good guy.',
    },
]

const FAQ = () => {
    const [expanded, setExpanded] = useState<number>(-1)
    const { themeMode } = useContext<ColorMode>(ColorModeContext)
    const colors = useMemo(() => tokens(themeMode), [themeMode])

    return (
        <Box className="p-4" component={'section'}>
            <Header title="FAQ" description="Frequently Asked Questions Page" />
            <Box
                className="mt-4"
                sx={{
                    '& .MuiAccordion-root': {
                        backgroundColor: colors.primary[400],
                    },
                }}
            >
                {faqs.map(({ question, answer }: FaqItem, index) => (
                    <Accordion
                        expanded={expanded === index}
                        key={index}
                        onChange={() => setExpanded(index)}
                        square={false}
                    >
                        <AccordionSummary>
                            <Typography
                                variant="h5"
                                color={colors.greenAccent[500]}
                            >
                                {question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box>
    )
}

export default FAQ
