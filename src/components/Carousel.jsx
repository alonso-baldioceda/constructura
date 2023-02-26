import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SwiperCore, { Navigation, Pagination, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./../styles/swipe.css"

SwiperCore.use([Navigation, Pagination, A11y])

export const Carousel = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true }}
    >
      {images.map((image) => (
        <SwiperSlide key={`slide_${image.id}`}>
          <GatsbyImage image={getImage(image.localFile)} alt={image.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Carousel
