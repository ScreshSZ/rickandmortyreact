import { useEffect, useState } from "react"
import Card from "./Card"
import { Link } from "react-router-dom"

const ContenedorCards = () => {

    const[personajes, setPersonajes] = useState([])

    useEffect(()=>{
        const llamarApi = async ()=>{
            const response = await fetch('https://rickandmortyapi.com/api/character/')
            const data = await response.json()
           
            setPersonajes(data.results)
        }
        llamarApi()
    },[])


  return (
    <div className="contenedorImg">
        {personajes.map((pj)=>{
            return(
                <Link className="links" key={pj.id} to={`/personaje/${pj.id}`}>
                    <Card
                    image={pj.image}
                    />
                </Link>
            )
        })}
    </div>
  )
}

export default ContenedorCards