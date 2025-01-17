import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import "./personalDetails.css";
import Select from "react-select";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
// import Nav from "../../web/NewNavbar/Nav";
import welcomebckbg from "../../Assets/Registrationbg.webp";
import bgimage123 from "../../Assets/444.webp";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import Collegedetails from "../../registration/CollegeDetailes/Collegedetailes"
const gender_choice = ["Male", "Female", "Others"].map((state) => ({
  value: state,
  label: state,
}));

const PersonalDetails = () => {
  let navigate = useNavigate();
  const [active, setActive] = useState(false);
  const[nextp, setNextp] = useState(false);
  const [confirm_err, setConfirm_err] = useState(false);
  const [mobile_check, setMobile_check] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    gender: "",
    password: "",
    confirmpassword: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!confirm_err) {
  //     setLoading({ loading: true });
  //   }

  //   if (user.password != user.confirmpassword) return;

  //   try {
  //     e.preventDefault();
  //     const userresponse = {
  //       name: user.name,
  //       email: user.email,
  //       contact: user.contact,
  //       password: user.password,
  //       gender: user.gender,
  //     };
  //     const response = await axios.post("/apiV1/registerca", userresponse);
  //     const { data } = response;
  //     if (response.status === 201) {
  //       localStorage.setItem("user_id", data.user_id);
  //       setLoading(false);
  //       // setActive(false)
  //     }
  //     setLoading(false);
  //     navigate("/verifyemail");
  //   } catch (err) {
  //     setLoading(false);
  //     const { data } = err?.response;
  //     console.log("register Error:", data);
  //     var errorData = "";
  //     if (data?.error == "user_not_verified") {
  //       errorData = `Please verify your registered email. <a href=/verifyemail>Click Here.`;
  //     } else {
  //       for (var key in data) {
  //         errorData += data[key] + "<br>";
  //       }
  //     }
  //     setErrorMsg(errorData);
  //     setError(true);
  //     setLoading(false);
  //   }
  // };

  const confirm = (confirm) => {
    if (confirm === user.password) {
      setConfirm_err(false);
      // setActive(true);
    } else {
      setConfirm_err(true);
      // setActive(false);
    }
  };

  const clearInput = () => {
    setUser({
      name: "",
      email: "",
      contact: "",
      gender: "",
      password: "",
      confirmpassword: "",
    });
  };

  const handleChange3 = (gender) => {
    setUser({ ...user, gender: gender?.value });
  };



  const validateMobileNumber = (e) => {
    if (e.target.value.length <= 10) {
      setMobile_check(true);
      setUser({ ...user, [e.target.name]: e.target.value });
      let mnumber = e.target.value;
      if(mnumber.length==10){
        setMobile_check(false);
      }
    }
  }

  useEffect(() => {
    if(user.name  && user.email && user.gender && user.contact && user.password && user.confirmpassword && user.password === user.confirmpassword && user.contact.length === 10 && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)){
      setActive(true)
    }else{
      setActive(false);
    }
  }, [user])

  const nextpage = ()=>{
    if (user.password != user.confirmpassword) return;
    else{
      setNextp(true);
    }
  
  };

  return (
   <>{!nextp ?( <>    
   {/* <Nav id="nav1bar"/> */}
    <img src={welcomebckbg} id="welcomebckbg12" alt="" />
    <img src={bgimage123} alt="" className="bgimage123" />

    <div className="personal">
      <div className="personal-steps">
        <div className="personal-step1">
          <div className="personal-step1-number">
            <div className="personal-step1-number-content">1</div>
          </div>
          <div className="personal-step1-description">
            <div className="personal-step1-description-content-para1">
              Step 1/2
            </div>
            <div className="personal-step1-description-content-para2">
              Personal Details
            </div>
          </div>
        </div>
        <div className="personal-step2">
          <div className="personal-step2-number">
            <div className="personal-step2-number-content">2</div>
          </div>
          <div className="personal-step2-description">
            <div className="personal-step2-description-content-para1">
              Step 2/2
            </div>
            <div className="personal-step2-description-content-para2">
              College Details
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="personal-inputs">
          <div className="personal-input1">
            <div>
              <input className="input-field" type="text" placeholder="Name *" name="name"
                  value={user.name}
                  required
                  // pattern="[a-zA-Z]"
                  onChange={(e) => onInputChange(e)} />
            </div>
            <div>
              <input
                className="input-field"
                type="email"
                placeholder="Email ID *"
                name="email"
                  value={user.email}
                  required
                  // pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"
                  onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="personal-input2">
            <div>
              {/* <select className="input-field select-field" onChange={handleChange3}>
                <option value="" disabled hidden>
                  Gender *
                </option>
                <option className="select-option" value="Gender 1">
                  Male
                </option>
                <option className="select-option" value="Gender 2">
                  Female
                </option>
                <option className="select-option" value="Gender 3">
                  Others
                </option>
              </select> */}

              <Select
                  className="select-option"
                  placeholder="Select Gender*"
                  required
                  onChange={handleChange3}
                  // styles={customStyles}
                  options={gender_choice}
                  isSearchable={false}
                />
            </div>
            <div>
              <input
              type="number"
                className="input-field"
                name="contact"
                placeholder="Phone Number *"
                value={user.contact}
                pattern="/^[6-9]{1}+[0-9]{9}$/"
                  onkeypress="limitKeypress(event,this.value,2)"
                  required
                  onChange={(e) => validateMobileNumber(e)}
              />
              {mobile_check && (
                  <div className="text-danger">Please enter valid Mobile Number</div>
                )}
            </div>
          </div>
          <div className="personal-input3">
            <div>
              <Input.Password
                className="input-field"
                type="password"
                iconRender={(visible) =>
                  visible ? (
                    <EyeTwoTone style={{ color: "black" }} />
                  ) : (
                    <EyeInvisibleOutlined style={{ color: "black" }} />
                  )
                }
                placeholder="Create Password *"
                name="password"
                  value={user.password}
                  required
                  onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <Input.Password
                className="input-field"
                type="password"

                iconRender={(visible) =>
                  visible ? (
                    <EyeTwoTone style={{ color: "black" }} />
                  ) : (
                    <EyeInvisibleOutlined style={{ color: "black" }} />
                  )
                }
                placeholder="Confirm Password *"
                name="confirmpassword"
                  value={user.confirmpassword}
                  required
                  onChange={(e) => {
                    onInputChange(e);
                    confirm(e.target.value);
                  }}
              />
              {confirm_err && (
                  <div className="text-danger">Password didn't match</div>
                )}
            </div>
          </div>
          {error && (
              <div
                className="text-danger"
                style={{ marginTop: "-10px" }}
                dangerouslySetInnerHTML={{ __html: errorMsg }}
              ></div>
            )}
        </div>

        <div className="personal-buttons">
          <button onClick ={nextpage} className="personal-button-submit" disabled={!active} style={active == true ? {background: "#ff5c00"} : {background: "rgb(204, 204, 204)"}}>
          
                Next
                
          </button>
          <button className="personal-button-clear" onClick={clearInput}>
            Clear
          </button>
        </div>
      </div>
    </div>
    </>):(<Collegedetails name ={user.name} email={user.email} password = {user.password} gender ={user.gender} contact ={user.contact}/>) }
    </>
  );
};

export default PersonalDetails;
