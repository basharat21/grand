import Link from "next/link";
import Image from "next/image";
import $ from "jquery";
import Container from "../components/container";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Rightimgleftcontent() {
  useEffect(() => {  
         AOS.init();
   }, []);
   return (
      <section className="section">
                <Container>
                 <div className="grid grid-cols-6 xl:grid-cols-12 gap-y-10 items-center ">
                        <div className="col-span-6 ">
                            <div>
                                <span className="border text-main-black border-buisness-red/10 py-0.5 px-5 rounded-[30px] w-fit bg-buisness-red/5 font-bold text-[#e0353a]">
                                    About Company
                                 </span>
                                <h2 className="mt-4"> Grandcure Healthcare Pvt. Ltd., is an emerging pharmaceutical company with proven capabilities of developing pharmaceutical products and selling and distributing them all over India. </h2>
                                <p>
                                    Business agencies often feature a diverse team of
                                    professionals expertise in various areas such as marketing,
                                    finance
                                </p>
                                 <div className="flex items-center">
                                <Link className="btn" href="about">Free Consulting</Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative col-span-6 flex flex-col sm:flex-row justify-center items-center gap-[30px]">
                            <svg className="absolute z-0 -top-16 max-w-full" width="465" height="465" viewBox="0 0 465 465" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="232.5" cy="232.5" r="231.9" stroke="#161519" strokeOpacity="0.07" strokeWidth="1.2" />
                            </svg>
                            <Image alt="" width={300} height={600} src="/img/about1.png"  className="relative z-10 hidden sm:block rounded " />
                            <Image alt="" width={300} height={600} src="/img/about2.png"  className="relative z-10 rounded " data-aos="fade-left" />
                            <div className="ba p-[30px] rounded-2xl absolute z-20 bottom-8 w-[295px] bg-[#870000]" data-aos="fade-up" data-aos-duration="1000">
                                <Image src="/img/about-card-shape.webp" width={105} height={114} alt="" className="absolute right-2 top-bottom-moving" />
                                <div className="flex items-center gap-2.5">
                                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.28753 7.01343L8.90454 1.36956M8.90454 1.36956L3.26066 1.75255M8.90454 1.36956L1.01321 10.4099" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="text-sm text-white leading-8">We have</span>
                                </div>
                                <h1 className="text-[27px] leading-[35px] text-white font-semibold tracking-tight max-w-[170px]" >
                                    25+ Years of Experience
                                 </h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-[30px] md:mt-20">
                            <div className="lg:flex shadow-md  p-8 " data-aos="fade-right">
                                <div>
                                    <Image alt="icons" className="ml-auto mb-4" src="/img/1.png" width={66} height={65} />
                                </div>
                                <div className="px-2 text-center lg:text-left ">
                                    <span className="text-2xl lg:text-44 block font-semibold">13th</span>
                                    <span className="text-1xl max-w-lg md:text-xs leading-body text-gray-500">Largest Pharma Company in India,<br/>  In terms of Domestic Sales for MAT September 2023</span>
                                </div>
                            </div>
                            <div className="lg:flex shadow-md p-8 " data-aos="fade-up">
                                <div>
                                    <Image alt="icons" className="ml-auto mb-4" src="/img/2.png" width={66} height={65} />
                                </div>
                                <div className="px-2 text-center lg:text-left">
                                    <span className="text-2xl lg:text-44 block font-semibold">10,852</span>
                                    <span className="text-1xl max-w-lg md:text-xs leading-body text-gray-500">Employees<br/>As of September 30, 2023</span>
                                </div>
                            </div>
                            <div className="lg:flex shadow-md p-8 " data-aos="fade-left">
                                <div>
                                    <Image alt="icons" className="ml-auto mb-4" src="/img/70.png" width={66} height={65} />
                                </div>
                                <div className="px-2 text-center lg:text-left">
                                    <span className="text-2xl lg:text-44 block font-semibold">70+</span>
                                    <span className="text-1xl max-w-lg md:text-xs leading-body text-gray-500">Countries with presence</span>
                                </div>
                            </div>
                        </div>
               </Container>
            </section>
 );
}