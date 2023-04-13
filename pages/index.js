// import Link from "next/link";
import { Label } from "reactstrap";
import Image from "next/image";
import { Icon } from '@iconify/react';

export default function Home() {

  return (
    <>
      <div className="bg_img">
        <div className="lf-card pt-5 card">
          <div className="text-center pt-3">
            <span className="logo-sm mt-5">
              <Image src="/assets/images/porter_logo.png" width="200" height="50" className="mb-3" ></Image>
            </span>
          </div>
          <div className="text-center">
            <h4 className="lf-title my-3">Login into account</h4>
            <p className="py-1 mb-3 text-muted">Use your credentials to a access your account.</p>
          </div>

          <div className="search mbView py-2">
             <Icon className="i" icon="mdi:email" color="rgba(128, 128, 128, 0.4588235294117647)" width="30" height="30" />

            <input name="email" placeholder="Email Address" type="email" className="form-control search-options form-control" />

          </div>
          <div className="search mbview py-2 mb-1">
            <input name="password" placeholder="password" type="password" className="form-control search-options form-control" />
          </div>

          <div className="row"> 
              <div className="col-xl-6">
                <div className="mb-3 form-check">
                  <Label className="py-3 d-flex align-items-end form-label from-check-lable">
                    <input type="checkbox" className="me-2 form-check-input"></input>
                    <a>Remember me</a>
                  </Label>
                </div>
                <div className="lf-forget col-xl-6">
                  <a className="text-decoration-none" href="/">Forgot password?</a>

                </div>
              </div>
          </div>



        </div>


      </div>


    </>
  );
}
