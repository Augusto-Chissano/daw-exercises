import MyName from "@/src/components/MyName";

const Page = () => {
     return (
          <main className="h-screen flex">
               <div className="hero">
                    <div className="hero-content text-center">
                         <div className="max-w-md">
                              <MyName/>
                         </div>
                    </div>
               </div>
          </main>
     )
}

export default Page;