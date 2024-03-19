import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ReactNode } from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from "axios"
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    px: 4,
};


const validationSchema = yup.object({
    name: yup
        .string()
        .required('Plan Name is required'),
    price: yup
        .string()
        .required('Price is required'),
    buyingPower: yup
        .string()
        .required('Buying Power is required'),
    pofitTraget: yup
        .string()
        .required('Pofit Traget is required'),
    maxLoss: yup
        .string()
        .required("max Loss Required"),
    payoutSlip: yup
        .string()
        .required("Payout Slip Required"),
    minimumTrades: yup
        .string()
        .required('Minimum Trades is required'),
    growth: yup
        .string()
        .required('Growth is required'),
    tradingPeriod: yup
        .string()
        .required('Trading Period is required'),
    dailyLossAllowance: yup
        .string()
        .required("daily Loss Allowance Required")

})
export default function PlanForm({ isOpen, handleClose, formContent }: any) {
    let formIk
    let initialValues = () => {
        let values
        if (formContent) {
            values = {
                name: formContent.name as ReactNode,
                price: formContent.price as ReactNode,
                buyingPower: formContent.buyingPower as ReactNode,
                pofitTraget: formContent.pofitTraget as ReactNode,
                maxLoss: formContent.maxLoss as ReactNode,
                payoutSlip: formContent.payoutSlip as ReactNode,
                minimumTrades: formContent.minimumTrades as ReactNode,
                growth: formContent.growth as ReactNode,
                tradingPeriod: formContent.tradingPeriod as ReactNode,
                dailyLossAllowance: formContent.dailyLossAllowance as ReactNode
            }
        } else {
            values = {
                name: '',
                price: '',
                buyingPower: '',
                pofitTraget: '',
                maxLoss: '',
                payoutSlip: '',
                minimumTrades: '',
                growth: '',
                tradingPeriod: '',
                dailyLossAllowance: ''
            }
        }
        return values
    }


    formIk = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log(values);
            let newUser
            if (formContent) {
                newUser = await axios.put(`/admin/accounts/api?id=${formContent._id}`, values)
            } else {
                newUser = await axios.post('/admin/accounts/api', values)
            }
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
                        Add New Plan
                    </div>

                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full text-white">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="name"
                            label="Name *"
                            value={formIk.values.name}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.name && Boolean(formIk.errors.name)}
                            helperText={formIk.touched.name && formIk.errors.name}
                        />
                    </FormControl>


                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full text-white">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="price"
                            label="Price *"
                            value={formIk.values.price}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.price && Boolean(formIk.errors.price)}
                            helperText={formIk.touched.price && formIk.errors.price}
                        />
                    </FormControl>


                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full text-white">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="buyingPower"
                            label="Buying Power *"
                            value={formIk.values.buyingPower}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.buyingPower && Boolean(formIk.errors.buyingPower)}
                            helperText={formIk.touched.buyingPower && formIk.errors.buyingPower}
                        />
                    </FormControl>



                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name=""
                            id="pofitTraget"
                            label="Pofit Traget *"

                            value={formIk.values.pofitTraget}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.pofitTraget && Boolean(formIk.errors.pofitTraget)}
                            helperText={formIk.touched.pofitTraget && formIk.errors.pofitTraget}
                        />
                    </FormControl>

                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="maxLoss"
                            id=""
                            label="Max Loss *"

                            value={formIk.values.maxLoss}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.maxLoss && Boolean(formIk.errors.maxLoss)}
                            helperText={formIk.touched.maxLoss && formIk.errors.maxLoss}
                        />
                    </FormControl>

                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="payoutSlip"
                            id=""
                            label="Payout Split *"

                            value={formIk.values.payoutSlip}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.payoutSlip && Boolean(formIk.errors.payoutSlip)}
                            helperText={formIk.touched.payoutSlip && formIk.errors.payoutSlip}
                        />
                    </FormControl>

                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="minimumTrades"
                            id=""
                            label="Minimum Trades *"

                            value={formIk.values.minimumTrades}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.minimumTrades && Boolean(formIk.errors.minimumTrades)}
                            helperText={formIk.touched.minimumTrades && formIk.errors.minimumTrades}
                        />
                    </FormControl>

                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="growth"
                            id=""
                            label="Growth *"

                            value={formIk.values.growth}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.growth && Boolean(formIk.errors.growth)}
                            helperText={formIk.touched.growth && formIk.errors.growth}
                        />
                    </FormControl>



                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="tradingPeriod"
                            id=""
                            label="Trading Period *"

                            value={formIk.values.tradingPeriod}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.tradingPeriod && Boolean(formIk.errors.tradingPeriod)}
                            helperText={formIk.touched.tradingPeriod && formIk.errors.tradingPeriod}
                        />
                    </FormControl>

                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="dailyLossAllowance"
                            id=""
                            label="Daily Loss Allowance *"

                            value={formIk.values.dailyLossAllowance}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.dailyLossAllowance && Boolean(formIk.errors.dailyLossAllowance)}
                            helperText={formIk.touched.dailyLossAllowance && formIk.errors.dailyLossAllowance}
                        />
                    </FormControl>

                    <div className="flex justify-center pt-5">

                        <Button
                            type="submit"
                            variant="outlined"
                        >
                            {formContent ? 'Update' : "Add Now"}
                        </Button>
                    </div>
                </form>
            </Box>
        </Modal>
        <ToastContainer />
    </>
}