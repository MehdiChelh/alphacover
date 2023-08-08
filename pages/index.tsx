import Navbar from "@/app/component/Navbar"

export default function Home() {
  

  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between bg-base-200">
      <div className="flex flex-col w-full relative h-screen">
        <Navbar />
        {/* Sick Image - Interoperability / Composability */}
        <div className="absolute bottom-0 right-0 max-w-xl">
          <div className=" rounded-full bg-gray">
              <img src="/asset/img/hero-image-v2.svg" />
          </div>
        </div>

        {/* Form */}
        <div className="z-10 w-full flex flex-col items-center justify-center" style={{flex: '1'}}>
          <div className="max-w-5xl items-center justify-between font-mono text-sm lg:flex">

            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse">
                {/* Hero Text */}
                

                {/* Card */}

              </div>
            </div>
          </div>
          

        </div>
      </div>
    </main>
    </>

  )
}
