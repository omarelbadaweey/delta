// import Header from "@/components/Header";
// import Hero from "@/components/Hero";

// export default function Home() {
//   return (
// <main >
// <Header/>
// <Hero/>
// <section id="story" className="min-h-screen bg-white py-24 px-6 max-w-5xl mx-auto text-center flex flex-col justify-center items-center">
//         <h2 className="text-4xl font-bold mb-4">قصتنا وأهدافنا</h2>
//         <p className="text-neutral-600 max-w-2xl">
//           هنا تقدر تبدأ تحط أي محتوى بروفيشنال تاني لموقعك، وهتلاقي الشاشة بتسحب مع الماوس بنعومة تامة بعد انتهاء أنيميشن السائل مباشرة.
//         </p>
//       </section>
// </main>
//   );
// }



"use client";
import { useState } from "react";
import { locales } from "@/constants/locale"; // تأكد من المسار ده بالملي
import Navbar from "@/components/Header";
import Hero from "@/components/Hero";
import  DataSections  from "@/components/DataSections";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState("ar");
  const t = locales[lang] || locales["ar"]; // تأمين في حال حدوث أي خطأ بالـ State

  return (
    <main dir={t.dir} className="bg-white min-h-screen text-[#0B3C88] antialiased scroll-smooth">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} /> 
      <DataSections t={t} lang={lang} />
      <Footer t={t} lang={lang} />
    </main>
  );
}