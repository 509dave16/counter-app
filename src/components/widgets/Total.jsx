import * as React from 'react'
import { textSize } from '../../config/styles'
import { getNumberAsCurrency } from '../../utils/format'

export default function Total({ items }) {
  return (
    <span style={textSize}>
      {'Total - ' + getNumberAsCurrency(items.reduce((totalItemPrice, item) => totalItemPrice + (item.price * item.count), 0))}
    </span>
  )
}