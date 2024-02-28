import {useState} from 'react'
import Card from './Card'

const Form = () => {
  const [visitante, setVisitante] = useState({
    nombre: '',
    apodo: ''
  })

  const [err, setErr] = useState(false)
  const [mostracarta, setMostrarCarta ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(visitante.nombre.length > 3 && visitante.nombre.trim() && visitante.apodo.length > 6 ){
      
      setErr(false)
      setMostrarCarta(true)
    
    } else {
      setErr(true)
    }
  
  }
  
  return (
    <>
    <h3>Llena el formulario y obtén la playlist oculta</h3>
    <form onSubmit={handleSubmit}>
      <label> Nombre: </label>
      <input type="text" onChange= {({target}) => setVisitante({...visitante, nombre: target.value})}/>
      <label> Apodo: </label> 
      <input type="text" onChange={({target}) => setVisitante({...visitante, apodo: target.value})}/>
      <button onClick= {()=> setMostrarCarta(true)}>Enviar</button>
    </form>

    {show && <h4>Hola {visitante.nombre} o más bien {visitante.apodo} gracias por ingresar tus datos! Disfruta la playlist!</h4>
    }
    <hr />
    {mostracarta && <Card/>}
    {err && <p>Coloque la información correctamente.  </p>}
    
    </>
  )
}

export default Form
