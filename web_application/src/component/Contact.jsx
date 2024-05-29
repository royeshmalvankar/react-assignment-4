import "../App.css"
const Contact = () => {

    return (
        <>
        <div>
            <h1 className="a st" style={{fontSize: "48px",color: "#0A0103",marginTop:"100px"}}><b>
            Contact Us
            </b>
            </h1>
        </div>
        <div>
        <p className="a s c st">
        We know that choosing the right institute or a career path can be a difficult and tiring process, and that's why we're <br/>here for you. Contact us to ask any questions, we'll respond over email as soon as possible!
        </p>
        <div>
            <img className="img1"   src="https://www.masaischool.com/images/contact/mail.svg"/>
            <h2 className="a st" style={{fontSize: "25px",color: "#0A0103",marginLeft: "10px"}}>
            Write to us at
            </h2>
            <a href="http://mail.google.com" target="_blank"><p class="a st" style={{fontSize: "25px",color: "#0A0103",marginLeft: "10px"}}>admissions@masaischool.com</p></a>
        </div>
        <br>
        </br>
        <br>
        </br>
        <hr style={{width:"70%",marginLeft:"15%"}}/>
        <div className="l1 " style={{color:"#3b3435"}}>
            <img  className="st" style={{marginLeft:"15%"}}  src="https://www.masaischool.com/images/contact/qa-session-icon.svg"/>
            <p style={{marginLeft:"1%",fontSize: "18px",color: "#0A0103",marginTop:"10px"}} className="a st" >  
            In case of any queries you may have about Masai, we organise a Q&A session every Tuesday & Friday, 5 - 6 PM. Register below and join the link on time to get your doubts<br/> cleared by our Admissions Counselling Team.
            </p>   
        </div>
        <div className="st">
            <a href="https://zoom.us/meeting/register/tJMlfu-prTIqE9C1Ol8PyAxAmDQDbV6BtCD-#/registration" target="_blank">
                <button className="bts" style={{marginLeft:"15%",fontSize:"13px",padding:"10px"}}>CLICK HERE TO REGISTER</button>  
            </a>
        </div>
        </div>
        </>
    )
}

export default Contact