import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({Links,title}) => {
    return <ul className='text-left'>
        <h1 className='mb-1 font-semibold'>{title}</h1>
        {Links.map((link)=>(
            <li key={link.name}>
                <a className='text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer' href={link.link} download={link.isDownload?link.name:undefined}>{link.name}</a>
            </li>
        ))
    }
    </ul>
};

export default Item;