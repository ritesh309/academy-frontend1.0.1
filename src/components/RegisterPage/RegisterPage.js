
import React, { useState } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { NavLink, useHistory } from "react-router-dom"

import "./RegisterPage.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {

    const history = useHistory();

    const errorAlert = () => {
        toast.error( ' Registration  Failed ! Try Again ', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        } );
    }

    const errorExists = () => {
        toast.error( 'Mail Already Registered', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        } );
    }

    const mismatchPassword = () => {
        toast.error( 'Password Does not match!', {
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
        toast.error( 'Fill all the fields!', {
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
        toast.success( 'Registered SuccessFully !!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,

        } );
    }

    const [student, setStudent] = useState( {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    } );
    let name, value;

    const handleInputs = ( e ) => {
        name = e.target.name;
        value = e.target.value;
        setStudent( { ...student, [name]: value } );
        console.log( e )
    }

    const PostData = async ( e ) => {
        e.preventDefault();
        const { firstName, lastName, email, phone, password, cpassword } = student;
        const res = await fetch( "/studentregister", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {
                firstName, lastName, email, phone, password, cpassword
            } )
        } );

        const data = await res.json();

        if ( res.status === 422 || !data ) {
            // window.alert( "Error" )
            errorAlert();
            console.log( "Error" );
        }
        else if ( res.status === 421 || !data ) {
            errorFields();
            console.log( Error );
        }
        else if ( res.status === 424 || !data ) {

            mismatchPassword();
            console.log( Error );
        }
        else if ( res.status === 423 || !data ) {
            // window.alert( "Mail Already Exists" );
            errorExists();
            console.log( Error );
        }
        else {
            // window.alert( "REgistered" );
            successAlert();
            console.log( data );
            // history.push( "/login" )
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
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                        <form>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" id="" class="form-control"
                                                        name="firstName"
                                                        value={student.firstName}
                                                        onChange={handleInputs}
                                                    />
                                                    <label class="form-label" for="form3Example1c">First Name</label>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-users fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" id="" class="form-control"
                                                        name="lastName"
                                                        value={student.lastName}
                                                        onChange={handleInputs}
                                                    />
                                                    <label class="form-label" for="form3Example1c">Last Name</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="email" id="" class="form-control"
                                                        name="email"
                                                        value={student.email}
                                                        onChange={handleInputs} />
                                                    <label class="form-label" for="form3Example3c">Your Email</label>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-phone fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="number" id="form3Example3c" class="form-control"
                                                        name="phone"
                                                        value={student.phone}
                                                        onChange={handleInputs}
                                                    />
                                                    <label class="form-label" for="form3Example3c">Your Phone</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c" class="form-control"
                                                        name="password"
                                                        value={student.password}
                                                        onChange={handleInputs} />
                                                    <label class="form-label" for="form3Example4c">Password</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" class="form-control"
                                                        name="cpassword"
                                                        value={student.cpassword}
                                                        onChange={handleInputs}
                                                    />
                                                    <label class="form-label" for="form3Example4cd">Repeat your password</label>
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="form2Example3cg"
                                                />
                                                <label className="form-check-label" for="form2Example3g">
                                                    I agree all statements in <a href="#!" className="text-body"><u className="text-decoration">Terms of service</u></a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="button" onClick={PostData} className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                            </div>

                                            <p className="text-center text-muted mt-3 mb-0">Have already an account? <NavLink to="/login" class="fw-bold text-body"><u className="text-decoration">Login here</u></NavLink></p>

                                            <p className="text-center text-muted mt-3 mb-0">Register as Faculty? <NavLink to="/facultyregister" class="fw-bold text-body"><u className="text-decoration">Register here</u></NavLink></p>
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

export default RegisterPage
