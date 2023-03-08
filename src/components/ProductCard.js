import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBRipple
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';

export default function ProductCard() {

  const dispatch = useDispatch()
  const allCarts = useSelector((state) => state.allCarts)

  return (

    <MDBContainer>
      <MDBRow className="mb-3">

        {allCarts.items.map((item) =>
          <MDBCol key={item.id + item.price} size="4">
            <MDBCard>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src={item.img} fluid alt={item.title} />
                <a>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText>
                  $ {item.price}
                </MDBCardText>
                <MDBBtn onClick={() => dispatch(addToCart(item))}>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>)}
      </MDBRow>
    </MDBContainer>

  );
}