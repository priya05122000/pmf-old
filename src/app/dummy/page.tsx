import React from "react";

const Page = () => {
    return (
        //     <div className="overflow-x-hidden">
        //         {/* First box: centered */}
        //         <div className="sm:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4">
        //             <div className="bg-pink-500 p-4 mb-4">
        //                 First box (max-w-7xl centered)
        //             </div>
        //         </div>

        //         {/* Second box: left aligned, flush right */}
        //         <div className="bg-pink-300 p-4 mb-4 
        // lg:w-[calc(100vw-50%+theme(maxWidth.4xl)/2-1rem)] 
        // lg:ml-[calc(50%-theme(maxWidth.4xl)/2+1rem)]
        // xl:w-[calc(100vw-50%+theme(maxWidth.7xl)/2-1rem)] 
        // xl:ml-[calc(50%-theme(maxWidth.7xl)/2+1rem)]">
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi sapiente necessitatibus quas natus perferendis temporibus suscipit vero similique aliquid dolores, voluptate, quae, nihil dolore maiores nisi explicabo. Praesentium eos eveniet nam! Architecto, libero? Pariatur, asperiores adipisci.
        //         </div>

        //         {/* Third box: right aligned, flush left */}
        //         <div className="bg-pink-300 p-4 mb-4 
        // xl:w-[calc(100vw-50%+theme(maxWidth.7xl)/2-1rem)] 
        // xl:mr-[calc(50%-theme(maxWidth.7xl)/2+1rem)]">
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aperiam voluptas porro dolores facilis sit! Tempora quas quis necessitatibus totam placeat modi eaque magnam qui perspiciatis suscipit consequatur quibusdam quisquam eius enim animi iste incidunt, dolor quia nulla illo labore, impedit ducimus nisi laudantium. Nulla pariatur enim quae iusto assumenda!
        //         </div>
        //     </div>

        <div className=" 
    grid 
    grid-cols-[1fr_minmax(auto,theme(maxWidth.4xl))_1fr] 
    lg:grid-cols-[1fr_minmax(auto,theme(maxWidth.4xl))_1fr] 
    xl:grid-cols-[1fr_minmax(auto,theme(maxWidth.7xl))_1fr]"
        >
            <div className="col-start-2 bg-pink-500 p-4 mb-4">
                First content → centered, constrained
            </div>

            <div className="col-span-2 bg-pink-300 p-4 mb-4">
                Second content → spans wider (lg: 4xl, xl: 7xl)
            </div>

            <div className="col-span-2 col-start-2 bg-pink-300 p-4 mb-4">
                Third content → also constrained
            </div>
        </div>




    );
};

export default Page;
