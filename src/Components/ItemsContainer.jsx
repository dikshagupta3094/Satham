import Item from './Item.jsx';
import {Downloads,  Admission , DigitalLibrary, Miscellaneous } from "../Constants/Menus.js"
// import final_bg from './assets/final_bg.jpg'
const ItemsContainer = () => {
    return (<div className='bg-blue-950 p-0'>
        <div className='md:bg-[url("./assets/final_bg.jpg")] mt-0 mb-0 bg-no-repeat bg-[length:15%_auto] -z-0 bg-center bg-blue-950 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-10 px-5 py-16 ml-10 mr-10'>
        <Item className="z-10" Links={Admission} title="Admission"/>
        <Item className="z-10" Links={Miscellaneous} title="Miscellaneous"/>
        <Item  className="z-10" Links={Downloads} title="Downloads"/>
        <Item  className="z-10" Links={DigitalLibrary} title="Digital Library"/>
        
    </div>
    <hr className="mt-8 border-t-1 border-gray-400 w-[90%] mx-auto z-10" />
    <div className='text-gray-400 grid grid-cols-1 sm:grid-cols-2 gap-20 sm:px-20 px-20 py-5'>
       <ul className='text-left '>
         <li>©School of Aviation, Tourism and Hospitality- 452001 <a href='mailto:head.sathm@dauniv.ac.in'><svg xmlns="http://www.w3.org/2000/svg"  fill="teal" className="size-6 inline">
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            </a>
         </li>
       </ul> 
       <ul mt-3><li className='text-left sm:text-right'>About Developers</li></ul>
       </div>
    </div>
    );};

export default ItemsContainer;