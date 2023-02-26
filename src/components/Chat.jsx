import React, { useState } from "react"
import styled from "styled-components"
import classNames from "classnames"

import ChatIcon from "./../images/svg/chat.svg"
import WhatsappIcon from "./../images/svg/whatsapp.svg"
import MessengerIcon from "./../images/svg/messenger.svg"

export const ChatWrapper = styled.div`
  align-items: center;
  bottom: 1rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 1rem;
  z-index: 99999;

  @media (min-width: 768px) {
    bottom: 2rem;
    right: 2rem;
  }

  .chat {
    background: #fff;
    border: 2px solid #000;
    border-radius: 50%;
    cursor: pointer;
    height: 52px;
    padding: 10px;
    transition: all 0.25s;
    width: 52px;
    z-index: 99999;

    &.open {

    }
  }

  .whatsapp,
  .messenger {
    bottom: 12px;
    height: 40px;
    position: absolute;
    transition: all 0.25s ease-out;
    width: 40px;

    svg {
      height: 40px;
      width: 40px;
    }
  }

  .whatsapp {
    &.open {
      bottom: 76px;
      height: 46px;
      width: 46px;

      svg {
        height: 46px;
        width: 46px;
      }
    }
  }

  .messenger {
    &.open {
      bottom: 138px;
      height: 44px;
      width: 44px;

      svg {
        height: 44px;
        width: 44px;
      }
    }
  }
`

const Chat = ({ wa, me }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
    console.log("Open")
  }

  return (
    <ChatWrapper className="">
      <a
        href={me}
        target="_blank"
        rel="noreferrer"
        className={classNames("messenger", { open })}
      >
        <MessengerIcon />
      </a>
      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        className={classNames("whatsapp", { open })}
      >
        <WhatsappIcon />
      </a>
      <div
        className={classNames("chat", { open })}
        onClick={handleOpen}
        onKeyDown={handleOpen}
        role="button"
        tabIndex={0}
      >
        <ChatIcon />
      </div>
    </ChatWrapper>
  )
}

export default Chat
