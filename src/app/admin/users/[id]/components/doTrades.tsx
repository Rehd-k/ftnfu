'use client'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ReactNode, useEffect, useState } from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from "axios"
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IconButton, InputLabel, MenuItem, Select } from "@mui/material";
import { Close } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    px: 4,
};


const validationSchema = yup.object({
    pair: yup
        .string()
        .required('Symbol is required'),
    entryPrice: yup
        .string()
        .required('Entry is required'),
    exitPrice: yup
        .string()
        .required('Price Power is required'),
    type: yup
        .string()
        .required('Type is required'),
    tradeDate: yup
        .string()
        .required()
})
export default function DoTrade({ isOpen, handleClose, neededInfo }: any) {
    let formIk = useFormik({
        initialValues: {
            account: neededInfo.accountNumber,
            user: neededInfo.user,
            pair: '',
            entryPrice: '',
            exitPrice: '',
            type: '',
            tradeDate: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log(values);
            let newUser = await axios.post('/admin/users/api', values)
            toast("Success")
        }
    })


    return <>
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="overflow-y-scroll"
        >
            <Box sx={style} className="bg-gray-200 dark:bg-gray-700 rounded-lg w-11/12 md:w-auto pb-5 dark:text-gray-200">
                <form onSubmit={formIk.handleSubmit}>
                    <div className="flex justify-end">
                        <IconButton
                            onClick={handleClose}>
                            <Close />
                        </IconButton>
                    </div>
                    <div className="mx-auto full text-center  text-black">
                        Add New Trade
                    </div>

                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full text-white">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="pair"
                            label="Pair *"
                            value={formIk.values.pair}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.pair && Boolean(formIk.errors.pair)}
                            helperText={formIk.touched.pair && formIk.errors.pair}
                        />
                    </FormControl>


                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full text-white">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="entryPrice"
                            label="Entry Price *"
                            value={formIk.values.entryPrice}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.entryPrice && Boolean(formIk.errors.entryPrice)}
                            helperText={formIk.touched.entryPrice && formIk.errors.entryPrice}
                        />
                    </FormControl>


                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full text-white">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="exitPrice"
                            label="Exit Price *"
                            value={formIk.values.exitPrice}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.exitPrice && Boolean(formIk.errors.exitPrice)}
                            helperText={formIk.touched.exitPrice && formIk.errors.exitPrice}
                        />
                    </FormControl>


                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
                        <InputLabel>Type</InputLabel>
                        <Select
                            name="type"
                            label="Type *"
                            value={formIk.values.type}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.type && Boolean(formIk.errors.type)}
                        // helperText={formIk.touched.type && formIk.errors.type}
                        >
                            <MenuItem value={'BUY'}>BUY</MenuItem>
                            <MenuItem value={'SELL'}>SELL</MenuItem>
                        </Select>
                    </FormControl>


                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
                        <TextField
                            className="outline-none border-none"
                            type="date"
                            name="tradeDate"
                            id="tradeDate"
                            label=" *"

                            value={formIk.values.tradeDate}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.tradeDate && Boolean(formIk.errors.tradeDate)}
                            helperText={formIk.touched.tradeDate && formIk.errors.tradeDate}
                        />
                    </FormControl>

                    <div className="flex justify-center pt-5">

                        <Button
                            type="submit"
                            variant="outlined"
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </Box>


        </Modal>
        <ToastContainer />
    </>
}