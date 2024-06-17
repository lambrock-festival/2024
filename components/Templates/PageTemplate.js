// component
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';

export default function PageTemplate({ children }) {
    return (
        <>
            {/* navbar */}
            <div className="p-3 pt-0">
                <NavBar />
            </div>
            {children}
            {/* <Slider /> */}
            <Footer />
        </>
    );
}
