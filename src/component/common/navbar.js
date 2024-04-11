import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react";
import './navbar.css'
function NavBar(){
    const date = new Date(null)
    const [time,setTime] = useState(0)
    const [s,setS] = useState('00:00:00')
    useEffect(() => {
        setTimeout(() => {
        date.setSeconds(time+1)
        setS(date.toISOString().substr(11,8))
        setTime(time + 1)    
        },1000)
    }, [time])
    return (
    <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <NavLink className="navbar-brand" to={'/'}>Trang chủ</NavLink>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to={'my-info'}>Thông tin sinh viên</NavLink>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item time">
                    <Link className="nav-link">Thời gian truy cập: {s}</Link>
                </li>
            </ul>
            <Link className="btn btn-success create-student" style={{marginLeft: '45%'}}  to={'/create-student'}>Add Product</Link>
        </nav>
    </>    
    )
}
export default NavBar