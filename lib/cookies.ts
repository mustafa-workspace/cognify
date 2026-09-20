import Cookies from "js-cookie";

export const setAuthCookies = (tokens:string) => {
    Cookies.set("Auth_Token",tokens,{expires:7,path:"/"});
}

export const removeAuthCookies = () => {
    Cookies.remove("Auth_Token", { path: "/" });
}

export const getAuthCookies = () => {
    return Cookies.get("Auth_Token")
}