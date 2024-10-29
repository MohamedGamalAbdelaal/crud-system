import React, { useEffect, useState } from 'react';
import style from './Desktop1.module.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { data } from 'autoprefixer';
const Desktop1 = () => {
    const [usersdata, setusersdata] = useState(null)
    const [counter, setcounter] = useState(0)
    const navigate=useNavigate()
    async function getusers(){
       const{data}=await  axios.get(`https://dummyapi.io/data/v1/user?page=${counter}&limit=5`,{
            headers:{"app-id":"64fc4a747b1786417e354f31"}
        })
        
        setusersdata(data.data)
        console.log(data.data);
        
    }
    async function deleteuser(id) {
      const res=  await axios.delete(`https://dummyapi.io/data/v1/user/${id}`,{
            headers:{"app-id":"64fc4a747b1786417e354f31"}
      })
      getusers()
    }
    function increeseCounter(){
        
         setcounter(prevCountr => prevCountr + 1)
         console.log(counter);
    }
    function decreeseCounter(){
        setcounter(prevCountr => prevCountr - 1)
        console.log(counter);
        
   }
    useEffect(() => {
      getusers()    
      
    }, [])
    
    
    return <>
    
      <div  className={`${style.mainSection}`}>
         <div className={`${style.formSection}`}>
             <input placeholder='Search' type="text" className={'form-control mx-auto w-75 rounded-5 my-5' }/>
             <Link to={'/addUser'}><button  className='btn btn-info rounded-5 p-3 text-white ms-5'>  <i class="fa-solid fa-plus"></i> Add New Contact</button></Link>
             
                         {usersdata?
                          <div className="row mb-10">
                              {usersdata.map((items)=><>
                                <div className="col-6 d-flex justify-content-center align-items-center">
                            <div className="useritems">
                                <div className={style.userImage}>
                              <img src="./user.jpg" alt="" />
                            </div>
                                  <div className={`${style.userContent}p-1 m-1 text-white`}>
                              <p>{items.firstName}</p>
                              <p>01550406840</p>
                          </div>
                            </div>
                         
                      </div>
                      <div className="col-6 d-flex justify-content-center align-items-center">
                      <div className={`${style.userModify}`}>
                          <button className='btn btn-info text-white me-5'>Modify</button>
                      </div>
                      <div className={`${style.userDelete}`}>
                      <button onClick={()=>{deleteuser(items.id)}} className='btn btn-danger text-white'>Delete</button>
                      </div>
                  </div>
                              </> 
                    
                    )} 
                    </div>
                         :""} 
                         <div className="btns w-100  ms-5">
                         <Link><button className='btn btn-success px-3 m-2 ms-5' onClick={decreeseCounter}>Previos</button></Link> 
                         <span className='text-white'>1 <span>/</span>10</span>
                         <Link><button className='btn btn-success px-4 m-2 'onClick={increeseCounter}>Next</button></Link> 
                         </div>
                        
                        


         </div>
      </div>
    </>
}

export default Desktop1;
