import { useState } from "react";
import { login } from "../api/UserService";
import Base from './Base';
import { doLogin } from "../auth";

function Login(){

    const [value,setValue] = useState({username:"",password:""});

    const handleChange = (field : string) => (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue({...value, [field] : event.currentTarget.value});
    }

    const handleClick = (event:any) =>{
        event.preventDefault();
        login({username:value.username, password:value.password})
        .then( (jwtToken:any) => doLogin(jwtToken,() => {
            console.log("User saved in local storage");
        }) )
        .catch((error) => console.log(error));
        setValue({username:"",password:""});
    }

    return(
        <Base>
            <div className="w-25 border border-secondary p-4 text-bg-dark position-absolute top-50 start-50 translate-middle">
                <form className=" --bs-primary">
                    <div className="form-floating mb-4 p-2">
                        <input type="text" className="form-control text-bg-dark border-secondary" id="username" value={value.username} onChange={handleChange("username")}/>
                        <label htmlFor="username" className="border border-0">User Name</label>
                    </div>
                    <div className="form-floating mb-4 p-2">
                        <input type="password" className="form-control text-bg-dark border-secondary" id="password" value={value.password} onChange={handleChange("password")}/>
                        <label htmlFor="password" className="border border-0">Password</label>
                    </div>
                    <button type="submit" className="position-absolute bottom-0 start-50 translate-middle-x btn bg-secondary text-white border-secondary rounded" onClick={handleClick}>Login</button>
                </form>
            </div>
        </Base> 
    )
}

export default Login;