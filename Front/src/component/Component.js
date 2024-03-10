import React, { useEffect, useState } from 'react'  
import Servicios from '../services/Services'  
import { Link } from 'react-router-dom';     

export const Componente = () => { 

    const [entidades, setEntidades]=useState([]); 

    useEffect(()=>{ 
        lista(); 
    },[]) 
//MOSTRAR LISTADO DE INMUEBLES  
    const lista = () => {
        Servicios.getAll().then(response=>{ 
            setEntidades(response.data); 
            console.log(response.data); 
        }).catch(error=>{  
            console.log(error); 
        })
    }
//ELIMINAR INMUEBLE 
    const deleteAll = (entidadId) => { 
        Servicios.deleteById(entidadId).then((response) => {
            lista();  
        }).catch(error=>{ 
            console.log(error); 
        })
    }
//DISEÑO DE LA TABLA PARA LISTAR LOS INMUEBLES
    return (
        <div className='container'> 
            <br/> 
            <table className="table table-striped-columns table-borderless table-hover table-responsive table-caption-top"> 
                <thead> 
                    <th className='text-center'>ID</th> 
                    <th className='text-center'>CARACTERÍSTICA</th> 
                    <th className='text-center'>DIRECCIÓN</th> 
                    <th className='text-center'>N° HABITACIONES</th> 
                    <th className='text-center'>TIPO</th> 
                    <th className='text-center'>COSTO</th> 
                    <th className='text-center'>OPCIONES</th>                         
                </thead>
                <tbody> 
                    { 
                        entidades.map( 
                            listado=>
                            <tr key={entidades.id_inmuebles}>
                                <td className='text-center'>{listado.id_inmuebles}</td> 
                                <td className='text-center'>{listado.caracteristica}</td> 
                                <td className='text-center'>{listado.direccion}</td> 
                                <td className='text-center'>{listado.habitaciones}</td> 
                                <td className='text-center'>{listado.tipo}</td> 
                                <td className='text-center'>{listado.costo}</td> 
                                <td>
                                    <div className="d-flex justify-content-center align-items-center"> 
                                        <Link className='btn btn-success' to={`/actualizar/${listado.id_inmuebles}`}>Actualizar</Link> 
                                        &nbsp; &nbsp;
                                        <button className='btn btn-danger' onClick={()=>deleteAll(listado.id_inmuebles)}>Eliminar</button> 
                                    </div>
                                </td>
                            </tr>
                        )

                    }
                </tbody>
            </table>
        </div>
    )
}

export default Componente;