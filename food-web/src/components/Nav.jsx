import { useDispatch, useSelector } from 'react-redux';
import { MdFastfood } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';
import { LuShoppingBag } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { loginUser, logoutUser } from '../redux/authSlice';
import { useContext, useEffect } from 'react';
import { DataContext } from '../context/UserContext';
import { food_items } from '../food';

const Nav = () => {
    const { input, setInput, cate, setCate, showCart, setShowCart } = useContext(DataContext);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const items = useSelector((state) => state.cart);
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        // Filter food items based on the search input
        const searchItem = food_items.filter(item =>
            item.food_name.toLowerCase().includes(input.toLowerCase())
        );

        // Update state with the filtered items
        setCate(searchItem);

    }, [input]);

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/login');
    };

    return (
        <div className="w-full fixed top-0 left-0 z-50 flex flex-row justify-between items-center px-5 pt-2 pb-2 md:px-8 bg-gray-100 shadow-md gap-3">
            {/* Logo */}
            <div className="flex-shrink-0 w-[40px] h-[40px] bg-white flex justify-center items-center rounded-md shadow-xl">
                <MdFastfood className="w-[30px] h-[30px] text-green-500" />
            </div>

            {/* Search Bar (Hidden on Mobile) */}
            <form
                onSubmit={(e) => e.preventDefault()}
                className="hidden md:flex gap-4 items-center w-full md:w-[40%] h-[40px] px-4 bg-white rounded-md shadow-xl"
            >
                <IoSearch className="text-green-500 text-lg" />
                <input
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    type="text"
                    placeholder="Search items..."
                    className="w-full outline-none text-sm"
                />
            </form>

            {/* User & Cart */}
            <div className="flex items-center gap-4">
                {user?.name ? (
                    <div className="flex items-center gap-3">
                        <span className="text-gray-700 font-medium bg-green-100 px-3 py-1.5 rounded-md shadow-sm text-sm">
                            Hello, {user.name}
                        </span>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white text-sm px-3 py-1.5 rounded-md hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <a
                        href="/login"
                        className="text-sm text-gray-700 bg-blue-100 px-4 py-2 rounded-md shadow-md hover:bg-blue-200 transition"
                    >
                        Login
                    </a>
                )}

                {/* Cart */}
                <div
                    className="relative w-[40px] h-[40px] bg-white flex justify-center items-center rounded-md shadow-xl"
                    onClick={() => setShowCart(true)}
                >
                    <span className="absolute top-0 right-1 text-green-600 text-xs font-bold">
                        {items?.length || 0}
                    </span>
                    <LuShoppingBag className="w-[24px] h-[24px] text-green-500" />
                </div>
            </div>
        </div>
    );
};

export default Nav;