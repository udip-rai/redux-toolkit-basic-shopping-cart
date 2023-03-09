import React, { useEffect } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';

export default function Navbar() {

  const dispatch = useDispatch();
  const { cart, totalQuantity } = useSelector((state) => state.allCarts)

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch, cart])


  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <div>
          <MDBNavbarBrand>
            <NavLink to="https://udiprai-codes.netlify.app">
              <i class="fas fa-arrow-circle-left me-2"></i>
              Go back to Portfolio
            </NavLink>
          </MDBNavbarBrand>

        </div>
        <h5>
          <NavLink to="https://github.com/udip-rai/redux-toolkit-basic-shopping-cart">
            <i class="fab fa-github me-2"></i>
            Redux Toolkit Example - Simple Shopping Cart
          </NavLink>
        </h5>
        <div className="d-flex align-items-center">
          <NavLink to="/">
            <span>All Products</span>
          </NavLink>
          <MDBBtn color="btn btn-warning" className='ms-2'>
            <NavLink to="cart" className="text-white">Cart ({totalQuantity})</NavLink>
          </MDBBtn>
        </div>

      </MDBContainer>
    </MDBNavbar >
  );
}