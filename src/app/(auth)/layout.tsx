'use client';
import Link from "next/link"
import { usePathname } from "next/navigation";
import './style.css'

const navLinks = [
    {name:"Register", href:'/register'},
    {name:"Login", href:'/login'},
    {name:"Forgot PassWord", href:'/forgotPassword'},
]

export default function AuthLayout({
    children,
}:{
    children:React.ReactNode;
}) {
    const pathname = usePathname()
  return (
    <div>
        {navLinks.map((link)=>{
            const isActive =  pathname.startsWith(link.href)
        return(
            <Link href={link.href} key={link.name}
            className={isActive? 'font-bold mr-2 text-red-400' : 'font-light text-blue-900 mr-2'}>
            {link.name}
            </Link>
        )
    })}
    {children}
    </div>
  )
}
