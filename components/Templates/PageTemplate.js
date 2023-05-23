// component
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';

export default function PageTemplate({ children }) {
    return (
        <>
            <NavBar />
            {children}
            {/* <Slider /> */}
            <Footer />
        </>
    );
}
