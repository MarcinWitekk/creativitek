export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      <main className="snap-y snap-mandatory scroll-smooth h-screen overflow-y-scroll">  
        <section className="h-screen snap-start flex flex-col justify-center bg-gradient-to-b from-cyan-50 from-10% via-purple-50 via-80% to-white 
        bg-[length:100%_200%] animate-gradient">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Nowoczesny frontend dla biznesu i e-commerce.
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 mb-6">
              Pomagam firmom budować szybkie i nowoczesne rozwiązania webowe, które poprawiają doświadczenie użytkownika i wspierają rozwój sprzedaży online.
            </p>
          </div>

          <div className="flex gap-2 text-sm">
            <a
              className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              About - Creativitek
            </a>
          </div>
        </section>

        <section className="h-screen snap-start flex flex-col justify-center">
          sekcja 2
          {/* <video autoPlay muted loop playsInline id="bg-video" className="h-full object-cover absolute top-0 left-0 w-full">
            <source src="/bg-video.mp4" type="video/mp4" />
          </video> */}
        </section>
      </main>
    </div>
  );
}
