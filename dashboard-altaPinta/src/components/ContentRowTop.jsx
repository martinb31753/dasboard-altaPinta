import CategoryDb from "./CategoryDb"
import CountCard from "./CountCard"


function ContentRowTop() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800" >Alta Pinta Dashboard</h1>
            </div>
            <div className="row">
                <CountCard title="Total de Productos" count={21} iconClass="fas fa-hamburger" color="primary" />
                <CountCard title="Total de Usuarios" count={79} iconClass="fas fa-users" color="warning"  />
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