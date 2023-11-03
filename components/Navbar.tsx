import Link from "next/link";

const Navbar = () => {
    return (
        // Nav should have a minimum height of 100vh and a width of 200px
        <div className="min-h-screen w-48 bg-gray-100">
        <nav>
        <ul>
            <li>
            <Link href="/">
                Home
            </Link>
            </li>
        </ul>
        </nav>
        </div>
    );
    }

export default Navbar;