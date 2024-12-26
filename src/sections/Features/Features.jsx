import React from 'react'
import { details, features } from '../../constants/index'
import { Element } from "react-scroll";
import { Link } from 'react-router-dom';
import Button from '../../components/Button';


const Features = () => {
  return (
    <section>
        <Element name="features">
            <div className="container">
                <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3"> 
                    {features.map(feature => (
                        <div key={feature.id} className='relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320'>
                            <div className="w-full flex flex-col justify-start items-start">
                                <div className=''>
                                    <img src={feature.icon} alt={feature.title} className='size-20 object-contain' />
                                </div>
                                <p className='caption mb-5 max-md:mb-6'>{feature.caption}</p>
                                <h2 className='max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5'>{feature.title}</h2>
                                <p className='mb-11 body-1 max-md:mb-8 max-md:body-3'>{feature.text}</p>
                                <Link to={feature.button.link}>
                                    <Button icon={feature.button.icon}>{feature.button.label}</Button>
                                </Link>
                            </div>
                        </div>
                    ))}

                    <ul className='relative -bottom-[1px] flex flex-grow justify-around px-[5%] border-2 border-s3 rounded-7xl max-md:hidden'>
                        {details.map(({id, icon, title}) => (
                            <li key={id} className='relative pt-16 px-4 pb-14'>
                                <div className='flex items-center justify-center mx-auto mb-3 rounded-full hover:shadow-[0_0_25px_rgba(255,204,0,0.8)] transition-all duration-500 size-20'>
                                    <img src={icon} alt={title} className='size-17/20 object-contain z-20' />
                                </div>
                                <h3 className='uppercase text-center max-w-36 base-small'>{title}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Element>
    </section>
  )
}

export default Features