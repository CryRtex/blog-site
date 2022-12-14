import Link from "next/link"
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"

function StudioNavbar(props: any) {
  return (
  <div>
    <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#f7ab0a] flex items-center">
            <ArrowUturnLeftIcon className=" text-[#f7ab0a] h-6 w-6 mr-2" />
            Go to Websites
            </Link>
        </div>
    <>{props.renderDefault(props)}</>
  </div>
  );
}

export default StudioNavbar