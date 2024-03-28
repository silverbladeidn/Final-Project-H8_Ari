import Search from "./search"
export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid px-5 d-flex justify-between">
                <a className="navbar-brand text-white" href="#">FinProH8</a>
                 <Search searchMovie={props.searchMovie}/> 
            </div>
        </nav>
    )
}