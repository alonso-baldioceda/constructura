import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SwiperCore, { Navigation, Pagination, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "./../styles/swipe.css"

SwiperCore.use([Navigation, Pagination, A11y])

export const Slider = ({ images, content }) => {
  return (
    <Swiper
      slidesPerView={1}
      // navigation
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      className="relative bg-gray-800"
      // pagination={{ clickable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={`slide_${image.node.id}`} className="pb-0 lg:pb-0">
          <div className="flex flex-wrap overflow-hidden">
            <div className="lg:w-4/12 flex flex-col order-2 lg:order-1 px-4 py-4 lg:px-6 lg:py-6">
              <h1 className="mb-2 lg:mb-6 font-semibold lg:font-black text-xl tracking-normal text-turbo lg:text-2xl sm:leading-2">
                {content[index].title}
              </h1>
              <p className="text-white">{content[index].description}</p>
            </div>
            <div className="lg:w-8/12 order-1 lg:order-2">
              <GatsbyImage
                image={getImage(image.node.childImageSharp)}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="flex controls w-24 h-12 relative lg:absolute bottom-0 mx-4 mb-4 lg:mx-6 lg:mb-6">
        <button
          aria-label="Previous slide"
          className="control-button swiper-button-prev w-6 h-6 sm:w-7 sm:h-7 text-white bg-gray-700 hover:bg-turbo focus:outline-none focus:shadow-outline transition duration-150 ease-out m-0"
        ></button>
        <button
          aria-label="Next slide"
          className="control-button swiper-button-next w-6 h-6 sm:w-7 sm:h-7 text-white bg-gray-700 hover:bg-turbo focus:outline-none focus:shadow-outline transition duration-150 ease-out m-0"
        ></button>
      </div>
    </Swiper>
  )
}

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Slider
