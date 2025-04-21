import React, { useContext } from 'react'
import Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { DataContext } from '../context/UserContext'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross2 } from 'react-icons/rx'
import Card2 from '../components/Card2'
import { toast } from 'react-toastify'
import { ClearCart, RemoveItem } from '../redux/CartSlice'


const Home = () => {

  const dispatch = useDispatch();

  const items = useSelector((state => state.cart));


  // console.log(items);
  const { cate, setCate, input, showCart, setShowCart } = useContext(DataContext);

  function filterCategory(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      const filteredItems = food_items.filter(item => item.food_category === category);
      setCate(filteredItems);
    }
  }
  const subtotal = items.reduce((total, item) => total + item.qty * item.price, 0);
  const delivery = 20;
  const texes = subtotal * 0.5 / 100;
  const total = Math.floor(subtotal + delivery + texes);
  return (
    <div className='w-full min-h-screen overflow-hidden'>
      {!input ?<div className=' flex flex-wrap justify-center items-center gap-6 w-[100%] '>
        {Categories.map((item, index) => {
          return <div key={index} className='w-[120px] h-[150px] bg-white flex flex-col gap-5 p-5 items-start justify-start font-semibold text-gray-500 rounded-lg shadow-lg hover:bg-green-300 cursor-pointer transition-all ' onClick={() => filterCategory(item.name)}>
            {item.icon}
            {item.name}
          </div>
        })}
      </div> : null
      }

      {
        cate.length > 0 ?
          <div className=' flex flex-wrap justify-center items-center  w-[100%]   mx-auto gap-2 px-2  pt-3 pb-8'>
            {cate.map((item, index) => {
              return <Card key={index} name={item.food_name} image={item.food_image} price={item.price} type={item.food_type} id={item.id} />
            })}
          </div> :
          <div className='w-[100%] mx-auto h-[100%] flex justify-center items-center'>
            <span className='text-gray-500 font-semibold text-lg'>No Items Found</span>
          </div>
      }



      <div className={` w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-lg p-8 translate-all duration-500 ${showCart ? "translate-x-0" : "translate-x-full"} overflow-auto `}>
        <header className='w-[100%] flex justify-between items-center'>
          <span className='text-green-500 text-[20px] font-semibold mt-11'>order items</span>
          <RxCross2 className=' mt-11 w-[40px] h-[20px] text-green-500 text-[30px] font-bold cursor-pointer hover:text-gray-500' onClick={() => setShowCart(false)} />
        </header>
        {items.length > 0 ?
          <>
            <div className='w-full mt-6 flex flex-col gap-8'>
              {items.map((item, index) => {
                return (
                  <Card2
                    key={index}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    id={item.id}
                    qty={item.qty}
                  />
                );
              })}
            </div>
            <div className='w-full border-t-2 border-gray-400 mt-3 flex flex-col gap-2 p-5 '>
              <div className='flex justify-between items-center '>
                <span className='text-gray-500 font-semibold text-lg'>Subtotal</span>
                <span className='text-green-500 font-semibold text-lg'>Rs {subtotal}</span>
              </div>
              <div className='flex justify-between items-center '>
                <span className='text-gray-500 font-semibold text-lg'>Delivery</span>
                <span className='text-green-500 font-semibold text-lg'>Rs {delivery}</span>
              </div>
              <div className='flex justify-between items-center '>
                <span className='text-gray-500 font-semibold text-lg'>Texes</span>
                <span className='text-green-500 font-semibold text-lg'>Rs {texes}</span>
              </div>
            </div>
            <div className='w-full border-t-2 border-b-2 border-gray-400  flex flex-col gap-4 p-5 '>
              <div className='flex justify-between items-center '>
                <span className='text-gray-500 font-semibold text-lg'>total</span>
                <span className='text-green-500 font-semibold text-lg'>Rs {total}</span>
              </div>
            </div>

            <div>
              <button className='w-[60%] p-3 mt-2 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-400 transition-all' onClick={()=> {dispatch(ClearCart()) 
                toast.success("order placed")}}>Place Order</button>
            </div>
          </>
          : <div className='p-8'>
            <span className='text-gray-500 font-semibold text-lg'>No Items in Cart</span>
          </div>
        }
      </div>

    </div>
  )
}

export default Home