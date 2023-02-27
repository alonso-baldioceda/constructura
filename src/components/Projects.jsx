import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"

import Card from "../components/Card"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      portfolio: allContentfulPortfolio {
        nodes {
          ...PortfolioCard
        }
        usedCategories: distinct(field: category)
      }
    }
  `)

  const { portfolio } = data

  const [checkedState, setCheckedState] = useState(
    new Array(portfolio.usedCategories.length).fill(true)
  )

  const [activeFilters, setActiveFilters] = useState(portfolio.usedCategories)

  const handleOnChange = (event, position) => {
    const tmp = [...activeFilters]

    if (tmp.includes(event.target.name)) {
      tmp.splice(tmp.indexOf(event.target.name), 1)
    } else {
      tmp.push(event.target.name)
    }

    setActiveFilters(tmp)

    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )

    setCheckedState(updatedCheckedState)
  }

  return (
    <div className="py-8 mx-auto max-w-xl lg:max-w-full lg:py-12">
      <div className="sm:flex justify-between mb-8 sm:mb-12">
        <h1 className="font-black text-2xl leading-none tracking-tight text-deepBlue pb-8 lg:text-3xl sm:pb-0">
          Proyectos
        </h1>
        <div className="sm:flex sm:justify-between sm:items-center  ">
          {portfolio.usedCategories.map((filter, index) => {
            const isLast = portfolio.usedCategories.length !== index + 1
            return (
              <label
                className={classNames("flex", { "mr-6 mb-3 sm:mb-0": isLast })}
                key={`filter-key-${index}`}
              >
                <input
                  type="checkbox"
                  id={`filter-checkbox-${index}`}
                  name={filter}
                  value={filter}
                  checked={checkedState[index]}
                  onChange={(event) => handleOnChange(event, index)}
                  className=" h-7 w-7 opacity-0 absolute"
                />
                <div
                  className="bg-white border-2 rounded-md w-7 h-7 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
                  style={{ borderColor: "#072b63" }}
                >
                  <svg
                    className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
                    version="1.1"
                    viewBox="0 0 17 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <g
                        transform="translate(-9 -11)"
                        fill="#072b63"
                        fillRule="nonzero"
                      >
                        <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="ml-2 font-bold text-gray-700">{filter}</span>
              </label>
            )
          })}
        </div>
      </div>
      {activeFilters.length > 0 ? (
        <div className="flex flex-wrap -mx-3 lg:-mx-3">
          {portfolio.nodes.map((item) => {
            const isThere = activeFilters.includes(item.category[0])
            return (
              <div
                className={classNames(
                  "w-full sm:w-1/2 lg:w-1/3 p-3 transition duration-500 ease-out",
                  { block: isThere },
                  { hidden: !isThere }
                )}
                key={item.id}
              >
                <Card {...item} />
              </div>
            )
          })}
        </div>
      ) : (
        <div>
          No hay filtros seleccionados{" "}
          <span role="img" aria-label="no filters active">
            😔
          </span>
        </div>
      )}
    </div>
  )
}

export default Projects
