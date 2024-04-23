import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
  return (
    
    <footer className="py-4 bg-primary-footer footer section">
      <Container>
      <div className="py-3 md:flex justify-between items-center">
            <div className="w-[195px] md:w-[280px] sm:w-[200px] col:w-[150px] mx-auto md:mx-0 my-10 md:my-0">
            <Image className="block " src="/img/grand-cure-logo-white.svg" height={50} width={50} alt=""/>
            </div>
            <div className="md:flex w-1/2 md:w-auto mx-auto md:mx-0 text-center items-center">
                <span className="text-white text-lg font-semibold">
                    Follow us on Social</span>
                <ul className="flex mx-4 my-2">
                    <li className="mx-2">
                        <Link href="#" target="_blank"> <Image  src="/img/facebook.png" width={26} height={26} alt="facebook"/></Link>
                    </li>
                    <li className="mx-2">
                        <Link href="#" target="_blank"> <Image src="/img/insta.png" alt="" width={26} height={26}/></Link>
                    </li>
                    <li className="mx-2">
                        <Link href="#" target="_blank"><Image  src="/img/twitter.png" alt="" width={26} height={26}/></Link>
                    </li>
                    <li className="mx-2">
                        <Link href="#" target="_blank"><Image  src="/img/in.png" alt="" width={26} height={26}/></Link>
                    </li>
                </ul>
            </div>
        </div>
        <hr className="border-gray-600 my-2"></hr>
        <div className="px-6 md:grid grid-flow-col grid-cols-4 gap-3 my-5">
                    <div className="text-sm mb-10 md:mb-4 lg:mb-0">
                         <h4>About</h4>
                         <ul>
                         <li ><Link href="#">Overview</Link></li>
                         <li ><Link href="#">Overview</Link></li>
                         <li ><Link href="#">Overview</Link></li>
                         <li ><Link href="#">Overview</Link></li>
                         <li ><Link href="#">Overview</Link></li>
                         </ul>
                     </div>
                     <div className="text-sm mb-10 md:mb-4 lg:mb-0">
                        <h4>About</h4>
                        <ul>
                         <li ><Link href="#">Overview</Link></li>
                         <li ><Link href="#">Overview</Link></li>
                         <li ><Link href="#">Overview</Link></li>
                         <li ><Link href="#">Overview</Link></li>
                         <li ><Link href="#">Overview</Link></li>
                         </ul>
                     </div>
                     <div className="text-sm mb-10 md:mb-4 lg:mb-0">
                        <h4>About</h4>
                        <ul>
                         <li ><Link href="#">Overview</Link></li>
                         <li ><Link href="#">Overview</Link></li>
                         <li ><Link href="#">Overview</Link></li>
                         <li ><Link href="#">Overview</Link></li>
                         <li ><Link href="#">Overview</Link></li>
                         </ul>
                     </div>
                     <div className="text-sm mb-10 md:mb-4 lg:mb-0">
                        <h4>About</h4>
                        <ul>
                         <li ><Link href="#">Overview</Link></li>
                         <li ><Link href="#">Overview</Link></li>
                         <li ><Link href="#">Overview</Link></li>
                         <li ><Link href="#">Overview</Link></li>
                         <li ><Link href="#">Overview</Link></li>
                         </ul>
                     </div>
              </div>
               <hr className="border-gray-600 my-2"></hr>
              <div className="md:flex px-4 lg:px-0 justify-between my-3">
                  <span className="text-xs uppercase text-gray-500 tracking-widest">copyright © 2021, all rights reserved</span>
                  <span className="text-xs uppercase text-gray-500 tracking-widest">Cookie Policy| TermCondition|disclaimer | privacy policy</span>
              </div>
      </Container>
    </footer>
  );
}
