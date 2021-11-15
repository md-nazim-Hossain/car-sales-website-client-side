import React, { useEffect, useState } from "react";
import SwiperCore, {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import "./Reviews.css";
import { Card, Spinner } from "react-bootstrap";
import Rating from "react-rating";
import useAuth from "../../hooks/useAuth";
import 'swiper/swiper-bundle.css';
SwiperCore.use([Pagination]);


const fullStar = <i className="fas fa-star"></i>;
const halfStar = <i className="far fa-star"></i>;

const Reviews  = () =>{
    const [reviews,setReviews] = useState([]);
    const {isLoading,setIsLoading} = useAuth();

    useEffect(() =>{
        setIsLoading(true)
        fetch('https://agile-caverns-35035.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
        .finally(() =>{
            setIsLoading(false)
        });
    },[setIsLoading]);
    
    if(isLoading){
        return <div className="text-center p-5 my-5">
                <Spinner animation="grow" />
            </div>
    }    
    
  return (
        <div className='bg-white pb-5'>
            <p className='text-center common-color pt-5'>Our customer says about our service</p>
            <h2 className='text-center pb-5'>Test<span className='common-color'>monials</span></h2>
            <Swiper slidesPerView={3} spaceBetween={30} pagination={{
                "clickable": true
                }} className="mySwiper"
                
                breakpoints={{
                    300:{
                        width:300,
                        slidesPerView: 1,
                    },
                    // when window width is >= 640px
                    640: {
                      width: 640,
                      slidesPerView: 1,
                      spaceBetween:20
                    },
                    // when window width is >= 768px
                    768: {
                      width: 768,
                      slidesPerView: 2,
                      spaceBetween:30
                    },
                  }}
                >
                {
                    reviews.map(review =><SwiperSlide key={review._id}>
                            <Card className='h-100'>
                            <Card.Img variant="top" src={review.img} className='img-size mx-auto'/>
                            <Card.Body>
                                <Card.Title>
                                <h2 className='text-center py-3'>{review.name}</h2>
                                <p className="text-center common-color">
                                    <Rating
                                        initialRating={review.rating}
                                        readonly
                                        emptySymbol={halfStar}
                                        fullSymbol= {fullStar}
                                    
                                    />
                                </p>
                                </Card.Title>
                                <Card.Text>
                                <p className='text-center'>{review.comment}</p>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
  )
}
export default Reviews;