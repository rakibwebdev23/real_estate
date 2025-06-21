import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Container from './Container';
import { FaBuildingColumns } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <nav className="w-full py-6 fixed top-0 z-50">
            <Container>
                <div className="flex items-center justify-between">
                    <div className='flex items-center justify-between gap-16'>
                        <div className="flex items-center space-x-2">
                            <FaBuildingColumns className='text-[#DBFB1E] text-2xl'></FaBuildingColumns>
                            <span className="text-white text-lg font-semibold">
                                HomeQuest</span>
                        </div>
                        <ul className="hidden md:flex space-x-6 text-white font-medium items-center">
                            <li>
                                <NavLink
                                    to="/projects"
                                    className="px-3 py-1 border border-white rounded-full hover:text-[#DBFB1E]"
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services" className="hover:text-[#DBFB1E]">
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="hover:text-[#DBFB1E]">
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/testimonials" className="hover:text-[#DBFB1E]">
                                    Testimonials
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="hidden lg:block text-white font-semibold">
                            +21 934 748 392
                        </span>
                        <div className='rounded-full p-3 cursor-pointer backdrop-blur-xl'>
                            <FaSearch className="text-white" />
                        </div>
                        <button className="ml-2 bg-[#DBFB1E] text-black font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                            Get a Quote
                            <span className="text-xl">➜</span>
                        </button>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
