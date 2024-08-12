import React from 'react'

export default function productDetails({params}: {params : {productId: string}}) {
  return (
    <div>productDetails {params.productId}</div>
  )
}
