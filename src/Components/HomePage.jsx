import IconCart from '../assets/IconCart.svg';
import ImageAvatar from "../assets/ImageAvatar.png";
import img1Thumb from '../assets/ImageProduct1Thumbnail.jpg';
import img1 from '../assets/ImageProduct1.jpg';
import img2Thumb from '../assets/ImageProduct2Thumbnail.jpg';
import img2 from '../assets/ImageProduct2.jpg';
import img3Thumb from '../assets/ImageProduct3Thumbnail.jpg';
import img3 from '../assets/ImageProduct3.jpg';
import img4Thumb from '../assets/ImageProduct4Thumbnail.jpg';
import img4 from '../assets/ImageProduct4.jpg';
import IconNext from '../assets/IconNext.svg'
import IconMenu from '../assets/IconMenu.svg'
import IconPrevious from '../assets/IconPrevious.svg'
import IconDelete from "../assets/IconDelete.svg"
import {useState} from "react";
export const HomePage = () =>{ 
 const images = [
  { thumb: img1Thumb, full: img1 },
  { thumb: img2Thumb, full: img2 },
  { thumb: img3Thumb, full: img3 },
  { thumb: img4Thumb, full: img4 },
];
    const [currentIndex,setCurrentIndex]=useState(0);
    const [isOpen,setIsOpen] =useState(false);
    const [quantity,setQuantity]=useState(0);
    const [cartItems,setCartItems]=useState(0);
    const [activeIndex,setActiveIndex]=useState(0);
    const [cartOpen, setCartOpen]=useState(0);
    //const [index, setIndex]=useState(0)
const [menuOpen, setMenuOpen] = useState(false);
    const originalPrice=250.00;
    const discount=0.5;
    const discountedPrice= originalPrice*(1-discount);

    const  next =()=>{
       const newIndex=(currentIndex+1)%images.length;
       setCurrentIndex(newIndex)
       setActiveIndex(newIndex);
        
    };
    const prev=()=>{
    const newIndex =currentIndex===0? images.length-1:currentIndex-1;
    setCurrentIndex(newIndex)
    setActiveIndex(newIndex)
     
    };
    const increase =()=>
        setQuantity((prev) =>prev+1);
    

    const decrease=()=> 
        setQuantity((prev)=>(prev >0 ? prev-1:0));

    const addToCart=()=>{ 
        setCartItems((prev)=>(prev +quantity));
        setQuantity(0);
    }
    const total=cartItems* discountedPrice;


    return ( 
    <>
   
<nav className="flex items-center p-5">

  {/* MOBILE MENU OVERLAY */}
  {menuOpen && (
    <div
      className="fixed inset-0 z-50 bg-black/50 cursor-pointer"
      onClick={() => setMenuOpen(false)}
    >
      
      <div
        className="bg-white w-2/3 max-w-xs h-full p-5 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="text-xl font-bold mb-5 self-start"
        >
          x
        </button>

        <ul className="flex flex-col p-3 gap-5">
          <li><a href="#" className="text-2xl font-bold">Sneakers</a></li>
          <li><a href="#" className='items-center text-gray-800 font-medium hover:border-[hsl(26,100%,55%)] border-b-3 transition border-transparent '>Collections</a></li>
          <li><a href="#" className='items-center text-gray-800 font-medium hover:border-[hsl(26,100%,55%)] border-b-3 transition border-transparent '>Men</a></li>
          <li><a href="#" className='items-center text-gray-800 font-medium hover:border-[hsl(26,100%,55%)] border-b-3 transition border-transparent '>Women</a></li>
          <li><a href="#" className='items-center text-gray-800 font-medium hover:border-[hsl(26,100%,55%)] border-b-3 transition border-transparent '>About</a></li>
          <li><a href="#" className='items-center text-gray-800 font-medium hover:border-[hsl(26,100%,55%)] border-b-3 transition border-transparent '>Contact</a></li>
        </ul>

      </div>
    </div>
    
  )}

  {/* MOBILE MENU ICON */}
  <img
    src={IconMenu}
    alt="menu"
    className="w-6 h-6 cursor-pointer lg:hidden"
    onClick={() => setMenuOpen(true)}
  />

  {/* DESKTOP NAV */}
  <ul className="hidden lg:flex gap-6 ml-6">
    <li className="text-2xl font-bold">Sneakers</li>
    <li><a href="#" className='items-center text-gray-800 font-medium hover:border-[hsl(26,100%,55%)] border-b-3 transition border-transparent '>Collections</a></li>
    <li><a href="#" className='items-center text-gray-800 font-medium hover:border-[hsl(26,100%,55%)] border-b-3 transition border-transparent '>Men</a></li>
    <li><a href="#" className='items-center text-gray-800 font-medium hover:border-[hsl(26,100%,55%)] border-b-3 transition border-transparent '>Women</a></li>
    <li><a href="#" className='items-center text-gray-800 font-medium hover:border-[hsl(26,100%,55%)] border-b-3 transition border-transparent '>About</a></li>
    <li><a href="#" className='items-center text-gray-800 font-medium hover:border-[hsl(26,100%,55%)] border-b-3 transition border-transparent '>Contact</a></li>
  </ul>

  {/* RIGHT SIDE (cart + avatar) */}
  <div className="ml-auto flex items-center gap-3 relative">
    
    <div
      className="relative cursor-pointer"
      onClick={() => setCartOpen(!cartOpen)}
    >
      <img src={IconCart} alt="icon cart" className="w-5 h-5" />

      {quantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1 rounded-full">
          {quantity}
        </span>
      )}
    </div>

    <img
      src={ImageAvatar}
      alt="avatar"
      className="w-8 h-8 cursor-pointer"
    />

    {cartOpen && (
      <div className="absolute right-0 top-12 w-80 bg-white shadow-xl border border-gray-200 rounded-md z-50">
        
        <div className="p-4">
          <p className="font-bold">Cart</p>
        </div>

        <div className="border-t border-gray-200"></div>

        <div className="p-4">
          {quantity === 0 ? (
            <div className="flex justify-center items-center h-24">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              
              <img
                src={images[currentIndex].full}
                alt=""
                className="w-12 h-12 rounded-md"
              />

              <div className="flex-1">
                <p className="text-sm">
                  Fall Limited Edition Sneakers
                </p>

                <p className="text-gray-500 text-sm">
                  $125.00 x {quantity}{" "}
                  <span className="font-bold text-black">
                    ${125 * quantity}.00
                  </span>
                </p>
              </div>

              <button
                onClick={() => setQuantity(0)}
                className="cursor-pointer"
              >
                <img src={IconDelete} alt="" />
              </button>
            </div>
          )}

          {quantity > 0 && (
            <div className="flex justify-center items-center p-2">
              <button className="text-sm font-bold cursor-pointer bg-[hsl(26,100%,55%)] w-full h-10 rounded-md flex justify-center items-center">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
</nav>
<div className="border-t border-gray-300"></div>


<div className=' max-w-5xl  mx-auto  flex flex-col lg:flex-row items-start px-2  py-2 gap-10'>
    
<div className=" lg:w-1/2 flex gap-5 flex-col max-w-5xl  mx-auto">

  {/* IMAGE + ARROWS CONTAINER */}
  <div className=" w-lg  relative flex justify-center  " >

    <img
   
      src={images[activeIndex].full}
      alt="product"
      className=" w-auto lg:w-80 rounded-md cursor-pointer lg:rounded-2xl mx-auto  "
      onClick={() => setIsOpen(true)}
    />

    {/* LEFT ARROW (mobile only) */}
    <button
      onClick={prev}
      className="absolute left-16 top-1/2 -translate-y-1/2 bg-white rounded-full p-2  cursor-pointer lg:hidden active:scale-90 hover:scale-110"
    >
      <img
         className="w-4 h-4 fill-black group-hover:fill-[hsl(26,100%,55%)] transition "
      viewBox="0 0 12 18"
        fill="none"
        viewBox="0 0 12 18"
        src={IconPrevious}
      />
        
     
    </button>

    {/* RIGHT ARROW (mobile only) */}
    <button
      onClick={next}
      className="absolute right-16 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 cursor-pointer lg:hidden active:scale-90 hover:scale-"
    
    >
      <img src={IconNext} alt="" className="w-4 h-4" />
    </button>

  </div>

  {/* THUMBNAILS */}
  <div className="hidden lg:flex  p-2 justify-center gap-5 ">
    {images.map((img, index) => (
      <div
        key={index}
        onClick={() => { 
          setActiveIndex(index)
          setCurrentIndex(index)

        }}
        className={`
          w-[15%] lg:w-19 p-1 rounded-md cursor-pointer transition
          ${
            activeIndex === index
              ? "bg-[hsl(219,9%,45%)] opacity-70"
              : "hover:bg-[hsl(219,9%,45%)]"
          }
        `}
      >
        <img
          src={img.thumb}
          alt=""
          className=" w-full h-full object-cover rounded-md"
        />
      </div>
    ))}
  </div>

</div>
<div className=' w-full lg:w-1/2flex items-center px-2 py-2 gap-2'>
{isOpen && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    
    <div className="  relative  p-4 rounded-lg flex items-center gap-4">

      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-2 right-2  cursor-pointer text-[hsl(26,100%,55%)]"
      >
        X
      </button>

      <button onClick={prev} className='group bg-amber-50 rounded-full p-2  px-2 py-2 cursor-pointer transition'> 
        <img
    className="w-4 h-4 fill-black group-hover:fill-[hsl(26,100%,55%)] transition "
      viewBox="0 0 12 18"
        fill="none"
        src={IconPrevious}
  />

    </button>

      <img
        src={images[currentIndex].full}
        alt=""
        className=" w-[80%]  lg:w-100 h-100 rounded-2xl object-cover transition  flex"
      />

      <button onClick={next}><img src={IconNext} alt="" className='bg-amber-50 rounded-full p-2  px-2 py-2 cursor-pointer'/></button>

    </div>
  </div>
)}



<div className='justify-center items-center px-2 py-2 gap-2 '>
<div> 
     <h2 className='text-sm font-bold uppercase text-[hsl(219,9%,45%)]'>Sneaker Company</h2>
    <h1 className='text-3xl font-bold whitespace-normal w-96'>Fall Limited Edition Sneakers</h1>
    <p className="whitespace-normal w-108 text-sm text-[hsl(219,9%,45%)]">  These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
</div>
<div className="flex items-center justify-between lg:flex-col lg:items-start">
  <div className=' items-center px-1 py-1 '>
    <div className='flex  items-center px-1 py-1 gap-1'>
        <h2 className='text-xl'>${discountedPrice}.00</h2>
    <p className='rounded bg-[hsl(0,0%,0%)] text-amber-50 px-3 py-2 gap-2  font-sans w-15 h-10 text-center'>50%</p>
    </div>
</div>
 <div>
<p style={{textDecoration:"line-through"}} className='text-[hsl(219,9%,45%)]  px-1 py-1'>${originalPrice}.00</p>
    </div>
</div>

<div className="grid w-full lg:flex justify-center gap-2 items-center">
<div className='bg-[hsl(180,1%,77%)] w-full lg:w-28 h-10 flex justify-center items-center px-3 py-3 gap-2 rounded'>
    <button onClick={decrease} disabled={quantity===0} className='w-full font-bold text-2xl px-5 py-5 cursor-pointer text-[hsl(25,78%,60%)]'>-</button>
    <span  className='font-bold text-2xl'>{quantity}</span>
    <button onClick={increase}  className=' font-bold text-2xl px-5 py-5 cursor-pointer text-[hsl(25,78%,60%)]'>+</button>
</div>

<div className=''>
    <button onClick={addToCart} className="w-full lg:w-50  bg-[hsl(25,78%,60%)] text-sm gap-4  font-bold
     h-10 rounded flex justify-content items-center cursor-pointer p-5"><img src={IconCart} className=' w-5 h-5'/>Add to cart</button>
     </div> 
     <div>
         <h3 className='text-xl font-bold'>Items in cart:{cartItems}</h3>
     <h3 className='text-xl font-bold'>Total:${total}.00</h3>
     </div>
</div>
</div>
</div>

  </div> 

 
    
    </>
  )
}
