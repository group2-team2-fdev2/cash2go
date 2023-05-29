import React from 'react'

const Validation = (values) => {

    leterrors={};

    if(!values.company_id){
        errors.company_id="Id is required"
    }
    if(!values.email){
        errors.email="Email is required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid"
    }
  return errors;
};

export default Validation;
