
import {Link} from 'react-router-dom';
import logo from "/images/logo.png";

function SideBar() {
    return (
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/* <!-- Sidebar - Brand --> */}
			
			<header>
				<Link className="logo" to={"/"}>
				<img className="logoAltaPinta"src={logo} alt="Logo" style={{ width: '80px', marginTop: '20px', marginLeft:'20px' }} />
				</Link>
			</header>
	

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0" />

			

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider" />

			{/* <!-- Heading --> */}
			<div className="sidebar-heading">Actions</div>

			{/* <!-- Nav Item - Charts --> */}
			<li className="nav-item">
				<a className="nav-link" href="/userList">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>User List</span></a>
			</li>

			{/* <!-- Nav Item - Tables --> */}
			<li className="nav-item">
				<a className="nav-link" href="/productsList">
					<i className="fas fa-fw fa-table"></i>
					<span>Products List</span></a>
			</li>

			<li className='nav-item'>
				<Link className="nav-link"to="/categories">
					<i className='fas fa-fw fa-table'></i>
				<span>Categories</span></Link>

			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
    )
}

export default SideBar