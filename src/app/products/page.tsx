import Link from 'next/link'


export default function ProductList() {
  const productId = 10;
  return (
    <div>ProductList
      <Link href='/'>Go back home</Link>
       <h2><Link href='/products/1'>Product 1</Link></h2> 
       <h2><Link href='/products/2'><p>Product 2</p></Link></h2> 
       <h2><Link href='/products/3' replace><p>Product 3</p></Link></h2> 
       <h2><Link href={`/products/${productId}`}><p>Product {productId}</p></Link></h2> 
        
    </div>
    
  )
}
