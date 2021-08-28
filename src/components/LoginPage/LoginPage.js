import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import "./LoginPage.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {

    const history = useHistory();


    const errorAlert = () => {
        toast.error( ' Login  Failed ! Invalid Credentials ', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        } );
    }

    const errorFields = () => {
        toast.error( ' Login  Failed ! Fill All Fields', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        } );
    }

    const successAlert = () => {
        toast.success( 'Login SuccessFull !!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,

        } );
    }

    const [email, setEmail] = useState( "" );

    const [password, setPassword] = useState( "" );

    const loginStudent = async ( e ) => {

        e.preventDefault();

        const res = await axios.post( "/studentlogin", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {
                email, password
            } ),


        } );

        const data = res.json();

        if ( res.status === 422 ) {

            errorAlert();
            console.log( "Invalid Credentials" )
        }
        else if ( res.status === 421 || !data ) {
            errorFields();
            console.log( "Invalid Credentials" )
        }
        else {

            successAlert();
            // window.alert( "Logged In Successful" );
            // console.log( data )
            history.push( "/studentdashboard" )
        }
    }

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}

            />
            <section class="vh-100 bg-image" >
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card">
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Login As Student</h2>

                                        <form method="POSt">
                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="email" id="" class="form-control"
                                                        name="email"
                                                        value={email}
                                                        onChange={( e ) => { setEmail( e.target.value ) }} />
                                                    <label class="form-label" for="form3Example3c">Your Email</label>
                                                </div>
                                            </div>


                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="password" id="" class="form-control"
                                                        name="password"
                                                        value={password}
                                                        onChange={( e ) => { setPassword( e.target.value ) }} />
                                                    <label class="form-label" for="form3Example4c">Password</label>
                                                </div>
                                            </div>





                                            <div className="d-flex justify-content-center">
                                                <button type="button" onClick={loginStudent} className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                                            </div>

                                            <p className="text-center text-muted mt-4 mb-0">Are you Faculty? <NavLink to="/facultylogin" class="fw-bold text-body"><u className="text-decoration">Login Here</u></NavLink></p>

                                            <p className="text-center text-muted mt-3 mb-0">I am Not Registered ? <NavLink to="/register" class="fw-bold text-body"><u className="text-decoration">Register here</u></NavLink></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginPage
