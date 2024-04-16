import Header from '@/components/Header'
import { Box, Button, TextField } from '@mui/material'
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useContext } from 'react'
import { type ColorMode, ColorModeContext, tokens } from '@/theme'

const validationSchema = yup.object({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('Phone is required'),
    address1: yup.string().required('Address is required'),
    address2: yup.string(),
})

const ProfileForm = () => {
    const { themeMode } = useContext<ColorMode>(ColorModeContext)
    const colors = tokens(themeMode)
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address1: '',
            address2: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })
    return (
        <Box className="h-full p-4" component={'section'}>
            <Header
                title="Create User"
                description="Create a New User Profile"
            />
            <form action="" onSubmit={formik.handleSubmit}>
                <Box
                    component={'section'}
                    className="mt-5 grid grid-cols-2 gap-10"
                >
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        variant="filled"
                        color='secondary'
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.firstName &&
                            Boolean(formik.errors.firstName)
                        }
                        helperText={
                            formik.touched.firstName && formik.errors.firstName
                        }
                    />
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        variant="filled"
                        color='secondary'
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.lastName &&
                            Boolean(formik.errors.lastName)
                        }
                        helperText={
                            formik.touched.lastName && formik.errors.lastName
                        }
                    />
                    <TextField
                        className="col-span-2"
                        id="email"
                        name="email"
                        label="Email"
                        variant="filled"
                        color='secondary'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        className="col-span-2"
                        id="phone"
                        name="phone"
                        label="Phone"
                        variant="filled"
                        color='secondary'
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.phone && Boolean(formik.errors.phone)
                        }
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                    <TextField
                        className="col-span-2"
                        id="address1"
                        name="address1"
                        label="Address 1"
                        variant="filled"
                        color='secondary'
                        value={formik.values.address1}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.address1 &&
                            Boolean(formik.errors.address1)
                        }
                        helperText={
                            formik.touched.address1 && formik.errors.address1
                        }
                    />
                    <TextField
                        className="col-span-2"
                        id="address2"
                        name="address2"
                        label="Address 2"
                        variant="filled"
                        color='secondary'
                        value={formik.values.address2}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.address2 &&
                            Boolean(formik.errors.address2)
                        }
                        helperText={
                            formik.touched.address2 && formik.errors.address2
                        }
                    />
                </Box>
                <Button
                    startIcon={<EditCalendarOutlinedIcon />}
                    variant="contained"
                    sx={{
                        backgroundColor: colors.greenAccent[500],
                        marginTop: 5,
                        padding: '1rem 2rem',
                        color: colors.primary[400],
                        ':hover': {
                            backgroundColor: colors.primary[400],
                            color: colors.greenAccent[600],
                        },
                    }}
                    type="submit"
                >
                    Create User
                </Button>
            </form>
        </Box>
    )
}

export default ProfileForm
