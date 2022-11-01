import backgroundimg from "../../Assets/Images/backgroundimg.png";
import instagramgirlimg from "../../Assets/Images/Instagram girlimg.png";
import instagramimg from "../../Assets/Images/instagramimg.png";
import insta from "../../Assets/Images/insta.png";
import { useState, useEffect } from "react";
/*let a=10;a=20;*/
export default function InstagramMainComponent() {
    const[imgUrl,setImgUrl] = useState(instagramgirlimg);
    let a=1;
    useEffect(() => {
        setInterval(() => {
          if(a===1)
          setImgUrl(instagramimg); 
          if(a===2)
          setImgUrl(insta);
          if(a===3){
           setImgUrl(instagramgirlimg);
           a=0;
          }
          console.log(a);
          a=a+1;
        }, 2000);
      }, [imgUrl])

    return (
        <div style={{ width: "50%", backgroundColor: "whitesmoke",display:"flex",Left:"250px"}}>
           
             <div>
                <img src={imgUrl} alt="girlimg"
                style={{ marginTop: "40px",position: "absolute",left: "450px",top: "28px"}}  />
            </div>  
            <div>
                <img src={backgroundimg} alt="backgroundimg" style={{ marginTop: "40px",marginLeft:"280px" }} />
            </div>
        </div>
    )
}