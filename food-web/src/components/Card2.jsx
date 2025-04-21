import React, { use } from 'react'
// import image1 from '../assets/image1.avif'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { decItem, incItem, RemoveItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const Card2 = ({name, price, id, qty, image}) => {
  const dispatch = useDispatch();
  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between '>
      <div className='w-[60%] h-full  flex justify-between'>
        <div className='w-[50%] h-full overflow-hidden rounded-lg '>
          <img src={image} alt="" className='object-cover' />
        </div>
        <div className='w-[40%] h-full flex flex-col gap-5'>
          <div className='text-[20px] text-gray-600 font-semibold'>{name}</div>
          <div className='w-[110px] h-[50px] flex justify-center items-center rounded-lg shadow-lg font-semibold border-2 border-green-400 text-xl overflow-hidden'>
            <button className='w-[30%] hover:bg-gray-200 text-green-500  h-full bg-white flex justify-center items-center' onClick={()=> {qty>1? dispatch(decItem(id)): 1}}>-</button>
            <span className='w-[30%] text-green-500  h-full bg-slate-200 flex justify-center items-center'>{qty}</span>
            <button className='w-[30%] text-green-500 hover:bg-gray-200  h-full bg-white flex justify-center items-center' onClick={()=>dispatch(incItem(id))}>+</button>
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-col justify-start items-end gap-6'>
          <span className='text-green-500 font-semibold text-xl'>{price}</span>
          <RiDeleteBin6Line className='w-[30px] h-[30px] text-red-500  cursor-pointer' onClick={()=>{dispatch(RemoveItem(id))
            toast.success("Item Removed from Cart")
          }

          }  />
        </div>
      </div>
    </div>
  )
}

export default Card2