import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbf8f4] text-[#181818] overflow-hidden">
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <p className="tracking-[0.4em] uppercase text-xs mb-8 text-black/60">
            Wedding Invitation
          </p>

          <h1 className="font-serif text-6xl md:text-8xl leading-none">
            Saidbek
            <span className="block italic text-4xl my-3">&</span>
            Durdona
          </h1>

          <div className="flex items-center justify-center gap-3 my-8">
            <span className="h-px w-20 bg-black/30"></span>
            <Heart size={22} className="fill-black" />
            <span className="h-px w-20 bg-black/30"></span>
          </div>

          <p className="text-xl tracking-[0.25em] uppercase">27.07.2027</p>

          <p className="mt-6 text-black/60 leading-8">
            В этот день мы начнём новую главу нашей истории.
            Будем счастливы разделить с вами радость,
            тепло и красоту нашего свадебного вечера.
          </p>

          <div className="mt-12">
            <a
              href="https://www.google.com/maps/search/Restaurant+Yakkasaray"
              target="_blank"
              className="bg-black text-white px-8 py-4 rounded-full inline-block hover:opacity-80 transition"
            >
              Restaurant Yakkasaray
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}