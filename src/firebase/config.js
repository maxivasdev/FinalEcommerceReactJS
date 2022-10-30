import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAeAOex42l3lAphFlv70zK9-g-4gxtJRoc",
    authDomain: "finalreactcoder.firebaseapp.com",
    projectId: "finalreactcoder",
    storageBucket: "finalreactcoder.appspot.com",
    messagingSenderId: "547148167496",
    appId: "1:547148167496:web:abba6c46400db72d941b7d"

};

const app = initializeApp(firebaseConfig);

export default function iniFirebase() {
    return app
}


