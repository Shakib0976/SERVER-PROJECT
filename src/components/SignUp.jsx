import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const SignUp = () => {
    const { signUp } = use(AuthContext);



    const handleSignUp = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        signUp(email, password).then((userCredential) => {

            const user = userCredential.user;
            console.log(user);


            const userInfo = {
                email,
                lastSignInTime: user?.metadata?.lastSignInTime
            }

            // update last signin to database 
            fetch('http://localhost:3000/users', {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })



        })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }
    return (
        <div className="card bg-base-100 mx-auto max-w-sm  shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl my-5 text-center font-bold">SignUp now!</h1>
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">SingUP</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;