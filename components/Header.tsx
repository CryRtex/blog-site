import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
            <Link href="">
            <Image
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f0ee7275236337.5c47335d22c0c.png"
                  width={50}
                  height={50}
                  className="rounded-full" alt={""}            
                  />
                  </Link>
                  <h1>CryRtex Blog</h1>
        </div>
        <div>
            <Link
             href={"/studio"}
             className=" px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
     
            >
             Sign-İn
            </Link>
        </div>
    </header>
  )
}

export default Header