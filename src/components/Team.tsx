import { teamDetails } from "./constants/teams"
import { BsFacebook, BsLinkedin, BsWhatsapp} from "react-icons/bs"




const Team = () => {
  return (
    <div className="team-con" id="team">
        
      {teamDetails.map((member, index)=>{
        return <div className="member-card" key={index}>
            <div className="member-img"><img src={member.image} alt="" /></div>
            <h1>{member.name}</h1>
            <h3>{member.role}</h3>
            
            <div className="socials">
                <BsFacebook/>
                <BsLinkedin/>
                <BsWhatsapp/>
            </div>
        </div>
      })}
    </div>
  )
}

export default Team
