import React from "react"

import FadeInWhenVisible from "./../components/FadeInWhenVisible"

import IconPlan from "./../images/svg/plan.svg"
import IconListItem from "./../images/svg/boxArrow.svg"

const Services = ({ services }) => {
  return (
    <div className="grid gap-8 row-gap-10 sm:grid-cols-1 lg:grid-cols-2">
      {services.map((service, serviceIndex) => (
        <div key={`service-index${serviceIndex}`}>
          <FadeInWhenVisible>
            <div className="flex flex-row items-center justify-left mb-4 lg:mb-8">
              <div className="flex items-center w-12 h-12 sm:w-16 sm:h-16 justify-center rounded-full bg-turbo mr-3">
                <div className="flex-none">
                  <IconPlan className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
              </div>
              <h6 className="font-semibold leading-5">{service.title}</h6>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <ul className="lg:mb-4 -ml-1 space-y-2">
              {service.list.map((item, itemIndex) => (
                <li
                  className="flex items-start pl-4 sm:pl-6 md:pl-18 pr-10 sm:pr-14 leading-6"
                  key={`list-item${itemIndex}`}
                >
                  <div className="flex">
                    <span className="mr-6 sm:mr-8">
                      <IconListItem className="w-6 h-6" />
                    </span>
                    {item.title}
                  </div>
                </li>
              ))}
            </ul>
          </FadeInWhenVisible>
        </div>
      ))}
    </div>
  )
}

export default Services
