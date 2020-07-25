import React, {useState, Component, useEffect} from 'react';
import Header from "../components/Header";
import PropTypes from 'prop-types';
import axios from 'axios';

export default class UserPage extends Component {
    render() {
        return (
            <div>
                <UserProfile userId={this.props.userId}/>
            </div>
        )
    }
}

const UserProfile = (props) => {
    const [userProfile, setUserProfile] = useState([]);

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = () => {
        let path = 'http://localhost:8080/user/' + props.userId;
        axios.get(path)
            .then(res => {
                console.log(res);
                setUserProfile(res.data);
            });
    }

    return (
        <UserData userProfile={userProfile}/>
    )
}

const UserData = (props) => {
    const userProfile = props.userProfile;
    return (
        <div>
            <Header title={userProfile.name}/>
            <p>{userProfile.id}</p>
            <p>{userProfile.surname}</p>
            <p>{userProfile.createDate}</p>
        </div>
    )
}

UserPage.propTypes = {
    userId: PropTypes.number.isRequired
}
