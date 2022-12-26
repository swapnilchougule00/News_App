import { useNavigate } from "react-router-dom";
import "./Contact.css";


function Contact({show}) {


  const navigate = useNavigate()

  const gotoHome=()=>{
      navigate('/')
  }

  const change = (e)=>{
    e.preventDefault()
  }

  return (
    <div className= {`${show? 'dark': 'light'} back`}>


            <button type="submit" className="btn-back" onClick={()=>{gotoHome()}}>Go Back</button>

<div className="Contact">
    

     
      <form action="#">
        <input type="text" placeholder="First name"   />
        <input type="text" placeholder="Last Name"   />
        <input type="email" placeholder="Email"   />
        <textarea className="textarea"  rows="5" type="password" placeholder="Anything "   />
        <button type="submit" onClick={()=>change()}>Submit</button>

      </form>
       
    </div>

    </div>

   
  );
}
export default Contact;
