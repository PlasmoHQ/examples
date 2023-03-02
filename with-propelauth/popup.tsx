import React from "react"
import {AuthProvider, useLogoutFunction, withAuthInfo, useHostedPageUrls} from "@propelauth/react";

export default function IndexPopup() {
    return (
        <AuthProvider authUrl={process.env.PLASMO_PUBLIC_AUTH_URL}>
            <Popup/>
        </AuthProvider>
    )
}

const Popup = withAuthInfo(function IndexPopup({isLoggedIn, user}) {
    const logoutFn = useLogoutFunction()
    const {getLoginPageUrl, getSignupPageUrl, getAccountPageUrl} = useHostedPageUrls()

    const openAccountPage = () => window.open(getAccountPageUrl())
    const openSignupPage = () => window.open(getSignupPageUrl())
    const openLoginPage = () => window.open(getLoginPageUrl())

    if (isLoggedIn) {
        return <div style={{minWidth: "250px", textAlign: "center"}}>
            <p>You are logged in as <b>{user.email}</b></p>
            <button onClick={openAccountPage}>Account</button>
            <button onClick={() => logoutFn(false)}>Logout</button>
        </div>
    } else {
        return <div style={{minWidth: "250px", textAlign: "center"}}>
            <button onClick={openSignupPage}>Signup</button>
            <button onClick={openLoginPage}>Login</button>
        </div>
    }
});