import Image from "next/image";
import Link from "next/link";

export default function Productslide({
    image,
    productname
}) {
return (
             <div className='product '  >
                    <Image src={image} width={1200} height={800} alt='' className="shadow-md"/>
                    <h3>{productname}</h3>
             </div>
 );
}
