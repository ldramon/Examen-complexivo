import React, { useEffect, useState } from 'react' 
import Servicios from '../services/Services'; 
import { Link, useNavigate, useParams } from 'react-router-dom'; 

export const AddComponent = () => {

    const [caracteristica,setCaracteristica]=useState(''); 
    const [direccion,setDireccion]=useState(''); 
    const [habitaciones,setHabitaciones]=useState(''); 
    const [tipo,setTipo]=useState(''); 
    const [costo,setCosto]=useState(''); 

    const navigate = useNavigate(); 

    const {id_inmuebles} = useParams();


    //FUNCION PARA CREAR LOS INMUEBLES
    const create = (e)=>{
        e.preventDefault();
        const entidad = {caracteristica,direccion,habitaciones,tipo,costo};

        if(id_inmuebles){
            Servicios.putById(id_inmuebles, entidad).then((response)=>{
                console.log(response.data);
                navigate('/listar');
            }).catch(error=>{
                console.log(error);
            })         
        }else{
            Servicios.post(entidad).then((response)=>{
                console.log(response.data);
                navigate('/listar');
            }).catch(error=>{
                console.log(error);
            })
        }

    }
    
    //FUNCION PARA ACTUALIZAR LOS INMUEBLES
    useEffect(()=>{
        Servicios.getById(id_inmuebles).then((response)=>{
            setCaracteristica(response.data.caracteristica);
            setDireccion(response.data.direccion);
            setHabitaciones(response.data.habitaciones);
            setTipo(response.data.tipo);
            setCosto(response.data.costo);
        }).catch(error=>{
            console.log(error);
        })
    },[])

    const title =()=>{
        if(id_inmuebles){
            return <h3 className='text-center'>ACTUALIZAR DATOS DEL INMUEBLE</h3>
        }else{
            return <h3 className='text-center'>CREAR NUEVO INMUEBLE</h3>
        }
    }


  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'><br/>
                    <h3 className='text-center'>
                        {
                            title()
                        }
                    </h3>
                
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Características:</label>
                                <input
                                    type='text'
                                    placeholder='Detalle las caracteristicas del inmueble'
                                    name='caracteristica'
                                    className='form-control'
                                    value={caracteristica}
                                    onChange={(e)=>setCaracteristica(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Dirección:</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese la direccion del inmueble'
                                    name='direccion'
                                    className='form-control'
                                    value={direccion}
                                    onChange={(e)=>setDireccion(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Total de habitaciones:</label>
                                <input
                                    type='text'
                                    placeholder='Registre el total de habitaciones'
                                    name='email'
                                    className='form-control'
                                    value={habitaciones}
                                    onChange={(e)=>setHabitaciones(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Tipo de inmueble:</label>
                                <input
                                    type='text'
                                    placeholder='Registre el tipo de inmueble'
                                    name='tipo'
                                    className='form-control'
                                    value={tipo}
                                    onChange={(e)=>setTipo(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Ingrese el costo del inmueble:</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese el costo del inmueble'
                                    name='costo'
                                    className='form-control'
                                    value={costo}
                                    onChange={(e)=>setCosto(e.target.value)}
                                />
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <button className='btn btn-success' 
                                    onClick={(e)=>create(e)}>Guardar</button>
                                &nbsp; &nbsp;
                                <Link to='/' className='btn btn-danger'>Cancelar</Link>
                            </div>
                        </form>
                    </div>
                
                </div>

            </div>

        </div>
    </div>
  )
}

export default AddComponent; 

