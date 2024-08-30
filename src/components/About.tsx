


export default function About(){
    const source = "https://aenft-react.netlify.app/images/about_img.svg"


    return (
        <div className="about-con">
            <div className="about-main">
                <h2> our story</h2>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem hic libero consectetur excepturi numquam beatae expedita, iste saepe vero omnis ab aliquam ipsam ex pariatur! Voluptas cum dolorum officiis obcaecati iure velit cumque! Laboriosam eius eos laudantium praesentium repellat ipsa inventore modi vero aliquid reiciendis consequatur suscipit, sit, eveniet nam, blanditiis quo ipsam ab soluta hic repellendus! Ipsum id exercitationem incidunt et enim atque quae non. <br /> <br /> Similique aut, temporibus error quidem fuga nulla consequuntur illo voluptatibus necessitatibus corporis nemo est quia amet. Eum sint fugiat recusandae fuga reprehenderit voluptatibus animi placeat aut, doloremque asperiores blanditiis provident nemo vitae. Architecto.
                </p>
                    <button>Start Now</button>
            </div>


            <div className="about-pic">
                <img src={source} alt="about pic" />
            </div>
        </div>
    )
}