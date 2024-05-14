import { MyAxios } from "./Constants";

export const signUP = (data:{username:String, password:String}) => {
     return MyAxios.post('/api/SignUp',data).then((response) => response.data);
}

export const login = (data:{username:String, password:String}) => {
     return MyAxios.post('/api/Login',data).then((response) => response.data);
}

