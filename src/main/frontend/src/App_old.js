import React from 'react';
import './App.css';
import TrainersPage from "./pages/TrainersPage";
import UsersPage from "./pages/UsersPage";
import { BrowserRouter, Route } from 'react-router-dom';

export default function App_old() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/" render={props => (
                    <React.Fragment>
                        <TrainersPage userId={1}/> {/* TODO in future based on logged user */}
                    </React.Fragment>
                )}/>
                {/*<Route path="/trainers" component={ UsersPage } />*/}
                <Route path="/trainers" render={props => (
                    <React.Fragment>
                        <UsersPage />
                    </React.Fragment>
                )}/>
            </div>
        </BrowserRouter>
    );
}




// ***** To be removed *****
// const UserProfiles = () => {
//     const [userProfiles, setUserProfiles] = useState([]);
//
//     useEffect(() => {
//         fetchUserProfiles();
//     }, []);
//
//     const fetchUserProfiles = () => {
//         axios.get('http://localhost:8080/user')
//             .then(res => {
//                 console.log(res);
//                 setUserProfiles(res.data);
//             });
//     }
//
//     return userProfiles.map((userProfile, index) => {
//         return (
//             <div key={index}>
//                 <h1>{userProfile.name}</h1>
//                 <p>{userProfile.id}</p>
//                 <p>{userProfile.surname}</p>
//                 <p>{userProfile.createDate}</p>
//             </div>
//         )
//     })
// }