import Link from "next/link";

export default function SubNavLink({
    name,
    href
}) {
  return (
    <Link href={href} className="text-[16px] lg:text-[16px] inline-block py-[5px] capitalize text-[#000] group relative overflow-hidden transition-all 
    after:absolute after:left-0 after:bottom-[0px] after:w-0 after:h-[5px]
    after:content after:bg-[#db3237] after:transition-all font-heading-font
    hover:after:w-[60%]  hover:after:h-[5px]">{name}</Link>
  )
}
