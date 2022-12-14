function Banner() {
  return (
    <div className=" flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">CryRtex Blog</h1>
            <h2 className=" ml-5 md:mt-8">
                Welcome to {" "} 
                <span className=" underline decoration-4 decoration-[#f7ab0a]"> 
                    Every People 
                </span>{" "}
                Favorite blog in the Dev :)
            </h2>
        </div>
        <p className=" mt-5 md:mt-2 text-gray-400 max-w-sm">
            New product features | The latest news | Tips and tricks | English or Germnany Practise Blog
        </p>
    </div>
  )
}

export default Banner