import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Signin = () => {
    const { createUser } = use(AuthContext);

    const handleSignin = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...userInfo } = Object.fromEntries(formData.entries())

        console.log(email, password, userInfo);




        //    firebase user create

        createUser(email, password, userInfo)
            .then((data) => {
                console.log(data);

                // login data post on server

                fetch('http://localhost:3000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.insertedId) {
                            Swal.fire({
                                title: "Data added success full",
                                icon: "success",
                                draggable: true
                            });
                        }
                        console.log(data);
                    }



                    )
            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);
            });


    }



    return (

        <div className="card bg-base-100 mx-auto max-w-sm  shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl my-5 text-center font-bold">Signin now!</h1>
                <form onSubmit={handleSignin} className="fieldset">
                    <label className="label">Name</label>
                    <input name='name' type="text" className="input" placeholder="Name" />

                    <label className="label">Phone</label>
                    <input name='phone' type="text" className="input" placeholder="Phone Number" />

                    <label className="label">Photo URL</label>
                    <input name='photo' type="text" className="input" placeholder="Photo_UrL" />
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

export default Signin;