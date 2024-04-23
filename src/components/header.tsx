import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/navigation";
import { AllMainJS } from "../components/js/allmainjs";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {
  useEffect(() => {        
    AOS.init();
    AllMainJS();

}, []);
  return (
  <header className="white-bg">
        <h1 className="hidden">section heading hidden</h1>
         <div className="px-[130px] lg:px-[30px] col:px-0 md:py-[10px]">
            <div className="flex items-center justify-between">
                <div className="w-[195px] md:w-[280px] sm:w-[200px] col:w-[150px]">
                    <Link className="flex items-center md:justify-center text-white" href="index.html">
                        <Image className="mr-[10px] " width={100} height={100} src="/img/grand-cure-logo.svg" alt=""/></Link>
                </div>
                <Navigation/>
                <div className="flex items-center">
                    <Link className="btn" href="contact.html">Free Consulting</Link>
                 </div>
            </div>
        </div>
    </header>
  );
}
