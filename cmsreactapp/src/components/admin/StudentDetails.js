import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from 'react'
import { Box, IconButton, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";

export default function StudentDetails(props) {
    const takeAction=()=>{
        props.takeAction(props.student.id)
    }
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const card = (
          <CardContent sx={{background : colors.grey[700]}}>
            <Typography sx={{ fontSize: 14 }} color={`${colors.primary[100]}`} gutterBottom>
              Student Details: 
            </Typography>
            <Typography variant="h4" component="div">
              {props.student.name}
            </Typography>
            <Typography variant="h5">
              {/* {props.student.customerId}<br/> */}
              <br/>{props.student.email}<br/>
              {props.student.mobileNo}<br/><br/>
              {props.student.dob}<br/><br/>
              {props.student.courseName}<br/><br/>
              {'Balance: '}{props.student.balance}<br/>
            </Typography>
          </CardContent>
      );
    return (
        <Box sx={{ minWidth: 275 }} >
          <Card variant="outlined" >{card}</Card>
          <Button variant='contained'  onClick={takeAction}>{props.action==="display"?"Back to List":"Confirm Delete"}</Button>
        </Box>
      );
}