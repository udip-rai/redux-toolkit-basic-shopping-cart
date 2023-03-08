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
  }, [cart])


  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <NavLink to="/">
          <span>All Product</span>
        </NavLink>
        <MDBBtn color="btn btn-warning">
          <NavLink to="cart" className="text-white">Cart ({totalQuantity})</NavLink>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}