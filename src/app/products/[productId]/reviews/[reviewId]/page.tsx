import React from 'react'

export default function ReviewDetails({params,}:{
    params:{
        reviewId: string;
        productId: string;
    }
}) {
  return (
    <div>ReviewDetails{params.reviewId} products base {params.productId}</div>
  )
}
