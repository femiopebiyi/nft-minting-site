import phone from "../images/phone-call.png"
import email from "../images/email.png"


const Contact = () => {
  return (
    <div>
      <div className="contact-head">
        <h2>contact us</h2>
        <h1>Get in touch</h1>
      </div>

      <div className="contact-me">
        <div className="input">
          <div className="name-mail">
            <input type="text" placeholder="Your Name"/>
            <input type="email" name="email" id="" placeholder="Your Email"/>
          </div>

          <input type="text" placeholder="Subject"/>
          <textarea name="" id="" placeholder="Message"></textarea>

          <button>Submit Now</button>
        </div>

        <div className="contact-info">
            <h1 id="contact-info">Contact Info</h1>
            <div className="call">
              <img src={phone} alt="" />
              <div>
                <h1>call anytime</h1>
              <h2>Mobile: 090078564678687</h2>
              <h2>Hotline: 090078564678687</h2>
              </div>
              
            </div>
            <div className="call email">
              <img src={email} alt="" />
              <div>
              <h1>Email Us</h1>
              <h2>Support: pjgiohjkhdsjkhsj@gmail.com</h2>
              <h2>Info: he@gmail.com</h2>
              </div>
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
