

const Detalles = ({image,gender,location,name,specie,status}) => {
  return (
    <div className="detalle">
        <img src={image} alt={name}></img>
        <h1>{name}</h1>
        <h2>Description</h2>
        <h3>Gender:<span> {gender}</span></h3>
        <h3>Location:<span> {location}</span></h3>
        <h3>Specie:<span> {specie}</span></h3>
        <h3>Status:<span> {status}</span></h3>
    </div>
  )
}

export default Detalles