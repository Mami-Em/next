import Link from "next/link"

export default function Nav() {
    return (
        <nav className="">
            <ul className="flex m-6 gap-x-8">
                <li className="hover:text-gray-500">
                    <Link href='/'>Home</Link>
                </li>
                <li className="hover:text-gray-500">
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}