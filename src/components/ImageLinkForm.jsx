import React from 'react'

const ImageLinkForm = () => {
    return (
        <>
            <div >
                <h2 className='text-center text-xl text-white'>This Magic Brain will detect faces in your pictures. Give it a try!</h2>
                <div className='flex justify-center items-center pt-3'>
                    <input className='rounded-l-md p-4 w-[40%] outline-none' type="text" />
                    <button className='rounded-r-md w-[20%] p-4  text-white bg-purple-400'>Detect</button>
                </div>
            </div>
        </>
    )
}

export default ImageLinkForm
