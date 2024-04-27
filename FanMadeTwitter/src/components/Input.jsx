import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type='text',
    className='',
    ...props
}, ref){
    const id= useId()
    return (
        <div className='w-full'>
            {label && <label
            className='inline-block mb-1 pl-1'
            htmlFor={id} >
                {label}
            </label>}
            <input
            type={type}
            className={`px-2 py-3 bg-white text-black rounded-lg w-full border border-gray-50 focus:outline-none focus:border-gray-200
            ${className}`}
            ref={ref}
            id={id}
            {...props}
            />
        </div>
    )
})
export default Input