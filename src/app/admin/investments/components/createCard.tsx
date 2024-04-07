import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ReactNode } from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from "axios"
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IconButton, InputLabel, MenuItem, Select } from "@mui/material";
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
    ROI: yup
        .string()
        .required('ROI is required'),
    minimum: yup
        .string()
        .required('Minimum is required'),
    maximum: yup
        .string()
        .required('Maximum is required'),
    payout: yup
        .string(),

    period: yup
        .string()
        .required('Period Trades is required'),

})
export default function CreateCard({ isOpen, handleClose, formContent }: any) {
    let formIk
    let initialValues = () => {
        let values
        if (formContent) {
            values = {
                name: formContent.name as ReactNode,
                ROI: formContent.ROI as ReactNode,
                minimum: formContent.minimum as ReactNode,
                maximum: formContent.maximum as ReactNode,
                payout: '',
                period: formContent.period as ReactNode,
            }
        } else {
            values = {
                name: '',
                ROI: '',
                minimum: '',
                maximum: '',
                payout: '',
                period: '',
            }
        }
        return values
    }


    formIk = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            toast("Loading...")
            let newUser
            if (formContent) {
                newUser = await axios.put(`/admin/investments/api?id=${formContent._id}`, values)
            } else {
                newUser = await axios.post('/admin/investments/api', values)
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
                        {formContent ? 'Update Plan' : "Add New Plan"}
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
                            name="ROI"
                            label="ROI *"
                            value={formIk.values.ROI}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.ROI && Boolean(formIk.errors.ROI)}
                            helperText={formIk.touched.ROI && formIk.errors.ROI}
                        />
                    </FormControl>


                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full text-white">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="minimum"
                            label="Minimum *"
                            value={formIk.values.minimum}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.minimum && Boolean(formIk.errors.minimum)}
                            helperText={formIk.touched.minimum && formIk.errors.minimum}
                        />
                    </FormControl>



                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="maximum"
                            id="maximum"
                            label="Maximum *"

                            value={formIk.values.maximum}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.maximum && Boolean(formIk.errors.maximum)}
                            helperText={formIk.touched.maximum && formIk.errors.maximum}
                        />
                    </FormControl>

                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
                        <InputLabel>Payout</InputLabel>
                        <Select
                            label="Payout"
                            name="payout"
                            value={formIk.values.payout}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.payout && Boolean(formIk.errors.payout)}
                        >
                            <MenuItem value={'Daily'}>Daily</MenuItem>
                            <MenuItem value={'Weekly'}>Weekly</MenuItem>
                            <MenuItem value={'Monthly'}>Monthly</MenuItem>
                            <MenuItem value={'Yearly'}>Yearly</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ marginTop: 2, minWidth: 120 }} className="w-full">
                        <TextField
                            className="outline-none border-none"
                            type="text"
                            name="period"
                            id=""
                            label="Period (in days)"
                            placeholder="7"
                            value={formIk.values.period}
                            onChange={formIk.handleChange}
                            onBlur={formIk.handleBlur}
                            error={formIk.touched.period && Boolean(formIk.errors.period)}
                            helperText={formIk.touched.period && formIk.errors.period}
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