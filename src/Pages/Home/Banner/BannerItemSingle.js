import React from 'react';

const BannerItemSingle = ({slide}) => {
    const { image, id, prev, next } = slide;
    console.log(slide);
    return (

        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='w-full img-carusel '>
                <img src={image} className="w-full max-h-[500px] object-cover rounded-lg" alt='' />
            </div>

            <div className="absolute flex transform -translate-y-1/2 left-5 top-1/2 text-white text-6xl font-bold">
                <p>Affordable <br />
                    Price for Car <br />
                    Servicing</p>
            </div>
            <div className="absolute flex transform -translate-y-1/2 right-5 bottom-5">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItemSingle;