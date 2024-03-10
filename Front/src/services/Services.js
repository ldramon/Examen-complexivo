import axios from 'axios';//INSTANCIA QUE PERMITE LA CONEXION CON EL BACKEND

const PATH_EXAMEN_BACKEND_LISTA = 'http://localhost:8087/inmuebles/todos';   
const PATH_EXAMEN_BACKEND_CREAR = 'http://localhost:8087/inmuebles/crear'; 
const PATH_EXAMEN_BACKEND_ACTUALIZAR = 'http://localhost:8087/inmuebles/'; 
const PATH_EXAMEN_BACKEND_ELIMINAR = 'http://localhost:8087/inmuebles/'; 

class Servicios{  

    getAll(){ 
        return axios.get(PATH_EXAMEN_BACKEND_LISTA); 
    
    }

    post(entidad) { 
        return axios.post(PATH_EXAMEN_BACKEND_CREAR, entidad); 
    }
  
    getById(entidadId){ 
        return axios.get(PATH_EXAMEN_BACKEND_ACTUALIZAR+entidadId);
    }

    putById(entidadId, entidad){ 
        return axios.put(PATH_EXAMEN_BACKEND_ACTUALIZAR+entidadId, entidad);
    }

    deleteById(entidadId){ 
        return axios.delete(PATH_EXAMEN_BACKEND_ELIMINAR+entidadId); 
    } 

}

export default new Servicios();  