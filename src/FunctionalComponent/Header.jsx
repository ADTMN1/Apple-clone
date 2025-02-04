import logo from "../images/icons/logo-sm.png"
import search from "../images/icons/search-icon-sm.png"
import cart from "../images/icons/cart-sm.png"
const Header = () => {
	return (


		<div>


			{/* <!-- Header navigation --> */}
			<div className="nav-wrapper fixed-top">
				<div className="container">
					<nav className="navbar navbar-toggleable-sm navbar-expand-md">
						<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
						</button>
						<a className="navbar-brand mx-auto" href="/">
							<img src={logo} /></a>

						<div className="navbar-collapse collapse">
							<ul className="navbar-nav nav-justified w-100 nav-fill">
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/iphone/">iphone</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/ipad/">ipad</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/watch/">watch</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/tv/">tv</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/music/">Music</a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/support/">Support</a></li>
								<li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/">
									<img src={search} /></a></li>
								<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/cart/">
									<img src={cart} /></a></li>
							</ul>
						</div>
						<div>
						</div>
					</nav>
				</div>
			</div>
			<div>

			</div>
		</div>
	);

	{/* <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">
	  </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


	); */}

}

export default Header;

