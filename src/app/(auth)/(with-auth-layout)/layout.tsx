export default function AuthLayout({
    children,
}:{
    children:React.ReactNode
}) {
    return(
        <div>
            <h2>Inner Auth</h2>
            {children}
        </div>
    )
}