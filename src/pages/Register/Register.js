import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjThree, homeObjFour } from './Data';
import RegisterPage from '../../components/RegisterPage/RegisterPage'

function Register() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <RegisterPage />

    </>
  );
}

export default Register;
