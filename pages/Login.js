import { Input, Label } from "reactstrap";
import Image from "next/image";
import { Icon } from '@iconify/react';
import logo from '../assets/images/porter_logo.jpg';
export default function Login(props) {


  const loginButton = () => {
    props.setIsLogin("true")
  }


  return (
    <>
      <div className="bg_img">
        <div className="lf-card pt-5 card">
          <div className="text-center pt-3">
            <span className="logo-sm mt-5">
              <Image src={logo} width="150" height="70" className="mb-3" alt="logo" />
            </span>
          </div>
          <div className="text-center">
            <h4 className="lf-title my-3">Login into account</h4>
            <p className="py-1 mb-3 text-muted">Use your credentials to a access your account.</p>
          </div>

          <div className="search mbView py-2">
            <Icon className="i" icon="mdi:email" color="rgba(128, 128, 128, 0.4588235294117647)" width="20" height="20" />

            <Input name="email" placeholder="Email Address" type="email"  />

          </div>
          <div className="search mbview py-2 mb-1">
            <Icon className="i" icon="material-symbols:lock-outline" color="rgba(128, 128, 128, 0.4588235294117647)" width="20" height="20" />
            {/* <Icon className="i1" icon="mdi:eye-off-outline" color="rgba(128, 128, 128, 0.4588235294117647)" width="20" height="20" /> */}

            <Input name="psw" placeholder="Password" type="password"  />


          </div>

          <div className="row">
            <div className="col-xl-6">
              <div className="mb-3 form-check">
                <Label className="py-3 d-flex align-items-end ">
                  <Input type="checkbox" className="me-2 "></Input>
                  <a>Remember me</a>
                </Label>
              </div>
            </div>
            <div className="lf-forget col-xl-6">
              <a className="text-decoration-none" href="/">Forgot password?</a>
            </div>
          </div>

          <button type="button" className="m-1 p-2 mb-5 fs-14 rounded-0 btn btn-dark btn-sm"  onClick={loginButton} >Login</button>



        </div>


      </div>


    </>
  );
}
