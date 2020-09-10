import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button, Container} from "react-bootstrap";
import axios from 'axios'

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, hoursNumber, mon, tue, wed, thu, fri, sat, sun) {
    return {name, hoursNumber, mon, tue, wed, thu, fri, sat, sun};
}

const rows = [
    createData('8:00 - 10:00', 0, 1, 2, 1, null, 1, null, null),
    createData('10:00 - 12:00', 1,1, 2, 1, null, 1, null, null),
    createData('12:00 - 14:00', 2,1, 2, 1, null, 1, null, null),
    createData('14:00 - 16:00', 3,1, 2, 1, null, 1, null, null),
    createData('16:00 - 18:00', 4,1, 2, 1, null, 1, null, null),
    createData('18:00 - 20:00', 5,1, 2, 1, null, 1, null, null),
    createData('20:00 - 22:00', 6,1, 2, 1, null, 1, null, null)
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

// TODO for now user is static - but in future take userId from session
const registerTraining = (hoursNumber, dayNumber, userId) => {
    const reservation = {
        userId: 1,
        trainerId: 9,
        duration: 120,
        hoursId: hoursNumber,
        dayId: dayNumber
    }
    // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    console.log("hoursNumber: " + reservation.hoursNumber)
    console.log("dayNumber: " + reservation.dayNumber)
    axios.post('http://localhost:8080/reservation/', reservation).then(res => {
        console.log(res)
    }).catch(res => console.log(res))

    console.log("" + hoursNumber + dayNumber + userId)
}

const getReservationStyledInfo = (hoursNumber, dayNumber, userId) => {
    if (userId != null) {
        return (
            <StyledTableCell align="left">
                <Button onClick={() => registerTraining(hoursNumber, dayNumber, userId)} className="registerButton" variant="dark" size="sm">Register</Button>
            </StyledTableCell>
        )
    } else {
        return (
            <StyledTableCell align="left">
                <Button className="registerButton" variant="outline-danger disabled" size="sm" style={{outline: 'none', boxShadow: 'none', cursor: 'default'}}>Reserved</Button>
            </StyledTableCell>
        )
    }
}

function TrainingRegistrationPage() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Hours</StyledTableCell>
                        <StyledTableCell>Monday</StyledTableCell>
                        <StyledTableCell>Tuesday</StyledTableCell>
                        <StyledTableCell>Wednesday</StyledTableCell>
                        <StyledTableCell>Thursday</StyledTableCell>
                        <StyledTableCell>Friday</StyledTableCell>
                        <StyledTableCell>Saturday</StyledTableCell>
                        <StyledTableCell>Sunday</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            {getReservationStyledInfo(row.hoursNumber, 0, row.mon)}
                            {getReservationStyledInfo(row.hoursNumber, 1, row.tue)}
                            {getReservationStyledInfo(row.hoursNumber, 2, row.wed)}
                            {getReservationStyledInfo(row.hoursNumber, 3, row.thu)}
                            {getReservationStyledInfo(row.hoursNumber, 4, row.fri)}
                            {getReservationStyledInfo(row.hoursNumber, 5, row.sat)}
                            {getReservationStyledInfo(row.hoursNumber, 6, row.sun)}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TrainingRegistrationPage