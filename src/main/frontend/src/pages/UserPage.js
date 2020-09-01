import React, {useState, Component, useEffect} from 'react';
import Header from "../components/Header";
import PropTypes from 'prop-types';
import axios from 'axios';
import User from "../components/User";

export default function UserPage() {
    const [usersProfiles, setUsersProfiles] = useState(null);
    const [userData, setUserData] = useState([])

    // first loading - user data load
    useEffect(() => {
        let path = 'http://localhost:8080/user/'
        axios.get(path)
            .then(res => {
                setUserData(res.data)
            })
    }, [])

    useEffect(() => {
        const profiles = userData.map(user => {
            const {id, name, surname, password, createDate, lastLogin} = user
            return <User key={id} name={name} surname={surname} password={password} createDate={createDate} lastLogin={lastLogin}/>
        })

        console.log('tutaj')
        console.log(profiles)
        setUsersProfiles(profiles)
        console.log("test to tutaj: " + usersProfiles)
    }, [userData]);

    return (
        <div>
            { usersProfiles }
        </div>
    )
}







//------------------------------
// export default class UserPage extends Component {
//     render() {
//         return (
//             <div>
//                 <UserProfile userId={this.props.userId}/>
//             </div>
//         )
//     }
// }
//
// const UserProfile = (props) => {
//     const [userProfile, setUserProfile] = useState([]);
//
//     useEffect(() => {
//         getUserData();
//     }, []);
//
//     const getUserData = () => {
//         // console.log("userId = " + props.userId)
//         // let path = 'http://localhost:8080/user/' + props.userId;
//         let path = 'http://localhost:8080/user/1'
//         axios.get(path)
//             .then(res => {
//                 console.log(res)
//                 setUserProfile(res.data)
//             });
//     }
//
//     return (
//         <UserData userProfile={userProfile}/>
//     )
// }
//
// const UserData = (props) => {
//     const userProfile = props.userProfile;
//     return (
//         <div>
//             <Header title={userProfile.name}/>
//             <p>{userProfile.id}</p>
//             <p>{userProfile.surname}</p>
//             <p>{userProfile.createDate}</p>
//         </div>
//     )
// }
//
// UserPage.propTypes = {
//     userId: PropTypes.number.isRequired
// }
