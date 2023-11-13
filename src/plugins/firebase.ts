import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAGamlp5dfmy_UKjLrf2Etc-B5t_rNra6M",
    authDomain: "casa-do-leo.firebaseapp.com",
    projectId: "casa-do-leo",
    storageBucket: "casa-do-leo.appspot.com",
    messagingSenderId: "73895808425",
    appId: "1:73895808425:web:3767603736f7763eaf88b8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    app,
    auth,
};
