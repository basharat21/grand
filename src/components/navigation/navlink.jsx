import Link from "next/link";

export default function NavLink({
    name,
    href
}) {
  return (
    <Link href={href} className="relative text-[20px] lg:text-[17px] py-[35px]
         xl:py-[30px] px-[20px] xl:px-[20px]
            text-[#000] block capitalize
            font-heading-font font-medium transition-all
             hover:text-[#e0353a] ">{name}</Link>
      
  );
}
