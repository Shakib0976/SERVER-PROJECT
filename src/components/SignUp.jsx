import React from 'react';

const SignUp = () => {

    const handleSignUp = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

    }
    return (
        <div className="card bg-base-100 mx-auto max-w-sm  shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl my-5 text-center font-bold">Signin now!</h1>
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;