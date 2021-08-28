
import React, { useState } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { NavLink, useHistory } from "react-router-dom"
import "./TeacherRegister.css"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TeacherRegister = () => {
    const history = useHistory();

    const errorAlert = () => {
        toast.error( ' Registration Failed ! Try Again ', {
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

    const successAlert = () => {
        toast.success( 'Registered SuccessFully !!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,

        } );
    }

    const [teacher, setTeacher] = useState( {
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
        setTeacher( { ...teacher, [name]: value } );
        console.log( e )
    }

    const PostData = async ( e ) => {
        e.preventDefault();
        const { firstName, lastName, email, phone, password, cpassword } = teacher;
        const res = await fetch( "/facultyregister", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {
                firstName, lastName, email, phone, password, cpassword
            } )
        } );
        const data = await res.json();

        if ( res.status === 422 || !data ) {
            // window.alert( "Invalid Credentials" )
            errorAlert();
            console.log( Error );
        }
        else if ( res.status === 421 || !data ) {
            // window.alert( "Mail Already Exists" );
            errorExists();
            console.log( Error );
        }
        else if ( res.status === 423 || !data ) {
            // window.alert( "Mail Already Exists" );
            mismatchPassword();
            console.log( Error );
        }
        else {
            // window.alert( "Registration Successful" );

            successAlert();
            console.log( data );
            // history.push( "/facultylogin" )
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
                                        <h2 className="text-uppercase text-center mb-5">Create Faculty account</h2>

                                        <form method="POST">

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" id="" class="form-control"
                                                        value={teacher.firstName}
                                                        onChange={handleInputs}
                                                        name="firstName" />
                                                    <label class="form-label" for="form3Example1c">First Name</label>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-users fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" id="" class="form-control"
                                                        value={teacher.lastName}
                                                        onChange={handleInputs}
                                                        name="lastName"
                                                    />
                                                    <label class="form-label" for="form3Example1c">Last Name</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="email" id="" class="form-control"
                                                        value={teacher.email}
                                                        onChange={handleInputs}
                                                        name="email" />
                                                    <label class="form-label" for="form3Example3c">Your Email</label>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-phone fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="number" id="" class="form-control"
                                                        value={teacher.phone}
                                                        onChange={handleInputs}
                                                        name="phone"
                                                    />
                                                    <label class="form-label" for="form3Example3c">Your Phone</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="password" id="" class="form-control"
                                                        value={teacher.password}
                                                        onChange={handleInputs}
                                                        name="password" />
                                                    <label class="form-label" for="form3Example4c">Password</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" class="form-control"
                                                        value={teacher.cpassword}
                                                        onChange={handleInputs}
                                                        name="cpassword"
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

                                            <p className="text-center text-muted mt-4 mb-0">Have already an account? <NavLink to="/facultylogin" class="fw-bold text-body"><u className="text-decoration">Login here</u></NavLink></p>
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

export default TeacherRegister
