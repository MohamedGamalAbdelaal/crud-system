import React, { useState } from 'react';
import style from './AddUser.module.css'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const AddUser = () => {
    const [userId, setuserId] = useState()
    const navigate= useNavigate()
     function addUser(values) {
        console.log(values);
        
         axios.post('https://dummyapi.io/data/v1/user/create',values,{
           headers:{"app-id":"64fc4a747b1786417e354f31"}
        }).then(function(res){console.log(res.data.id)
            setuserId(res.data.id)
            console.log(userId)
            localStorage.setItem('id',res.data.id)
            navigate('/desktop1')
        })
        .catch(function(error){console.log(error);
        })
        
    }
    const regFormik=useFormik(
        {
            initialValues:{
                firstName:"",
                lastName:"",
                email:"",
                phone:""
            },
            onSubmit:addUser
        }
    )
    return <>
    <div className={`${style.mainSection}`}>
        <div className={`${style.formSection}`}>
            <div className="userSection d-flex justify-content-center align-items-center mt-5">
            <div className={`${style.userImg}`}></div>
            </div>
            <p className='my-3 text-center'>Upload Photo</p>
            
            <form onSubmit={regFormik.handleSubmit}>
                <div className="row">
                    <div className="col-md-6 col-12">
                    <input id='firstName' type="text" placeholder='First Name' className='form-control w-75 m-5' value={regFormik.values.firstName} onChange={regFormik.handleChange} onBlur={regFormik.handleBlur}/>
                    <input id='lastName'type="text" placeholder='Last Name'className='form-control w-75 m-5' value={regFormik.values.lastName} onChange={regFormik.handleChange} onBlur={regFormik.handleBlur}/>
                    <button className='btn btn-secondary px-5 py-2 rounded-5 m-5'>Cancel</button>
                    </div>
                    <div className="col-md-6 col-12">
                    <input id='phone'  type="text" placeholder='Phone Number'className='form-control w-75 m-5' value={regFormik.values.phone} onChange={regFormik.handleChange} onBlur={regFormik.handleBlur}/>
                    <input id='email' type="text" placeholder='Email' className='form-control w-75 m-5' value={regFormik.values.email} onChange={regFormik.handleChange} onBlur={regFormik.handleBlur}/>
                    <button className='btn btn-primary px-5 py-2 rounded-5 m-5 ' type='submit'>Save</button>
                    </div>
                </div>
                
            </form>
        </div>
    </div>
    </>
}

export default AddUser;
