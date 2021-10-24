import React from 'react';
import {NavLink} from 'react-router-dom'


const links = [
    {urls:'/search', text : '🔍 All'},
    {urls:'/news', text : '📰 News'},
    {urls:'/images', text : '📷 Images'},
    {urls:'/videos', text : '📺 Videos'},
]

function Links(props) {
    return (
        <div className='flex sm:justify-around justify-betweem items-center mt-4'>
            {links.map( ({urls,text}) => (
                <NavLink to={urls} className='m-2 mb-0' activeClassName='text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2'>
                    {text}
                </NavLink>
            ))}
        </div>
    );
}

export default Links;