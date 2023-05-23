import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
export default function Template({ children }) {
    return (
        <>
            <title>lambrock festival 2023</title>
            <NavBar />
            {children}
            <Footer />
        </>
    );
}

