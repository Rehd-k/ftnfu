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
    balance: yup
        .string(),
    ProfitLoss: yup
        .string(),
    Drawdown: yup
        .string(),
    TradingDays: yup
        .string()

})
export default function DoAccount({ isOpen, handleClose, neededInfo }: any) {
    let formIk = useFormik({
        initialValues: {
            balance: '',
            ProfitLoss: '',
            Drawdown: '',
            TradingDays: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log(values);
            let newUser = await axios.put(`/admin/users/api?id=${neededInfo._id}`, values)
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
                        Update Account
                    </div>

                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full text-white">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="balance"
                            label="Balance *"
                            value={formIk.values.balance}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.balance && Boolean(formIk.errors.balance)}
                        />
                    </FormControl>

                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full text-white">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="ProfitLoss"
                            label="Profit Loss *"
                            value={formIk.values.ProfitLoss}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.ProfitLoss && Boolean(formIk.errors.ProfitLoss)}
                        />
                    </FormControl>

                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full text-white">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="Drawdown"
                            label="Drawdown *"
                            value={formIk.values.Drawdown}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.Drawdown && Boolean(formIk.errors.Drawdown)}
                        />
                    </FormControl>


                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full text-white">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="TradingDays"
                            label="Trading Days *"
                            value={formIk.values.TradingDays}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.TradingDays && Boolean(formIk.errors.TradingDays)}
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