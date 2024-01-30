import { memo } from "react"


export const Small = memo(( { value }) => {
    memo
    console.log('Me volvi a dibujar :(')
  return (
    <small>{ value }</small>
  )
})
