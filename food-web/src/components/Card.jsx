import React from 'react'
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from 'react-icons/lu';
import { GiChickenOven } from 'react-icons/gi';
import { AddItem } from '../redux/CartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Card = ({ name, image, price, type, id }) => {
    const dispatch = useDispatch();

    return (
        <div className='w-[280px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 hover:border-2 border-green-500 '>
            <div className='w-[100%] h-[60%] overflow-hidden rounded-lg shadow-lg '>
                <img src={image} alt="" className='object-cover' />
            </div>
            <div className='font-semibold text-2xl'>
                {name}
            </div>
            <div className='flex w-full justify-between items-center '>
                <div className='text-green-500 text-lg font-bold'>Rs.{price}</div>
                <div className='text-green-500 text-lg font-semibold flex justify-center items-center gap-1'>
                    {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
                    <span>{type}</span>
                </div>
            </div>

            <button className='w-full p-3 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-400 transition-all' onClick={() => {dispatch(AddItem({ id: id, name: name, price: price, qty: 1, image: image }))
                toast.success("Item Added to Cart")
        }}>Add to Dish </button>

        </div>
    )
}

export default Card