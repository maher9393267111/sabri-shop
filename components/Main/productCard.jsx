import Image from "next/image";
import Link from "next/link";
import { calculateDiscountedPrice } from "@/functions/firebase/getData";

export default function ProductCard({ title, images ,id,imageAlt ,price ,isoffer ,discount }) {
  return (
    <Link href={`/products/${id}`}>
      <div className="group relative cursor-pointer rounded-lg transition-transform duration-700 hover:scale-105 hover:shadow-lg">
        <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200 ">
          <Image
            className="bg-grad   !h-[288px]  md:!h-[325px]"
            src={images[0]}
            alt={title}
            layout="responsive"
            width={600}
            height={600}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="absolute bottom-0 left-0 z-10 w-full rounded-lg bg-gradient-to-t from-neutral-700 p-4  hover:from-primary">
          <h3 className="font-body text-center text-xl font-black uppercase text-white">
            {title}
          </h3>

          <div className="flex items-center justify-between">
          <div className="space-x-2 !w-full text-center">
            <span className="text-lg font-semibold line-through text-white ">
              ${price}
            </span>

            {isoffer === true &&

            <span className="text-lg font-bold text-gray-900 ">
              ${calculateDiscountedPrice(price ,discount)}
            </span>

            }
          </div>
       
        </div>




        </div>
      </div>
    </Link>
  );
}