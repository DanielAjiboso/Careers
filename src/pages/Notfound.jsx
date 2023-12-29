import { Link } from "react-router-dom"
export default function Notfound(){
    return(
        <div>
            <h2>Page Nit found</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dignissimos nam natus architecto blanditiis facilis animi consequatur perspiciatis esse dolore dolores magni modi, saepe cum quis laudantium voluptate. Iusto, numquam?</p>
            <p>Go to the <Link to='/'>Homepage</Link></p>
       </div>
    )
}