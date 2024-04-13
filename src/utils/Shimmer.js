import React from 'react'

const Shimmer = () => {
  return (
    <div>
        {Array(5).fill(0).map((e, index) => (
            <div>
                <div className='w-24'> </div>
                <div className='w-24 h-40 bg-gray-50'> </div>
            </div>
            ))}
    </div>
  )
}

export default Shimmer