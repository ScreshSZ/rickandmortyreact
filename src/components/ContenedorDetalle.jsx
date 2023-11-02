
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detalles from './Detalles'

const ContenedorDetalle = () => {

    const {id} = useParams()

    const[pj, setPj] = useState()

    useEffect(()=>{
        const llamarApi = async ()=>{
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await response.json()
            setPj(data)
            console.log(pj)
        }
        llamarApi()

    },[id])




  return(
    <>
        {pj ? (
        <div className='ContenedorDetalle'>
          <Detalles
          image={pj.image}
          gender={pj.gender}
          location={pj.location.name}
          name={pj.name}
          specie={(pj.species === "Human") ? "Humano" : pj.species}
          status={pj.status}
          />
        
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  )
}

export default ContenedorDetalle