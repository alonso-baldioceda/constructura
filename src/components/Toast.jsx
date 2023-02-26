import React from "react"
import { object, func } from "prop-types"
import classNames from "classnames"

import IconSuccess from "./../images/svg/success.svg"
import IconAlert from "./../images/svg/alert.svg"

const Toast = ({ handleClose, conf }) => {
  const { heading, body, type, visible } = conf || ""

  return (
    <div
      className={classNames(
        "flex-row items-center bg-white border-2 fixed top-2 right-4 z-40",
        { flex: visible },
        { hidden: !visible },
        { "border-green-400": type === "success" },
        { "border-fire": type === "alert" }
      )}
    >
      <div
        className={classNames(
          "h-20 flex items-center px-2 sm:px-4",
          { "bg-green-400": type === "success" },
          { "bg-fire": type === "alert" }
        )}
      >
        {type === "success" && <IconSuccess />}
        {type === "alert" && <IconAlert />}
      </div>
      <div className="mx-2 sm:mx-4 w-60">
        <div className="font-semibold">{heading}</div>
        <div className="block text-gray-900"> {body}</div>
      </div>
      <button
        onClick={handleClose}
        className="rounded-full h-9 w-9 sm:h-7 sm:w-7 flex items-center justify-center border-2 border-gray-900 mr-2 sm:mr-4"
      >
        <svg
          className="h-3 w-3"
          viewBox="0 0 329.269 329"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M194.8 164.77L323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0" />
        </svg>
      </button>
    </div>
  )
}

Toast.propTypes = {
  conf: object,
  handleClose: func,
}

export default Toast
