
export const isLoggedIn = () => {
    let data = localStorage.getItem("data");
    if(data != null){
        return true;
    }
    else{
        return false;
    }
};

export const doLogin = (data:object, next:any) => {
    localStorage.setItem("data",JSON.stringify(data));
    next();
};

export const doLogout = () => {
    localStorage.removeItem("data");
};

export const getCurrentUserDetails = () => {
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")!).user;
    }
    else{
        return false;
    }
};

export const getToken = () => {
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")!).token;
    }
    else{
        return false;
    }
};


