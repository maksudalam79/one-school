import React, { useContext } from 'react';
import { AuthContext } from '../../contex/AuthProvider';

const Registration = () => {
    const {createUser}=useContext(AuthContext)
    const handlarSubmit=(event)=>{
           event.preventDefault()
           const from=event.target
           const name=from.name.value
           const PhotoURL=from.PhotoURL.value
           const email=from.email.value
           const password=from.password.value
           createUser(email,password)
           .then(result=>{
            const user=result.user
            console.log(user)

           })
           .catch(error=>console.log(error))

}
    return (
        <form onSubmit={handlarSubmit}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name='PhotoURL' placeholder="text" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn w-32 btn-primary mb-2">Registration</button>
        </div>
      </form>
    );
};

export default Registration;