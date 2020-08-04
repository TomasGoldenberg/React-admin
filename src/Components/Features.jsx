import React from "react";
import "../Assets/styles/components/Features.css";
import {Link} from "react-router-dom";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import StorefrontIcon from '@material-ui/icons/Storefront';
import classNames from "classnames";

const Features = (props)=>{
const {isAdmin, isSales, isOrders, isClients ,isProducts} =props
  const Admin = classNames("feature__item",{ isAdmin })
  const Sales = classNames("feature__item",{ isSales })
  const Orders = classNames("feature__item",{ isOrders })
  const Clients = classNames("feature__item",{ isClients })
  const Products = classNames("feature__item",{ isProducts })


    return(
    <>
        <div className="features">
            <Link to="/" className="link">
              <div className={Admin}>
                <AssessmentIcon className="feature__icon"/>
                <h2 className="feature__title">Administrator</h2>
              </div>
            </Link>

            <Link className="link" to="/sales">
              <div className={Sales}>
                <AttachMoneyIcon className="feature__icon"/>
                <h2 className="feature__title">Sales</h2>
              </div>
            </Link>

            <Link className="link" to="/orders">
              <div className={Orders}>
                <RoomServiceIcon className="feature__icon"/>
                <h2 className="feature__title">Orders</h2>
              </div>
            </Link>

            <Link className="link" to="/clients">
              <div className={Clients}>
                <SupervisorAccountIcon className="feature__icon"/>
                <h2 className="feature__title">Clients</h2>
              </div>
            </Link>

            <Link className="link" to="/products">
              <div className={Products}>
                <StorefrontIcon className="feature__icon"/>
                <h2 className="feature__title">Products</h2>
              </div>
            </Link>
        </div>

    </>
    )
}

export default Features