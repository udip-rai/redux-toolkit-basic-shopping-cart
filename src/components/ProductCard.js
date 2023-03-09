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
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';

export default function ProductCard() {

  const dispatch = useDispatch()
  const allCarts = useSelector((state) => state.allCarts)

  return (

    <MDBContainer className='py-4'>
      <MDBRow className="mb-3">

        {allCarts.items.map((item) =>
          <MDBCol key={item.id + item.price} size="4" className='py-4 text-center'>
            <MDBCard>
              <div className="text-center py-4">
                <MDBCardImage src={item.img} alt={item.title} width="200px" height="200px" className='text-center' />
              </div>
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