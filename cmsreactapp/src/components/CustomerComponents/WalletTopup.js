import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Field, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../src/components/admin/common/Header";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from "@mui/icons-material/Edit";
export default function WalletTopup() {

    const isNonMobile = useMediaQuery("(min-width:600px)"); //

  const initValues =
     {
          id: "",
          addAmount: "",
          password: "",
          mobileNo: "",
          balance: 0,
          dob: "",
          courseName: "",
        }
    



  const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const mobRegex = /[789][0-9]{9}/;
    const addamtRegex = /^(?:[1-9]\d{2,3}|5000)$/
  const studentSchema = yup.object().shape({
    id: yup
      .string()
      .required("Required"),
    addAmount: yup
      .string()
      .matches(addamtRegex ,"Entered amount is not valid, ")
      .required("Required"),
    mobileNo: yup
      .string()
      .matches(mobRegex, "Entered Mobile number is invalid")
      .required("Required"),
    dob: yup.string().required("Required"),
    courseName: yup.string().required("Required"),
  });

  const handleFormSubmit = (values) => {
    console.log(values);
   
  };

  return (
    
        <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight={"100vh"}
    >
      <Box border={"1px solid black"} m={"20px"} p="20px" borderRadius={5}>
        <Header title={"Topup Wallet"} subtitle={"Totpu"}></Header>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initValues}
          validationSchema={studentSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Box
                width={"300px"}
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="number"
                    label="Id"
                    placeholder="PRN Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.id}
                    id="id"
                    error={!!touched.id && !!errors.id}
                    helperText={touched.id && errors.id}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="number"
                    label="Amount to be added"
                    placeholder="Amount should be between 100 to 1000"
                    
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.addAmount}
                    name="addAmount"
                    error={!!touched.addAmount && !!errors.addAmount}
                    helperText={touched.addAmount && errors.addAmount}
                    sx={{ gridColumn: "span 4" }}
                  />
                  
                  
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                     <span><EditIcon/>&nbsp;&nbsp;Update Balance</span>
                  </Button>
                </Box>
              </form>
            );
          }}
        </Formik>
      </Box>
    </Box>
    
  )
}
