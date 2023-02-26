import React from "react"
import classNames from "classnames"

const Hero = ({ data }) => {
  const { title, description } = data

  return (
    <div className="relative flex flex-col py-12 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-12 lg:my-20 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl">
            <h1 className="text-3xl leading-none font-black text-gray-900 sm:text-4xl mb-8 tracking-wide">
              {title}
            </h1>
            {description.map((item, index) => {
              const isLast = description.length !== index + 1
              return (
                <p
                  className={classNames(
                    "text-base text-gray-900 md:text-lg",
                    { "pb-0": isLast },
                    { "pb-4": !isLast }
                  )}
                  key={`hero-description-paragraph${index}`}
                >
                  {item.text}
                </p>
              )
            })}
          </div>
          <div className="flex flex-col items-center md:flex-row">
            {/* <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Apply Now
          </a>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            Learn more
          </a> */}
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-76 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          alt=""
        />
      </div>
    </div>
  )
}

export default Hero
