import { deleteUser, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initialUsers = useLoaderData();

    const [users, setUsers] = useState(initialUsers);

    // delete user buttton functions 

    const handleDelete = (id) => {
        console.log('user id : ', id);

        const auth = getAuth();
        const user = auth.currentUser;






        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                // delete data  server to client fetch

                fetch(`http://localhost:3000/users/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount) {

                            // remainign data confirmations

                            const remainingData = users.filter(use => use._id !== id)
                            setUsers(remainingData)

                            //    delete user from firebase 
                            deleteUser(user).then(() => {

                            }).catch((error) => {
                                console.log(error.message);
                            });

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });


    }


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user.photo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">D</button>
                                <button className="btn btn-ghost btn-xs">E</button>
                                <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs">X</button>
                            </th>
                        </tr>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default Users;