let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let pronounvals = ['She: "Wish her a happy birthday!"','He: "Wish him a happy birthday!"','They: "Wish them a happy birthday!"'];
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let numberformat = /^\d{10}$/;

    function createDateOptions(){
        
        let dateoptions = "<option id='dob_date' value='0'>select</option>";

        for(let i=1;i<=31;i++)
        {
            dateoptions+= "<option value='"+i+"'>"+i+"</option>"
        }

        document.getElementById("select1").innerHTML=dateoptions;
    }

    function createMonthOptions(){
        let monthoptions = "<option id='dob_month' value='0'>select</option>";
        let d=new Date();

        for(let i=1;i <= 12;i++)
        {
            monthoptions+= "<option value='"+months[i-1]+"'>"+months[i-1]+"</option>"
        }

        document.getElementById("select2").innerHTML=monthoptions;
    }

    function createYearOptions(){
        let d = new Date();
        let currentyear = d.getFullYear();
        let yearoptions = "<option id='dob_year' value='0'>select</option>";

        for(let i=currentyear;i >= 1905;i--)
        {
            yearoptions+= "<option value='"+i+"'>"+i+"</option>"
        }

        document.getElementById("selectid").innerHTML=yearoptions;
    }

    function showorhide(){
        let pronounoptions = "<option id='gender_pronoun' value='Select your pronoun'>Select your pronoun</option>";

        for(let i=1;i<=pronounvals.length;i++)
        {
            pronounoptions+= "<option value='"+pronounvals[i-1]+"'>"+pronounvals[i-1]+"</option>"
        }

        document.getElementById("select3").innerHTML=pronounoptions;
        let x=document.getElementById("select3");
        let y=document.getElementById("selectcomment");
        let z=document.getElementById("optional");
        let a=document.getElementById("img10");
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "block";
        a.style.display = "none";
        gender_is_valid();
    }

    function displayFun(){
        hideFun();
        gender_is_valid();
    }

    function hideFun(){
        let x = document.getElementById("select3");
        let y = document.getElementById("selectcomment");
        let z = document.getElementById("optional");
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    }

    function displayImg(){
        document.getElementById("img1").src="file:///H:/HTML%20CSS%20JS/Facebook/images/fb%20images.png";
        document.getElementById("img1").alt="cross image";    

        document.getElementById("img2").src="file:///H:/HTML%20CSS%20JS/Facebook/images/question%20mark.png";
        document.getElementById("img2").alt="question mark image";

        document.getElementById("img3").src="file:///H:/HTML%20CSS%20JS/Facebook/images/question%20mark.png";
        document.getElementById("img3").alt="question mark image";
    }

    function hidepage()
    {
        let x = document.getElementById("card");
        x.style.display="none";
    }

    // id="input1" onkeyup="input()"              firstname_is_valid()
    // id="input2" onkeyup="input()"              surname_is_valid()
    // id="input3" onkeyup="input()"              mobile_email_is_valid()
    // id="input_4" onkeyup="input()"             password_is_valid()
    // id="input5" onkeyup="input()"              dob_is_valid()
    // id="input6" onkeyup="input()"              gender_is_valid()
    // id="input7" onkeyup="input()"              select_prnoun_is_valid()
    //                                            formValidation()

    function formValidation()
    {
        if(firstname_is_valid() && surname_is_valid() && mobile_email_is_valid() && password_is_valid() && dob_is_valid() && gender_is_valid() && select_prnoun_is_valid())
        {
            const user = {
                firstName: document.getElementById("input1").value,
                surname: document.getElementById("input2").value,
                mobile: document.getElementById("input3").value,
                email: document.getElementById("input3").value,
                password: document.getElementById("input_4").value,
                dob: document.getElementById("select1").value+"/"+document.getElementById("select2").value+"/"+document.getElementById("selectid").value,
                gender: document.getElementById("gender_option1").checked? document.getElementById("gender_option1").value : (document.getElementById("gender_option2").checked? document.getElementById("gender_option2").value : document.getElementById("gender_option3").value), 
                pronoun: document.getElementById("select3").value
            }
            
            if(document.getElementById("gender_option3").checked && user.pronoun == "Select your pronoun")
            {
                user.pronoun="";
            }
            
            if(user.mobile == document.getElementById("input3").value.match(mailformat) && user.email == document.getElementById("input3").value.match(mailformat))
            {
                user.mobile="";
            }
            else
            {
                user.email="";
            }
            localStorage.setItem("user",JSON.stringify(user));
            location.replace("file:///H:/HTML%20CSS%20JS/Facebook/redirect.html"); 
        }
        else{
            firstname_is_valid();
            surname_is_valid(); 
            mobile_email_is_valid();
            password_is_valid();
            dob_is_valid();
            gender_is_valid();
            select_prnoun_is_valid();
        }
    }
    
    
    function firstname_is_valid()
    {
        document.getElementById("img4").src="file:///H:/HTML%20CSS%20JS/Facebook/images/exclamatory.png";
        document.getElementById("img4").alt="exclamatory image";

        let letters = /^[A-Za-z]+$/;

        if(document.getElementById("input1").value.match(letters))
        {
            document.getElementById("img4").style.display="none";
            return true;
        }
        else
        {
            document.getElementById("img4").style.display="block";
            return false;
        }
    }
    function surname_is_valid()
    {
        document.getElementById("img5").src="file:///H:/HTML%20CSS%20JS/Facebook/images/exclamatory.png";
        document.getElementById("img5").alt="exclamatory image";

        let letters = /^[A-Za-z]+$/;

        if(document.getElementById("input2").value.match(letters))
        {
            document.getElementById("img5").style.display="none";
            return true;
        }
        else
        {
            document.getElementById("img5").style.display="block";
            return false;
        }
    }
    function mobile_email_is_valid()
    {
        document.getElementById("img6").src="file:///H:/HTML%20CSS%20JS/Facebook/images/exclamatory.png";
        document.getElementById("img6").alt="exclamatory image";

        if(document.getElementById("input3").value.match(mailformat) || document.getElementById("input3").value.match(numberformat))
        {
            document.getElementById("img6").style.display="none";
            return true;
        }
        else
        {
            document.getElementById("img6").style.display="block";
            return false;
        }
    }
    function password_is_valid()
    {
        document.getElementById("img7").src="file:///H:/HTML%20CSS%20JS/Facebook/images/exclamatory.png";
        document.getElementById("img7").alt="exclamatory image";

        let paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

        if(document.getElementById("input_4").value.match(paswd)) 
        { 
            document.getElementById("img7").style.display="none";
            return true;
        }
        else
        { 
            document.getElementById("img7").style.display="block";
            return false;
        }
    }
    function dob_is_valid()
    {
        document.getElementById("img8").src="file:///H:/HTML%20CSS%20JS/Facebook/images/exclamatory.png";
        document.getElementById("img8").alt="exclamatory image";

        if(document.getElementById("select1").value == "0" || document.getElementById("select2").value == "0" || document.getElementById("selectid").value == "0")
        {
            document.getElementById("img8").style.display="block";
            return false;
        }
        else
        {
            document.getElementById("img8").style.display="none";
            return true;
        }
    }
    function gender_is_valid()
    {
        document.getElementById("img9").src="file:///H:/HTML%20CSS%20JS/Facebook/images/exclamatory.png";
        document.getElementById("img9").alt="exclamatory image";
      
        if((document.getElementById("gender_option1").checked) || (document.getElementById("gender_option2").checked) || (document.getElementById("gender_option3").checked))
        {
            document.getElementById("img9").style.display="none";
            select_prnoun_is_valid();

            return true;
        }
        else
        {
            document.getElementById("img9").style.display="block";
           
            return false;
        }
        
    }
    function select_prnoun_is_valid()
    {
        document.getElementById("img10").src="file:///H:/HTML%20CSS%20JS/Facebook/images/exclamatory.png";
        document.getElementById("img10").alt="exclamatory image";
        
        if(document.getElementById("select3").value == "Select your pronoun" && (document.getElementById("gender_option3").checked))
        {
            document.getElementById("img10").style.display="block";
            return false;
        }
        else
        {
            document.getElementById("img10").style.display="none";
            return true;
        }
    }

    

    

    
