import React from "react"
import { arrayOf, object } from "prop-types"
import classNames from "classnames"

const ReachUs = ({ data }) => {
  return (
    <div className="max-w-xl max-w-full">
      {data.map((card, cardIndex) => (
        <div
          key={`card-index${cardIndex}`}
          className={classNames({
            "pb-5": data.length !== cardIndex + 1,
          })}
        >
          <div className="flex flex-row items-center justify-left">
            <div className="flex items-center w-14 h-14 justify-center rounded-full bg-green-300 mr-4">
              <img
                src={`/${card.iconUrl}`}
                className="w-5 h-5"
                alt={`${card.iconUrl} icon`}
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 leading-5 text-lg sm:text-lg">
                {card.title}
              </h3>

              {card.list.map((item, itemIndex) => (
                <div key={`list-item${itemIndex}`}>
                  <p className="text-base text-gray-900 md:text-lg">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

ReachUs.propTypes = {
  data: arrayOf(object).isRequired,
}

export default ReachUs
