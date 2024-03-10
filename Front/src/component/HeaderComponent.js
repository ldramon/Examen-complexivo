import React from 'react' 

export const HeaderComponent = () => { 
  return ( 
    <div>
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">   
            <div className="container-fluid mx-auto" >
                <a href='/listar' className='navbar-brand' style={{ color: 'blanchedalmond' }}>MOSTRAR LISTA DE INMUEBLES</a>
                <a href='/crear' className='navbar-brand' style={{ color: 'blanchedalmond' }}>REGISTRAR NUEVO INMUEBLE</a>

                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" style={{ color: 'blanchedalmond' }} placeholder="Buscar" aria-label="Search"/>
                    <button className="btn btn-outline-success" style={{ color: 'blanchedalmond' }} type="submit">Buscar</button>
                </form>
            </div>
        </nav> 

    </div> 
  )
}

export default HeaderComponent; 



                