import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({params}: Props) : Metadata =>{
  const title = await new Promise ((resolve)=>{
    setTimeout (()=>{
      resolve(`iphone${params.productId}`)
    },100)
  })
  return{
    title: `Product ${title}`
  }
}

export default function productDetails({ params }: Props) {
  return <div>About Product Details {params.productId}</div>;
}
