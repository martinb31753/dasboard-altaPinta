function ContentRowTop() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Alta Pinta Dashboard</h1>
            </div>

            {/* <!-- Content Row Movies--> */}
            <div className="row">

                {/* <!-- Movies in Data Base --> */}
                <div className="col-md-4 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total de Productos</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">21</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-film fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Total awards --> */}
                <div className="col-md-4 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Total de Usuarios</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">79</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-award fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Actors quantity --> */}

            </div>
            {/* <!-- End movies in Data Base --> */}


            {/* <!-- Content Row Last Movie in Data Base --> */}
            <div className="row">
                {/* <!-- Last Movie in DB --> */}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Ultimo ingrediente agregado</h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                {/*<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{"width": "40rem"}} src="/images/mandalorian.jpg" alt=" Star Wars - Mandalorian " />*/}
                            </div>
                            <img className="w-100" src="/images/zanahorias-confi.jpg" alt="Toldo" style={{ maxWidth: '200px' }}/>
                            <p>"Cuidadosamente cocinadas hasta lograr un caramelizado dorado, estas zanahorias ofrecen un sabor indulgente y una textura tierna"</p>
                            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver más detalle</a>
                        </div>
                    </div>
                </div>
                {/* <!-- End content row last movie in Data Base --> */}

                {/* <!-- Genres in DB --> */}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Total de Categorías</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            Hamburguesa
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            Panes
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            Aderezos
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            Fiambres
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            Quesos
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            Hojas Verdes
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            Verduras Crudas
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            Verduras Cocidas
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentRowTop