import CategoryDb from "./CategoryDb"

function ContentRowTop() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800" >Alta Pinta Dashboard</h1>
            </div>
            <div className="row">

                <div className="col-md-4 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total de Productos</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">21</div>

                                    <div className="col-auto">
                                        <i className="fas fa-hamburger fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Total de Usuarios</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">79</div>
                                    <div className="col-auto">
                                        <i className="fas fa-users fa-2x text-gray-300"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Ultimo ingrediente agregado</h5>
                        </div>
                        <div className="card-body">

                            <img className="w-100" src="/images/zanahorias-confi.jpg" alt="Toldo" style={{ maxWidth: '200px' }} />
                            <p>"Cuidadosamente cocinadas hasta lograr un caramelizado dorado, estas zanahorias ofrecen un sabor indulgente y una textura tierna"</p>
                            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver más detalle</a>
                        </div>
                    </div>
                </div>

                <CategoryDb />

            </div>
        </div>

    )
}

export default ContentRowTop