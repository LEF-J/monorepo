import React from 'react';

function FourthPage() {
    const images = [
        'https://placeimg.com/640/640',
        'https://placeimg.com/640/640',
        'https://placeimg.com/640/640'
    ];
    
    return (
        <section id='fourth' className='flex flex-col items-start justify-start my-16 p-2 w-full lg:p-0 lg:pl-60'>
            <h2 className='p-4 text-3xl font-bold'>Nisl nisi scelerisque eu ultrices</h2>
            <div className='flex overflow-x-scroll'>
                {
                    images && images.map((image, index) => {
                        return (
                            <img 
                                key={index} 
                                src={image}
                                className='p-4 w-11/12 lg:w-5/12 lg:p-2'
                            />
                        )
                    })
                }
            </div>
        </section>
    );
}

export default FourthPage;