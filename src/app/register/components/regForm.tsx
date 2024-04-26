'use client'
import { FormControl, InputLabel, Select, MenuItem, TextField, Box, Button, FormHelperText, FormControlLabel, Checkbox, OutlinedInput, IconButton, InputAdornment } from "@mui/material";
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from "next/link";
import axios from "axios"
import * as yup from 'yup';
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import React from "react";
import Script from "next/script";

const validationSchema = yup.object({
    firstName: yup
        .string()
        .required('Your First Name is required'),
    email: yup
        .string()
        .required('Your Email Name is required'),
    phoneNumber: yup
        .string()
        .required('Your Phone Number is Required'),
    lastName: yup
        .string()
        .required('Your Last Name is required'),
    password: yup
        .string()
        .required("Required"),
    country: yup
        .string()
        .required("Select Country")

})

let country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

export default function FormReg() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const formIk = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            phoneNumber: '',
            lastName: '',
            password: '',
            country: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const newUser = await axios.post('/register/api', values)
            console.log(newUser.data)
            signIn("credentials", {
                email: newUser.data.email,
                password: newUser.data.password,
                redirect: false
            }).then((res) => {
                if (res!.error) {
                    toast(res?.error as string, { type: 'error' })
                } else {
                    toast("logged in", { type: "success" })
                    // redirect('clientarea/accounts-overview')
                    window.location.replace('clientarea/accounts-overview')
                }
            })
        }
    })

    return <form className="bg-white px-2 md:px-5 pb-10 h-screen md:h-full" onSubmit={formIk.handleSubmit}>
        <div className="gtranslate_wrapper"></div>

        <Script
            defer
            src="https://cdn.gtranslate.net/widgets/latest/float.js"
        />
        <Script
            defer
            id="show-livechat"
            type="text/javascript"
            dangerouslySetInnerHTML={{
                __html: `window.gtranslateSettings = {"default_language":"en","native_language_names":true,"detect_browser_language":true,"languages":["en","fr","de","it","es"],"wrapper_selector":".gtranslate_wrapper"}`
            }}
            onLoad={() => {
                console.log('Script has loaded')
            }}
        />

        <div className="mx-auto h-16 w-16 relative py-20">
            <Link href="/">
                <Image alt="logo" src="/logo.svg" fill />
            </Link>
        </div>
        <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
            <TextField
                className="outline-none border-none"
                type="text"
                name="firstName"
                label="First Name *"
                value={formIk.values.firstName}
                onChange={formIk.handleChange}
                onBlur={formIk.handleBlur}
                error={formIk.touched.firstName && Boolean(formIk.errors.firstName)}
                helperText={formIk.touched.firstName && formIk.errors.firstName}
            />
        </FormControl>



        <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">

            <TextField
                className="outline-none border-none"
                type="text"
                name="lastName"
                id="lastName"
                label="Last Name *"

                value={formIk.values.lastName}
                onChange={formIk.handleChange}
                onBlur={formIk.handleBlur}
                error={formIk.touched.lastName && Boolean(formIk.errors.lastName)}
                helperText={formIk.touched.lastName && formIk.errors.lastName}
            />
        </FormControl>


        <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">

            <TextField
                className="outline-none border-none"
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                label="Phone Numebr *"

                value={formIk.values.phoneNumber}
                onChange={formIk.handleChange}
                onBlur={formIk.handleBlur}
                error={formIk.touched.phoneNumber && Boolean(formIk.errors.phoneNumber)}
                helperText={formIk.touched.phoneNumber && formIk.errors.phoneNumber}
            />
        </FormControl>

        <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
            <TextField
                className="outline-none border-none"
                type="text"
                name="email"
                id=""
                label="Email *"

                value={formIk.values.email}
                onChange={formIk.handleChange}
                onBlur={formIk.handleBlur}
                error={formIk.touched.email && Boolean(formIk.errors.email)}
                helperText={formIk.touched.email && formIk.errors.email}
            />
        </FormControl>

        <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
            <InputLabel>country</InputLabel>
            <Select
                name="country"
                label="Country *"
                value={formIk.values.country}
                onChange={formIk.handleChange}
                onBlur={formIk.handleBlur}
                error={formIk.touched.country && Boolean(formIk.errors.country)}
            >
                {
                    country_list.map((res, index) => {
                        return <MenuItem key={index} value={res}>{res}</MenuItem>
                    })
                }
            </Select>

            <FormHelperText>
                {formIk.touched.country && formIk.errors.country}
            </FormHelperText>
        </FormControl>

        <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">

            <InputLabel>Password *</InputLabel>
            <OutlinedInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                label="Password *"

                value={formIk.values.password}
                onChange={formIk.handleChange}
                onBlur={formIk.handleBlur}
                error={formIk.touched.password && Boolean(formIk.errors.password)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <FormHelperText>{formIk.touched.password && formIk.errors.password}</FormHelperText>

        </FormControl>

        <FormControlLabel
            control={
                <Checkbox name="antoine" />
            }
            label="I agree to privacy policy & terms"
            className="text-gray-500"
        />

        <div className="flex justify-center pt-5">
            <Button
                type="submit"
                variant="outlined"
            >
                Register
            </Button>
        </div>

        <div className="">
            <div className="text-center text-gray-600 py-6">
                Already have an account?
            </div>

            <Link href={'/login'} className="flex justify-center text-blue-600">
                Sign in instead
            </Link>

        </div>
    </form>
}