import React from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../components/utils/firebase/filebase'


const SignIn = () => {
    const logGoogleUser = async () => {
        // Dang nhap voi tai khoan google
        const { user } = await signInWithGooglePopup();
        // Tao tai khoan voi cac thong tin tu tai khoan google
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>Sign In Page Here</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    )
}

export default SignIn