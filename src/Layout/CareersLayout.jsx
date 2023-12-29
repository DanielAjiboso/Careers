import { Outlet } from "react-router-dom";

export default function CareersLayout(){
    return (
        <div className="careers-layout">
            <h2>Carers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto!</p>

            <Outlet />
        </div>
    )
}