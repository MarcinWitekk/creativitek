import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col flex-1 font-sans">
            <main className="snap-y snap-mandatory scroll-smooth h-screen overflow-y-scroll">  
                <section className="h-screen snap-start flex flex-col justify-center bg-gradient-to-b from-cyan-50 from-10% via-purple-50 via-80% to-white 
                bg-[length:100%_200%] animate-gradient">
                        <div className="flex items-center justify-center -m-12 md:hidden">
                            <Image
                            src="/logo_creativitek.png" 
                            alt="Avatart image" 
                            width={150} 
                            height={150} 
                            loading="eager"
                            className="" 
                            />
                        </div>
                    <div>
                        <div className="flex items-center justify-center
                        animate-[revealBlurOnLoad_1.7s_linear_forwards]">
                            <div className="p-12 w-max bg-radial from-white via-white via-50% to-transparent to-70%">
                                <Image
                                src="/about/ja.jpg" 
                                alt="Avatart image" 
                                width={200} 
                                height={210} 
                                loading="eager"
                                className="w-48 rounded-xl object-cover" 
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="text-center">
                                My name is Marcin and I am a self-taught frontend developer. I have been interested in programming since I was a child, but I started learning web development in 2020. I have a passion for creating beautiful and functional websites and applications. I am always looking for new challenges and opportunities to learn and grow as a developer.
                            </div>
                        </div>
                    </div>
                    
                </section> 


                <section className="h-screen snap-start flex flex-col justify-center bg-gradient-to-b from-cyan-50 from-10% via-purple-50 via-80% to-white 
                bg-[length:100%_200%] animate-gradient">
                    <div>
                        <div className="flex items-center justify-center">
                            <div className="p-12 w-max bg-radial from-white via-white via-50% to-transparent to-70%">
                                <Image
                                src="/about/ja.jpg" 
                                alt="Avatart image" 
                                width={200} 
                                height={210} 
                                loading="eager"
                                className="w-48 rounded-xl object-cover" 
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="text-center">
                                My name is Marcin and I am a self-taught frontend developer. I have been interested in programming since I was a child, but I started learning web development in 2020. I have a passion for creating beautiful and functional websites and applications. I am always looking for new challenges and opportunities to learn and grow as a developer.
                            </div>
                        </div>
                    </div>
                    
                </section> 
            </main>
        </div>
    );
}