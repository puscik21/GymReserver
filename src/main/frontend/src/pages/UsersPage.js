import React, {useState, Component, useEffect} from 'react';
import Header from "../components/Header";
import axios from 'axios';
import {Link, Route} from 'react-router-dom'
import TrainersPage from "./TrainersPage";

export default class UsersPage extends Component {
    render() {
        return (
            <div>
                <Header title={"Trainers"} />
                <Profiles userId={this.props.userId}/>
            </div>
        )
    }
}

const Profiles = (props) => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        let path = 'http://localhost:8080/trainer/';
        axios.get(path)
            .then(res => {
                console.log(res);
                setProfiles(res.data);
            });
    }

    // return (
    //     <UserData profile={profile}/>
    // )

    return profiles.map((profile, index) => {
        return (
            // <TrainerData profile={profile}/>
            <Route path="/trainers/" render={props => (
                <React.Fragment>
                    <TrainerData profile={profile} index={1}/> {/* TODO in future based on logged user */}
                </React.Fragment>
            )}/>
        )
    })
}

const TrainerData = (props) => {
    const {profile, index} = props;
    return (
        <div>
            <h1><Link to={index} >{profile.name}</Link></h1>
            <p>{profile.id}</p>
            <p>{profile.surname}</p>
            <p>{profile.createDate}</p>
        </div>
    )
}
