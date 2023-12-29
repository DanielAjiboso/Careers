import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout(){
    return (
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla quas saepe modi quisquam iure libero praesentium, dolor assumenda porro id a, aperiam optio, repudiandae minima. Eum provident unde dignissimos.</p>
        <nav>
            <NavLink to='faq'>View the FAQ</NavLink>
            <NavLink to='contact'>Contact us</NavLink>
           
        </nav>
        
        <Outlet />
        </div>
    )
}