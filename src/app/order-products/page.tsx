

'use client'
import { useRouter } from "next/navigation"; // Use 'next/navigation' if you're in the app directory

export default function OrderProducts() {
    const router = useRouter();
    
    const handleProduct = () => {
        console.log('place order');
        router.push('/');
    }

    return (
        <>
            <div>Products order</div>
            <button onClick={handleProduct}>Place order</button>
        </>
    )
}
