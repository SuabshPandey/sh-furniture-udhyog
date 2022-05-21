import React, { useState } from 'react';
import Dashboard from '../admin/pages/Dashboard';
import LoginForm from './LoginForm';

const AdminUser = () => {

    const adminUser = {
        email:"admin@gmail.com",
        password:"admin123"
    }

    const [user , setUser] = useState({name: "" , email: ""});
    const [error, setError] = useState("")


    const Login = (details) => {
        console.log(details);

        if(details.email == adminUser.email && details.password == adminUser.password){
            console.log("Logged In");
            setUser({
                name:details.name,
                email: details.email
            })
        } else {
            console.log("Details do not match");
            setError("Details do not match");
        }

    }

    const Logout = () => {
        console.log("Logout");
        setUser({name:"" , email:""})
    }

    return (
        <div>
            { (user.email != "") ? (
                <div>
                    {/* <h2>Welcome <span>{user.name}</span> </h2> */}
                    <Dashboard />
                    {/* <Admin /> */}

                    <button className="btn btn-outline-dark" onClick={Logout} >Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error = {error} />
            )}

        </div>
    )
}

export default AdminUser
