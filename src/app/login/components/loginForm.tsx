'use client'
import { FormControl, InputLabel, Select, MenuItem, TextField, Box, Button, FormHelperText, FormControlLabel, Checkbox, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { useFormik } from 'formik';
import { signIn } from "next-auth/react";
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import Link from "next/link";
import axios from "axios"
import * as yup from 'yup';
import React from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const validationSchema = yup.object({
    email: yup
        .string()
        .required('Your Email Name is required'),
    password: yup
        .string()
        .required('Password is Required'),
})

export default function FormReg() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const formIk = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const newUser = await login(values)
        }
    })


    const login = async (values: { email: any; password: any; }) => {
        console.log(values);
        signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false
        }).then((res) => {
            if (res!.error) {
                toast(res?.error as string, { type: 'error' })
            } else {
                toast("logged in", { type: "success" })
                window.location.replace('clientarea/accounts-overview')
            }
        })
    }


    return <form className="bg-white px-2 md:px-5 pb-10 h-screen md:h-full" onSubmit={formIk.handleSubmit}>
        <div className="mx-auto w-1/2 h-1/4 relative py-20">
            <Link href="/">
                <Image alt="logo" src="/logo.svg" fill />
            </Link>
        </div>
        <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
            <TextField
                className="outline-none border-none"
                type="text"
                name="email"
                label="Email *"
                value={formIk.values.email}
                onChange={formIk.handleChange}
                onBlur={formIk.handleBlur}
                error={formIk.touched.email && Boolean(formIk.errors.email)}
                helperText={formIk.touched.email && formIk.errors.email}
            />
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
            label="Keep Me Logged in"
            className="text-gray-500"
        />

        <div className="flex justify-center pt-5">
            <Button
                type="submit"
                variant="outlined"
            >
                Login
            </Button>
        </div>

        <div className="">
            <div className="text-center text-gray-600 py-6">
                Dont have an account?
            </div>

            <Link href={'/register'} className="flex justify-center text-blue-600">
                Sign up instead
            </Link>

        </div>
        <ToastContainer />
    </form>
}