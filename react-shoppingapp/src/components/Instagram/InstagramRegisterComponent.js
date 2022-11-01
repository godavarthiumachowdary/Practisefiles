import instagramnameimg from "../../Assets/Images/instanameimg.png";
import facebookicon from "../../Assets/Images/facebookicon.png";
import Appstore from "../../Assets/Images/Appstore.png.png";
import googleplay from "../../Assets/Images/googleplay.png";

export default function InstagramRegisterComponent() {
    return (
        <div style={{ width: "50%", backgroundColor: "whitesmoke" }}>
            <div class="card" style={{ marginTop: "40px", width: "49%", height: "60%" }}>
                <div className="text-center">
                    <div style={{ marginTop: "35px" }}>
                        <img src={instagramnameimg} style={{ height: "50px", width: "160px" }} alt="girlimg" />
                    </div>
                    <div class="input-group" style={{ marginTop: "25px" }}>
                        <input type="text" class="form-control" id="textbox1" placeholder="Phone number, username, or email"
                            style={{ marginLeft: "35px", marginRight: "35px" }} />
                    </div>
                    <div class="input-group" style={{ marginTop: "5px" }}>
                        <input type="password" class="form-control" id="password1" placeholder="Password"
                            style={{ marginLeft: "35px", marginRight: "35px" }} />
                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <button type="button" class="btn btn-primary" style={{ height: "33px", width: "300px" }} >Log In</button>
                    </div>
                    <div style={{ display: "flex", marginTop: "15px", marginLeft: "55px" }}>
                        <div style={{ borderBottom: "1px solid grey", width: "100px" }}></div>
                        <div style={{ fontSize: "13px", marginLeft: "20px" }}>OR</div>
                        <div style={{ borderBottom: "1px solid grey", width: "100px" }}></div>
                    </div>

                    <div style={{ marginTop: "20px" }}>
                        <img src={facebookicon} alt="fbicon" style={{ height: "25px", width: "30px" }} />
                        <span style={{ color: "blue" }}>Log in with Facebook</span>
                    </div>
                </div>

                <div style={{ marginTop: "20px", marginLeft: "115px" }}>
                    <span>Forgot password?</span>
                </div>
            </div>


            <div style={{ display: "flex", height: "60%", textAlign: "center" }}>
                <div class="card" style={{ marginTop: "10px", width: "49%", height: "15%", display: "flex" }}>
                    Don't have an account?
                    <span style={{ marginTop: "10px", color: "blue" }}>Sign up</span>
                </div>
            </div>
            <div style={{ marginTop: "-320px", marginLeft: "150px" }}>
                Get the app.
            </div>

            <div style={{ display: "flex" }}>
                <div style={{ marginTop: "20px" }}>
                    <img src={Appstore} alt="image" style={{ width: "140px", height: "40px", marginLeft: "50px", marginTop: "10px" }} />
                </div>

                <div style={{ marginTop: "20px" }}>
                    <img src={googleplay} alt="googleplay" style={{ width: "140px", height: "40px", marginLeft: "8px", marginTop: "10px" }} />
                </div>
            </div>
        </div>
    )
}