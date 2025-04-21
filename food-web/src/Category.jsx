import React from 'react';
import { MdOutlineFreeBreakfast } from 'react-icons/md';
import { TiThSmallOutline } from 'react-icons/ti';
const Categories = [
{
    id:1,
    name:"All",
    icon:<TiThSmallOutline className='w-[60px] h-[60px] text-green-500'/>
},
{
    id:2,
    name:"breakfast",
    icon:<MdOutlineFreeBreakfast className='w-[60px] h-[60px] text-green-500'/>
    
},
{
    id:3,
    name:"soups",
    icon:<TiThSmallOutline className='w-[60px] h-[60px] text-green-500'/>
},
{
    id:4,
    name:"pasta",
    icon:<TiThSmallOutline className='w-[60px] h-[60px] text-green-500'/>
},
{
    id:5,
    name:"main_course",
    icon:<TiThSmallOutline className='w-[60px] h-[60px] text-green-500'/>
},
{
    id:6,
    name:"pizza",
    icon:<TiThSmallOutline className='w-[60px] h-[60px] text-green-500'/>
},
{
    id:7,
    name:"burger",
    icon:<TiThSmallOutline className='w-[60px] h-[60px] text-green-500'/>
}
]

export default Categories;