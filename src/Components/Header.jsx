import React from "react";
import "../Assets/styles/components/Header.css";
import {Link} from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import {connect} from "react-redux";
import {auth} from "../firebase.js"

const Header = ({user})=>{

    return(
        <nav className="header">

            {/**Logo */}
            <Link to="/">
                <img src="https://images.vexels.com/media/users/3/142812/isolated/preview/992801ae3182fa95353e941cfcac9293-escudo-logo-emblema-de-dise--o-by-vexels.png" alt="Logo" className="header__logo"/>
            </Link>




            {/**User  */}

            <div className="header__menu">
                <PersonIcon className="header__PersonIcon" />
                {user.length === 0 ? 
                 <p className="header__userName">name</p> 
                 : 
                 <p className="header__userName">{user.email}</p>
                }
            </div>

            {user === 0 ? null : <button onClick={()=>{auth.signOut()}  }>Log Out</button>}
        </nav>
    )
}


const mapStateToProps = state =>{
    return{
 user:state.user
    }
}

export default connect(mapStateToProps,null)(Header);