// "use client";
// import { motion } from "framer-motion";

// export default function Footer({ t, lang }) {
//   // روابط القائمة الأولى (روابط سريعة)
//   const quickLinks = [
//     { name: lang === "ar" ? "عن المعهد" : "About Institute", href: "#home" },
//     { name: lang === "ar" ? "أعضاء هيئة التدريس" : "Faculty Members", href: "#faculty" },
//     { name: lang === "ar" ? "الإنتاج العلمي والأبحاث" : "Scientific Research", href: "#research" }
//   ];

//   // روابط القائمة الثانية (المصادر)
//   const resources = [
//     { name: lang === "ar" ? "المكتبة الرقمية" : "Digital Library", href: "#library" },
//     { name: lang === "ar" ? "مركز التحميلات" : "Downloads Hub", href: "#" },
//     { name: lang === "ar" ? "شؤون الطلاب" : "Student Services", href: "#" }
//   ];

//   return (
//     <footer className="relative bg-neutral-950 text-neutral-400 border-t border-neutral-800/50 pt-16 pb-8 overflow-hidden">
//       {/* إضاءات خلفية نيون خافتة وفخمة جداً في زوايا الفوتر */}
//       <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#38B6FF]/5 blur-[120px] rounded-full pointer-events-none" />
//       <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#0B3C88]/10 blur-[100px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-neutral-800/60">
        
//         {/* العمود الأول: اللوجو والوصف الأكاديمي */}
//         <div className="md:col-span-5 space-y-4">
//           <div className="flex items-center gap-3">
//             <div className="h-10 w-10 rounded-lg bg-[#0B3C88] border border-[#38B6FF]/20 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(11,60,136,0.3)]">
//               Δ
//             </div>
//             <span className="font-bold text-white text-lg tracking-wide font-serif">
//               {lang === "ar" ? "معهد دلتا العالي" : "Delta Higher Institute"}
//             </span>
//           </div>
//           <p className="text-sm leading-relaxed max-w-sm text-neutral-400">
//             {t?.footer?.desc}
//           </p>
//         </div>

//         {/* العمود الثاني: روابط سريعة */}
//         <div className="md:col-span-2 space-y-4">
//           <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
//             {t?.footer?.linksTitle}
//           </h4>
//           <ul className="space-y-2.5 text-sm">
//             {quickLinks.map((link, idx) => (
//               <li key={idx}>
//                 <a href={link.href} className="hover:text-[#38B6FF] transition-colors duration-200 block py-0.5">
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* العمود الثالث: المصادر والأدوات */}
//         <div className="md:col-span-2 space-y-4">
//           <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
//             {t?.footer?.resourcesTitle}
//           </h4>
//           <ul className="space-y-2.5 text-sm">
//             {resources.map((link, idx) => (
//               <li key={idx}>
//                 <a href={link.href} className="hover:text-[#38B6FF] transition-colors duration-200 block py-0.5">
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* العمود الرابع: معلومات التواصل وطرق الاتصال المباشر */}
//         <div className="md:col-span-3 space-y-4">
//           <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
//             {t?.footer?.contactTitle}
//           </h4>
//           <ul className="space-y-3 text-sm">
//             <li className="flex items-center gap-2.5">
//               <svg className="w-4 h-4 text-[#38B6FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//               <a href="mailto:info@delta.edu.eg" className="hover:text-white transition-colors">
//                 info@delta.edu.eg
//               </a>
//             </li>
//             <li className="flex items-start gap-2.5">
//               <svg className="w-4 h-4 text-[#38B6FF] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//               <span className="text-neutral-400">
//                 {lang === "ar" ? "طريق النصر، الخالدين، دمياط، مصر" : "Al-Nasr Road, Al-Khalideen, Damietta, Egypt"}
//               </span>
//             </li>
//           </ul>
//         </div>

//       </div>

//       {/* الحقوق السفلى وشريط المطورين */}
//       <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
//         <p>{t?.footer?.rights}</p>
//         <motion.p 
//           whileHover={{ scale: 1.02 }}
//           className="text-neutral-600 hover:text-[#38B6FF] transition-colors duration-300 cursor-default"
//         >
//           {t?.footer?.builtWith} 🚀
//         </motion.p>
//       </div>
//     </footer>
//   );
// }

"use client";
import { motion } from "framer-motion";

export default function Footer({ t = { footer: {} }, lang = "ar" }) {
  const quickLinks = [
    { name: lang === "ar" ? "عن المعهد" : "About Institute", href: "#home" },
    { name: lang === "ar" ? "أعضاء هيئة التدريس" : "Faculty Members", href: "#faculty" },
    { name: lang === "ar" ? "الإنتاج العلمي والأبحاث" : "Scientific Research", href: "#research" }
  ];

  const resources = [
    { name: lang === "ar" ? "المكتبة الرقمية" : "Digital Library", href: "#library" },
    { name: lang === "ar" ? "مركز التحميلات" : "Downloads Hub", href: "#" },
    { name: lang === "ar" ? "شؤون الطلاب" : "Student Services", href: "#" }
  ];

  return (
    <footer className="relative bg-neutral-950 text-neutral-400 border-t border-neutral-800/50 pt-16 pb-8 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#38B6FF]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#0B3C88]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-neutral-800/60">
        
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-[#0B3C88] border border-[#38B6FF]/20 flex items-center justify-center text-white font-bold text-lg">
              Δ
            </div>
            <span className="font-bold text-white text-lg tracking-wide font-serif">
              {lang === "ar" ? "معهد دلتا العالي" : "Delta Higher Institute"}
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm text-neutral-400">
            {t?.footer?.desc || (lang === "ar" ? "منصة أكاديمية حديثة مخصصة لدعم الطلاب وأعضاء هيئة التدريس بمعهد دلتا." : "A modern academic platform for Delta Institute.")}
          </p>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
            {t?.footer?.linksTitle || (lang === "ar" ? "روابط سريعة" : "Quick Links")}
          </h4>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-[#38B6FF] transition-colors duration-200 block py-0.5">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
            {t?.footer?.resourcesTitle || (lang === "ar" ? "المصادر والأدوات" : "Resources")}
          </h4>
          <ul className="space-y-2.5 text-sm">
            {resources.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-[#38B6FF] transition-colors duration-200 block py-0.5">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
            {t?.footer?.contactTitle || (lang === "ar" ? "اتصل بنا" : "Contact Us")}
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-[#38B6FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@delta.edu.eg" className="hover:text-white transition-colors">
                info@delta.edu.eg
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <svg className="w-4 h-4 text-[#38B6FF] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-neutral-400">
                {lang === "ar" ? "طريق النصر، الخالدين، دمياط، مصر" : "Al-Nasr Road, Al-Khalideen, Damietta, Egypt"}
              </span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
        <p>{t?.footer?.rights || "© 2026 معهد دلتا العالي. جميع الحقوق محفوظة."}</p>
        <p className="text-neutral-600 font-sans">{t?.footer?.builtWith || "Built with passion by Delta Tech Team"} 🚀</p>
      </div>
    </footer>
  );
}