import React, {useState, useEffect} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button, Container, Toast, Row, Col} from "react-bootstrap";
import axios from 'axios'
import {Alert} from "@material-ui/lab";

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

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

function TrainingRegistrationPage() {
    const classes = useStyles();
    const [registrationData, setRegistrationData] = useState([])
    const [showRegistrationResult, setShowRegistrationResult] = useState(false);
    const [registrationResult, setRegistrationResult] = useState('success');
    const [dataIsLoaded, setDataIsLoaded] = useState(true)

    function createData(name, hoursNumber, mon, tue, wed, thu, fri, sat, sun) {
        return {name, hoursNumber, mon, tue, wed, thu, fri, sat, sun};
    }

    const rows = [
        createData('8:00 - 10:00', 0, 1, 2, 1, null, 1, null, null),
        createData('10:00 - 12:00', 1, 1, 2, 1, null, 1, null, null),
        createData('12:00 - 14:00', 2, 1, 2, 1, null, 1, null, null),
        createData('14:00 - 16:00', 3, 1, 2, 1, null, 1, null, null),
        createData('16:00 - 18:00', 4, 1, 2, 1, null, 1, null, null),
        createData('18:00 - 20:00', 5, 1, 2, 1, null, 1, null, null),
        createData('20:00 - 22:00', 6, 1, 2, 1, null, 1, null, null)
    ];

    ////
    const loadRegistrationData = () => {
        let path = 'http://localhost:8080/reservation/trainer/week/9'
        axios.get(path)
            .then(res => {
                setRegistrationData(res.data.list);
            });
    }

    useEffect(loadRegistrationData, [])


// TODO for now user is static - but in future take userId from session
    const registerTraining = (hoursNumber, dayNumber, userId) => {
        const reservation = {
            userId: 1,      // TODO take userId from session
            trainerId: 9,   // TODO take trainerId from path
            duration: 120,  // TODO remove duration
            hoursId: hoursNumber,
            dayId: dayNumber
        }

        console.log("hoursNumber: " + reservation.hoursId)
        console.log("dayNumber: " + reservation.dayId)
        axios.post('http://localhost:8080/reservation/', reservation).then(res => {
            if (res.status) {
                setShowRegistrationResult(true)
                setRegistrationResult('success')
                loadRegistrationData()
            }
        }).catch(() => {
            setShowRegistrationResult(true)
            setRegistrationResult('error')
        })
    }

    const deleteReservation = (reservationId) => {
        const path = 'http://localhost:8080/reservation/' + reservationId
        axios.delete(path).then(res => {
            console.log(res)
            console.log('DELETED: ' + reservationId)
        })
    }
}

    const getReservationStyledInfo = (hoursNumber, dayNumber, userId) => {
        if (userId == null) {
            return (
                <StyledTableCell align="left">
                    <Button onClick={() => registerTraining(hoursNumber, dayNumber, userId)} className="registerButton"
                            variant="dark" size="sm">Register</Button>
                </StyledTableCell>
            )
        } else {
            return (
                <StyledTableCell align="left">
                    <Button onClick={() => deleteReservation(reservationId) className="registerButton" variant="outline-danger disabled" size="sm">Reserved</Button>
                </StyledTableCell>
            )
        }
    }

    const ResultMessage = () => {
        setTimeout(() => {
            setShowRegistrationResult(false)
        }, 3000)
        if (registrationResult === 'success') {
            return (
                <Alert style={{marginTop: '2em'}} variant="filled" severity="success">
                    Successful registration
                </Alert>
            )
        } else {
            return (
                <Alert style={{marginTop: '2em'}} variant="filled" severity="error">
                    Oups! Something went wrong
                </Alert>
            )
        }
    }

    return (
        <div>
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
                        {registrationData.map((row) => (
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
            {showRegistrationResult ? <ResultMessage/> : null}
        </div>
    );
}

export default TrainingRegistrationPage