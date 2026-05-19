import { motion } from "framer-motion";
import { Heart, Calendar, MapPin, Music2 } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f4ef] text-[#1a1a1a] overflow-hidden relative">

      {/* BACKGROUND BLURS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-100px] w-[350px] h-[350px] bg-white rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-[#e7ddd1] rounded-full blur-3xl opacity-70"></div>
      </div>

      {/* FLOATING CLOUDS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 80, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-[-100px] w-64 h-24 bg-white/70 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ x: [0, -60, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute top-60 right-[-80px] w-72 h-28 bg-white/60 rounded-full blur-2xl"
        />
      </div>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.4em] text-xs text-black/50 mb-8">
            Wedding Invitation
          </p>

          <h1 className="font-serif text-6xl md:text-8xl leading-none">
            Saidbek
            <span className="block italic text-4xl my-3">&</span>
            Durdona
          </h1>

          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px w-20 bg-black/20"></div>
            <Heart className="fill-black" size={22} />
            <div className="h-px w-20 bg-black/20"></div>
          </div>

          <p className="uppercase tracking-[0.25em] text-lg">
            27 • 07 • 2027
          </p>

          <p className="mt-8 text-black/60 leading-8 max-w-xl mx-auto">
            В этот день мы начнём новую главу нашей истории.
            Будем счастливы разделить с вами радость,
            тепло и красоту нашего свадебного вечера.
          </p>

          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#details"
              className="bg-black text-white px-8 py-4 rounded-full hover:opacity-80 transition"
            >
              Открыть приглашение
            </a>

            <button className="border border-black/10 bg-white/70 backdrop-blur px-8 py-4 rounded-full hover:bg-white transition flex items-center justify-center gap-2">
              <Music2 size={18} />
              Wedding Music
            </button>
          </div>
        </motion.div>
      </section>

      {/* DETAILS */}
      <section
        id="details"
        className="py-24 px-6 relative z-10"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white/70 backdrop-blur rounded-[30px] p-8 shadow-sm border border-black/5 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-5">
              <Calendar />
            </div>

            <h3 className="font-serif text-3xl mb-2">Date</h3>

            <p className="text-black/60">
              27 July 2027
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white/70 backdrop-blur rounded-[30px] p-8 shadow-sm border border-black/5 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-5">
              <Heart />
            </div>

            <h3 className="font-serif text-3xl mb-2">Wedding Day</h3>

            <p className="text-black/60">
              Начало в 17:00
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white/70 backdrop-blur rounded-[30px] p-8 shadow-sm border border-black/5 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-5">
              <MapPin />
            </div>

            <h3 className="font-serif text-3xl mb-2">Location</h3>

            <p className="text-black/60">
              Restaurant Yakkasaray
            </p>
          </motion.div>

        </div>
      </section>

      {/* INVITATION */}
      <section className="py-24 px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-xs text-black/50 mb-5">
            Dear Guests
          </p>

          <h2 className="font-serif text-5xl mb-10">
            Приглашаем вас
          </h2>

          <p className="text-lg leading-9 text-black/65">
            Дорогие родные и друзья!
            Мы будем очень рады видеть вас рядом
            в день нашей свадьбы.
            Ваше присутствие сделает этот вечер
            ещё теплее, счастливее и красивее.
          </p>
        </div>
      </section>

      {/* DRESS CODE */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-xs text-black/50 mb-5">
            Dress Code
          </p>

          <h2 className="font-serif text-5xl mb-10">
            Black & White
          </h2>

          <div className="flex justify-center gap-5 mb-10">
            <div className="w-16 h-16 rounded-full bg-black border border-black/10"></div>
            <div className="w-16 h-16 rounded-full bg-white border border-black/10"></div>
            <div className="w-16 h-16 rounded-full bg-[#f2f2f2] border border-black/10"></div>
          </div>

          <p className="text-black/60 leading-8">
            Будем благодарны, если вы поддержите стиль нашего праздника
            в чёрно-белой гамме.
          </p>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-black text-white py-24 px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-xs text-white/50 mb-5">
            Location
          </p>

          <h2 className="font-serif text-5xl mb-8">
            Restaurant Yakkasaray
          </h2>

          <p className="text-white/60 leading-8 mb-10">
            Место, где мы соберём самых близких людей,
            чтобы отпраздновать любовь и начало нашей семьи.
          </p>

          <a
            href="https://www.google.com/maps/search/Restaurant+Yakkasaray"
            target="_blank"
            className="bg-white text-black px-8 py-4 rounded-full inline-block hover:opacity-80 transition"
          >
            Открыть карту
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center bg-[#efe6db] relative z-10">
        <h2 className="font-serif text-5xl mb-4">
          Saidbek & Durdona
        </h2>

        <p className="uppercase tracking-[0.25em] text-sm text-black/50">
          27.07.2027
        </p>
      </footer>
    </div>
  );
}
