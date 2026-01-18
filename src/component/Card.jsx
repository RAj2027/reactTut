import { RiBookmarkLine } from "@remixicon/react";
const Card = (props) => {
    console.log(props);
    return (
        <>
        <div className="card">
            <div className="top">
                <img src="https://i.pinimg.com/736x/e2/f7/cd/e2f7cd5bdabda71797d133f41ecdb6e1.jpg" alt="Logo" />
                <div className="save">
                    <h4>Save <span><RiBookmarkLine size={15} /></span></h4>  
                </div>
            </div>
            <div className="mid">
                <div className="brand">
                    <h3>{props.company}</h3>
                    <h4 id="date">{props.posted}</h4>
                </div>
                <h2>{props.role}</h2>
                <div className="tags">
                    <h4>{props.workTime}</h4>
                    <h4>{props.experience}</h4>
                </div>
            </div>
            <div className="bottom">
                <h4>{props.salaryPerHour} / hour</h4>
                <h4 className="button">Apply Now</h4>
            </div>
        </div>
        </>
    )
}

export default Card