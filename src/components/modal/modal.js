import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const modalsRoot = document.querySelector('#modals-root')

const Modal = ({ show, onClose, className, children, ...props }) => {
  const elRef = useRef(null)

  useEffect(() => {
    console.log(modalsRoot)
    const el = document.createElement('div')
    modalsRoot.appendChild(el)
    elRef.current = el

    return () => {
      modalsRoot.removeChild(el)
    }
  }, [])

  console.log(elRef)
  if (!elRef.current) return null
  console.log('show', show)
  return createPortal(
    <div
      className={classnames(
        className,
        'fixed',
        'top-0',
        'right-0',
        'bottom-0',
        'left-0',
        'flex',
        'items-center',
        'justify-center',
        'z-50',
        {
          hidden: !show,
        }
      )}
      {...props}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-20 z-2"></div>
      <div className="relative max-w-6xl w-full bg-gray-900 z-5">
        <div className="p-5">{children}</div>
      </div>
    </div>,
    elRef.current
  )
}

export default Modal
