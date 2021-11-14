import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Review.css';

const fullStar = <i className="fas fa-star"></i>;
const halfStar = <i class="far fa-star"></i>;

const Review = ({review}) => {
  const {name,img,comment,rating} = review;
  return (
      <Col>
        <Card className='h-100'>
          <Card.Img variant="top" src={img} className='img-size mx-auto'/>
          <Card.Body>
            <Card.Title>
              <h2 className='text-center py-3'>{name}</h2>
              <p className="text-center common-color">
                <Rating
                    initialRating={rating}
                    readonly
                    emptySymbol={halfStar}
                    fullSymbol= {fullStar}
                   
                  />
              </p>
            </Card.Title>
            <Card.Text>
              <p className='text-center'>{comment}</p>
            </Card.Text>
          </Card.Body>
        </Card>
    </Col>
  );
};

export default Review;