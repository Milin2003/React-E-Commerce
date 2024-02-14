import React from 'react'
import Star_icon from '../assets/star_icon.png'
import Star_Dullicon from '../assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className='flex gap-20 container mx-auto py-10'>
            <div className='flex flex-1'>
                <div className='flex flex-col gap-3'>
                    <img className='w-[150px] h-[150px] rounded-md' src={product.image} alt="" />
                    <img className='w-[150px] h-[150px] rounded-md' src={product.image} alt="" />
                    <img className='w-[150px] h-[150px] rounded-md' src={product.image} alt="" />
                    <img className='w-[150px] h-[150px] rounded-md' src={product.image} alt="" />

                </div>
                <div className=''>
                    <img className='w-[640px] pl-5' src={product.image} alt="" />
                </div>
            </div>
            <div className='flex-1 pr-24'>
                <p className='text-4xl font-semibold leading-tight mb-8'>{product.name}</p>
                <div className='flex gap-1 items-center mb-8'>
                    <img src={Star_icon} alt="" />
                    <img src={Star_icon} alt="" />
                    <img src={Star_icon} alt="" />
                    <img src={Star_icon} alt="" />
                    <img src={Star_Dullicon} alt="" />
                <p className='ml-2'>(122)</p>
                </div>
                <div className='flex font-semibold text-2xl mb-8'>
                    <p className='line-through text-gray-500 mr-3 '>${product.old_price}</p>
                    <p>${product.new_price}</p>
                </div>
                <div className='mb-8 leading-8'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, quidem! Autem eligendi culpa perspiciatis temporibus exercitationem, quisquam debitis vero eius delectus pariatur
                </div>
                <div>
                    <p className='text-2xl font-semibold mb-5'>Select Size</p>
                    <div className='flex mb-8'>
                        <p className='w-[50px] flex justify-center items-center mr-2 border-gray-500 h-[50px] border border-dashed'>S</p>
                        <p className='w-[50px] flex justify-center items-center mx-2 border-gray-500 h-[50px] border border-dashed'>M</p>
                        <p className='w-[50px] flex justify-center items-center mx-2 border-gray-500 h-[50px] border border-dashed'>L</p>
                        <p className='w-[50px] flex justify-center items-center mx-2 border-gray-500 h-[50px] border border-dashed'>XL</p>
                        <p className='w-[50px] flex justify-center items-center mx-2 border-gray-500 h-[50px] border border-dashed'>XXL</p>
                    </div>
                </div>
                <button className='px-10 py-3 bg-red-400 text-white font-semibold mb-8'>ADD TO CART</button>
                <p className='mb-2'><span className='font-semibold'>Category : </span> Women, T-shirt, Crop-top</p>
                <p><span className='font-semibold'>Tags : </span> Modern, Latest</p>
            </div>

        </div>
    )
}

export default ProductDisplay
