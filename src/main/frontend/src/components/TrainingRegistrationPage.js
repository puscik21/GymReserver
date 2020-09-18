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
import {useParams} from "react-router-dom";

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
    let {id} = useParams()

    const loadRegistrationData = () => {
        let path = 'http://localhost:8080/reservation/trainer/week/' + id
        axios.get(path)
            .then(res => {
                setRegistrationData(res.data.list);
            });
    }

    useEffect(loadRegistrationData, [])

// TODO for now user is static - but in future take userId from session
    const registerTraining = (hoursNumber, dayNumber) => {
        const userId = localStorage.getItem('user')
        const reservation = {
            userId: userId,      // TODO take userId from session
            trainerId: id,
            duration: 120,  // TODO remove duration
            hoursId: hoursNumber,
            dayId: dayNumber
        }

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
            if (res.status) {
                setShowRegistrationResult(true)
                setRegistrationResult('deleteSuccess')
                loadRegistrationData()
            }
        }).catch(() => {
            setShowRegistrationResult(true)
            setRegistrationResult('error')
        })
    }

    const getReservationStyledInfo = (hoursNumber, dayNumber, resAndUserIds) => {
        if (resAndUserIds == null) {
            return (
                <StyledTableCell align="left">
                    <Button onClick={() => registerTraining(hoursNumber, dayNumber)} className="registerButton"
                            variant="dark" size="sm">Register</Button>
                </StyledTableCell>
            )
        } else {
            const reservationId = resAndUserIds[0]
            const userId = resAndUserIds[1]
            // TODO if userId is same as logged user then change it style
            // TODO if userId is same as logged user only then he can remove it
            return (
                <StyledTableCell align="left">
                    <Button onClick={() => deleteReservation(reservationId)} className="registerButton"
                            variant="outline-danger disabled" size="sm">Reserved</Button>
                </StyledTableCell>
            )
        }
    }

    const createAlert = (severity, message) => {
        return <Alert style={{marginTop: '2em'}} variant="filled" severity={severity}>{message}</Alert>
    }

    const ResultMessage = () => {
        setTimeout(() => {
            setShowRegistrationResult(false)
        }, 3000)
        if (registrationResult === 'success') {
            return createAlert('success', 'Successful registration!')
        } else if (registrationResult === 'deleteSuccess') {
            return createAlert('success', 'Successful removal of reservation!')
        } else {
            return createAlert('error', 'Oups! Something went wrong')
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
                                {getReservationStyledInfo(row.hoursNumber, 0, row.day0)}
                                {getReservationStyledInfo(row.hoursNumber, 1, row.day1)}
                                {getReservationStyledInfo(row.hoursNumber, 2, row.day2)}
                                {getReservationStyledInfo(row.hoursNumber, 3, row.day3)}
                                {getReservationStyledInfo(row.hoursNumber, 4, row.day4)}
                                {getReservationStyledInfo(row.hoursNumber, 5, row.day5)}
                                {getReservationStyledInfo(row.hoursNumber, 6, row.day6)}
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