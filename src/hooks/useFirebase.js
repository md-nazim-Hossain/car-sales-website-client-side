import initFirebaseConfig from "../Firebase/firebase.init";
import {getAuth, GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut,
    createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile,sendPasswordResetEmail} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

initFirebaseConfig();

const useFirebase = () =>{

    const [user,setUser] = useState({});
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const [admin,setAdmin] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInGoogle = (history,redirect_url) =>{
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            const user = result.user;
            history.push(redirect_url);
            saveUsers(user.email,user.displayName,'PUT');
            setIsLoading(true);
        }).finally(() =>{
            setIsLoading(false);
        })
    }

    const signOutClick = () =>{
        signOut(auth)
        .then(result=>{
            setUser({});
            setError('');
        })
        .catch(e =>{
            setError(e.message);
        })
    }

    useEffect(() =>{
        const unsubsrciber = onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        })
        return unsubsrciber;
    },[auth]);

    // set data on the state
    const handleName = e =>{
        setName(e.target.value);
    }
    const handlePhone = e =>{
        setPhone(e.target.value);
    }
    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handlePassword = e =>{
        const pass = e.target.value;
        const err = 'Password Must have ';
        if(pass.length < 6){
            setError(err+'6 character length');
        }
        else{
            setPassword(e.target.value);
            setError('')
        } 
    }
    /// create user with firebase
    const handleRegister = (history) =>{
        createUserWithEmailAndPassword(auth,email,password)
       .then(result =>{
        handleUpdate();
        setUser(result.user);
        history.push('/');
        setError('');
        saveUsers(email,name,"POST");
        setIsLoading(true);
        
    }).catch(e =>{
        setError(e.message);
    }).finally(() =>{
        setIsLoading(false);
    })
    }

    const handleSignIn = (history,redirect_url) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user);
            history.push(redirect_url)
            setError('');
            setIsLoading(true);
        }).catch(e =>{
            setError(e.message)
        }).finally(() =>{
            setIsLoading(false);
        })
    }

    const handleUpdate =  () =>{
        updateProfile(auth.currentUser, {
            displayName:name,photoURL:user.photoURL ||"https://lh3.googleusercontent.com/a-/AOh14GjFagRswZECmhBi_rUYm9C4I-G6uGbq5BnS8wxLsg=s96-c",
            phoneNumber:phone
        }).then(()=>{
            const  newUserName = {...user,displayName:name}
            setUser(newUserName);
            setError('');
        })
        .catch(e =>{
            setError(e.message)
        })
    }

    const handlePasswordReset = () =>{
        sendPasswordResetEmail(auth, email)
        .then(result =>{
            setError(' ');
        }).catch(e =>{
            setError(e.message)
        })
    }

    // save user in db
    const saveUsers = (email,displayName,method) =>{
        const user = {email,displayName};
        
        fetch('http://localhost:5000/user',{
            method:method,
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert("User Successfully Created");
            }
        })
    }

    // check admin
    useEffect(()=>{
        fetch(`http://localhost:5000/user/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setAdmin(data.admin);
        });
    },[user.email]);

    return {
        user,
        error,
        isLoading,
        admin,
        setUser,
        setError,
        signInGoogle,
        signOutClick,
        handleUpdate,
        handleName,
        handlePhone,
        handleEmail,
        handlePassword,
        handleRegister,
        handleSignIn,
        handlePasswordReset,
        setIsLoading,
        saveUsers
    }
}

export default useFirebase;