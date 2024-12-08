// 'use client'
// import { Search, User } from 'lucide-react';
// import Link from 'next/link';
// import { ShoppingCart } from 'lucide-react';
// import { CircleUserRound } from 'lucide-react';


//  function Header() {
//   return (
//     <>
//     <nav className="w-full max-w-[1440px] h-[132px] bg-white mx-auto">
//       <div className="relative w-full h-full">
//         {/* Top Section */}
//         <div className="absolute left-7 top-[26px]">
//           <Search className="w-4 h-4 text-[#2A254B]" />
//         </div>
        
//         <h1 className="absolute left-1/2 -translate-x-1/2 top-5 font-clash-display text-2xl text-[#22202E]">
//           Avion
//         </h1>
        
//         <div className="absolute right-7 top-[26px] flex gap-4">
//           <ShoppingCart className="w-4 h-4 text-[#2A254B]" />
//           <User className="w-4 h-4 text-[#2A254B]" />
//         </div>

//         {/* Divider */}
//         <div className="absolute left-[1.94%] right-[1.81%] top-[70px] border-t border-black/10" />

//         {/* Navigation Links */}
//         <div className="absolute left-1/2 -translate-x-1/2 top-[90px] flex gap-11">
//           {[
//             "Plant pots",
//             "Ceramics",
//             "Tables",
//             "Chairs",
//             "Crockery",
//             "Tableware",
//             "Cutlery"
//           ].map((item) => (
//             <Link
//               key={item}
//               href="#"
//               className="font-satoshi text-base text-[#726E8D] hover:text-[#2A254B] transition-colors"
//             >
//               {item}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
// </>
//   )}

// export default Header
//       'use client'
// import { Search, User } from 'lucide-react';
// import Link from 'next/link';
// import { ShoppingCart } from 'lucide-react';
// import { CircleUserRound } from 'lucide-react';
// import { useState } from 'react';

// function Header() {

//     const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <>
    
//         {/* Hamburger Icon for Mobile */}
//         <button className=" md:hidden text-black relative left-0" onClick={toggleMenu} >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
//           </svg>
//         </button>
      

//       {/* Mobile Menu */}
//       <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-600 p-4`}>
//         <Link href="/productlisting" className="block text-white py-2">About Us</Link>
//         <Link href="/homev1" className="block text-white py-2">Contact</Link>
//         <Link href="/productpage" className="block text-white py-2">Blog</Link>

//       </div>
    
//       <nav className="w-full max-w-[1440px] h-[132px] bg-white mx-auto">
//         <div className="relative w-full h-full">
//           {/* Top Section */}
//           <div className="absolute left-7 top-[26px]">
//             <Search className="w-4 h-4 text-[#2A254B]" />
//           </div>
          
//           <h1 className="absolute left-1/2 -translate-x-1/2 top-5 font-clash-display text-2xl text-[#22202E]">
//             Avion
//           </h1>
          
//           <div className="absolute right-7 top-[26px] flex gap-4">
//             <ShoppingCart className="w-4 h-4 text-[#2A254B]" />
//             <User className="w-4 h-4 text-[#2A254B]" />
//           </div>

//           {/* Divider */}
//           <div className=" hidden md:block absolute left-[1.94%] right-[1.81%] top-[70px] border-t border-black/10" />

//           {/* Navigation Links */}
//           <div className=" absolute left-1/2 -translate-x-1/2 top-[90px] flex flex-hidden gap-11">
//             {[
//               { name: "Plant pots", link: "/" },
//               { name: "Ceramics", link: "/homev1" },
//               { name: "Tables", link: "/productlisting" },
//               { name: "Chairs", link: "/productsv1" },
//               { name: "Crockery", link: "/productpage" },
//               { name: "Tableware", link: "/cart" },
//               { name: "Cutlery", link: "/" }
//             ].map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.link}
//                 className="font-satoshi text-base text-[#726E8D] hover:text-[#2A254B] transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Header;


'use client'
import { Search, User } from 'lucide-react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Hamburger Icon for Mobile */}
            <button className="md:hidden text-black relative left-0" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-600 p-4`}>
                <Link href="/productlisting" className="block text-white py-2">About Us</Link>
                <Link href="/homev1" className="block text-white py-2">Contact</Link>
                <Link href="/productpage" className="block text-white py-2">Blog</Link>
            </div>

            <nav className="w-full max-w-[1440px] h-[132px] bg-white mx-auto">
                <div className="relative w-full h-full">
                    {/* Top Section */}
                    <div className="absolute left-7 top-[26px]">
                        <Search className="w-4 h-4 text-[#2A254B]" />
                    </div>

                    <h1 className="absolute left-1/2 -translate-x-1/2 top-5 font-clash-display text-2xl text-[#22202E]">
                        Avion
                    </h1>

                    <div className="absolute right-7 top-[26px] flex gap-4">
                        <ShoppingCart className="w-4 h-4 text-[#2A254B]" />
                        <User className="w-4 h-4 text-[#2A254B]" />
                    </div>

                    {/* Divider for Desktop */}
                    <div className="hidden md:block absolute left-[1.94%] right-[1.81%] top-[70px] border-t border-black/10" />

                    {/* Navigation Links */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-[90px] gap-11">
                        {[{
                            name: "Plant pots", link: "/"
                        }, {
                            name: "Ceramics", link: "/homev1"
                        }, {
                            name: "Tables", link: "/productlisting"
                        }, {
                            name: "Chairs", link: "/productsv1"
                        }, {
                            name: "Crockery", link: "/productpage"
                        }, {
                            name: "Tableware", link: "/cart"
                        }, {
                            name: "Cutlery", link: "/"
                        }].map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className="font-satoshi text-base text-[#726E8D] hover:text-[#2A254B] transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;