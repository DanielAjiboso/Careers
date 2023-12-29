import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function About(){
    const [user, setUser]= useState('mario')

    if(!user){
        return <Navigate to='/' replace={true}/>
    }
    return(
        <div className= 'about'>
            <h2>About us</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rem voluptate magni animi ipsa atque nesciunt tenetur iste amet beatae minima laudantium illo, odit officia libero sint quos vero expedita.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a accusamus vero earum, dignissimos minus corrupti at ipsa, excepturi velit commodi porro placeat asperiores voluptatem reprehenderit officia sint voluptates magni!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vitae sit, repudiandae cupiditate quos, perferendis et reiciendis iusto, omnis officia fugiat! Voluptates tempore iusto illum officiis explicabo pariatur. Neque, facere!</p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita totam pariatur, quos quibusdam molestias corrupti accusantium nulla harum? Necessitatibus quas quidem repellendus facere adipisci molestiae laborum fuga enim aut veritatis?
            </p>

            <button onClick={()=>setUser(null)}>Logouut</button>
        </div>
    )
}