import React, { useState } from 'react'
import ModalContext from '../Contexts/ModalContext'

export default (props) => {
  const [ modalIsOpen, setModalIsOpen ] = useState(true)
  const [ modalHeadingText, setModalHeadingText ] = useState("Attention")
  const [ modalContentText, setModalContentText ] = useState("My portfolio as well as all my projects, were made using my own creative mind and NOT created by following a tutorial. I take pride in that even if it means I have very few projects being shown.")

  const state = {
    modalIsOpen,
    setModalIsOpen,
    modalHeadingText,
    setModalHeadingText,
    modalContentText,
    setModalContentText
  }
  
  return (
    <ModalContext.Provider value={state}>
      {props.children}
    </ModalContext.Provider>
  )
}