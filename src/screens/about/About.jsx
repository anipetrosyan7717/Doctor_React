import { Link,Outlet } from 'react-router-dom'

export default function About(){
    return (
        <div>
            About Screen
            <Link to='/about/company'>About</Link>
            <Outlet />
            <p>About jsx-i mej</p>
        </div>
    )
}