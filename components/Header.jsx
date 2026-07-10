
// // "use client";
// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // export default function Header() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const links = [
// //     { name: "الرئيسية", href: "#home" },
// //     { name: "القصة", href: "#story" },
// //     { name: "خدماتنا", href: "#services" },
// //     { name: "تواصل معنا", href: "#contact" }
// //   ];

// //   return (
// //     <nav 
// //       style={{ background: "var(--background)" }} 
// //       className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-neutral-200/60 px-6 py-2 select-none"
// //     >
// //       <div className="max-w-7xl mx-auto flex justify-between items-center">
        
// //         {/* ==================== 1. اللوجو مع إضاءة نيون بلون السيان (#38B6FF) ==================== */}
// //         <div className="relative h-16 w-16 rounded-xl overflow-hidden group bg-neutral-50 border border-neutral-100 flex items-center justify-center">
// //           {/* تأثير توهج خلفي خفيف باللون اللبني السيان */}
// //           <div className="absolute inset-0 bg-[#38B6FF]/10 blur-md rounded-full group-hover:bg-[#38B6FF]/20 transition-colors duration-500" />
          
// //           <img 
// //             src="logo.png" 
// //             alt="delta logo" 
// //             className="relative z-10 object-cover w-full h-full p-1"
// //           />
          
// //           {/* مسحة الإضاءة المتحركة بلون لبني نيون (#38B6FF) */}
// //           <motion.div 
// //             initial={{ left: "-150%" }}
// //             animate={{ left: "150%" }}
// //             transition={{ repeat: Infinity, duration: 2.8, ease: "linear", delay: 0.5 }}
// //             className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-[#38B6FF]/30 to-transparent skew-x-12 z-20 pointer-events-none"
// //           />
// //         </div>

// //         {/* ==================== 2. لينكات الشاشات الكبيرة (أزرار كبسولة تليق بالخلفية البيضاء) ==================== */}
// //         <div className="hidden md:flex gap-3 text-sm font-medium" style={{ color: "var(--color)" }}>
// //           {links.map((link) => (
// //             <motion.a
// //               key={link.href}
// //               href={link.href}
// //               whileHover={{ scale: 1.04, y: -1 }}
// //               whileTap={{ scale: 0.96 }}
// //               // الخلفية هنا واخدة كحلي شفاف جداً عشان تظهر على الأبيض النظيف، والـ hover بياخذ درجة أزرق ناعمة وتغيير النص للكحلي الأصلي
// //               className="relative px-5 py-2.5 rounded-full bg-[#0B3C88]/[0.03] border border-[#0B3C88]/[0.05] shadow-[0_2px_8px_rgba(11,60,136,0.04)] transition-all duration-300 hover:bg-[#0B3C88]/[0.08] hover:border-[#38B6FF]/40 overflow-hidden text-[#0B3C88]"
// //             >
// //               {/* خط الإضاءة السفلي اللي بينور باللون اللبني السيان عند الـ Hover */}
// //               <span className="absolute bottom-0 inset-x-5 h-[1.5px] bg-gradient-to-r from-transparent via-[#38B6FF]/0 to-transparent group-hover:via-[#38B6FF] transition-all duration-500" />
// //               {link.name}
// //             </motion.a>
// //           ))}
// //         </div>

// //         {/* ==================== 3. زرار الموبايل بأيقونة SVG تفاعلية بلونك الكحلي ==================== */}
// //         <button 
// //           onClick={() => setIsOpen(!isOpen)} 
// //           // الزرار واخد لون الخط الكحلي بتاعك
// //           className="md:hidden p-2.5 rounded-full bg-[#0B3C88]/[0.04] border border-[#0B3C88]/0.1 text-[#0B3C88] focus:outline-none transition-transform active:scale-90"
// //           aria-label="Toggle Menu"
// //         >
// //           <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //             <motion.path 
// //               animate={isOpen ? { d: "M 3 16.5 L 17 2.5" } : { d: "M 3 5 L 21 5" }}
// //               transition={{ duration: 0.3 }}
// //               stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" 
// //             />
// //             <motion.path 
// //               animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.2 }}
// //               d="M 3 12 L 21 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" 
// //             />
// //             <motion.path 
// //               animate={isOpen ? { d: "M 3 2.5 L 17 16.5" } : { d: "M 3 19 L 21 19" }}
// //               transition={{ duration: 0.3 }}
// //               stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" 
// //             />
// //           </svg>
// //         </button>
// //       </div>

// //       {/* ==================== 4. قائمة الموبايل المنسدلة العائمة بالألوان الرسمية ==================== */}
// //       <AnimatePresence>
// //         {isOpen && (
// //           <motion.div 
// //             initial={{ opacity: 0, y: -12 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -12 }}
// //             transition={{ duration: 0.25, ease: "easeOut" }}
// //             style={{ background: "var(--background)" }}
// //             className="md:hidden absolute top-full left-4 right-4 mt-2 border border-neutral-200/70 rounded-3xl flex flex-col p-4 gap-2.5 text-center shadow-[0_15px_40px_rgba(11,60,136,0.12)]"
// //           >
// //             {links.map((link) => (
// //               <motion.a 
// //                 key={link.href}
// //                 href={link.href} 
// //                 onClick={() => setIsOpen(false)} 
// //                 whileTap={{ scale: 0.98 }}
// //                 className="w-full py-3 px-4 rounded-full font-medium border border-[#0B3C88]/3 bg-[#0B3C88]/4 text-[#0B3C88] hover:bg-[#0B3C88]/[0.08] hover:border-[#38B6FF]/30 transition-all duration-200"
// //               >
// //                 {link.name}
// //               </motion.a>
// //             ))}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </nav>
// //   );
// // }


// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar({ lang, setLang, t }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const links = [
//     { name: t.nav.home, href: "#home" },
//     { name: t.nav.faculty, href: "#faculty" },
//     { name: t.nav.research, href: "#research" },
//     { name: t.nav.library, href: "#library" },
//     { name: t.nav.news, href: "#news" },
//   ];

//   return (
//     <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-neutral-200/60 px-6 py-3 select-none bg-white/80">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
        
//         {/* اللوجو مع تأثير النيون بلون السيان */}
//         <div className="relative h-14 w-14 rounded-xl overflow-hidden group bg-neutral-50 border border-neutral-100 flex items-center justify-center">
//           <div className="absolute inset-0 bg-[#38B6FF]/10 blur-md rounded-full group-hover:bg-[#38B6FF]/20 transition-colors duration-500" />
//           <img src="logo.png" alt="Logo" className="relative z-10 font-bold text-[#0B3C88] text-xl" />
//           <motion.div 
//             initial={{ left: "-150%" }} animate={{ left: "150%" }}
//             transition={{ repeat: Infinity, duration: 2.8, ease: "linear", delay: 0.5 }}
//             className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-[#38B6FF]/30 to-transparent skew-x-12 z-20 pointer-events-none"
//           />
//         </div>

//         {/* لينكات الديسكتوب (الكبسولات) */}
//         <div className="hidden md:flex items-center gap-3 text-sm font-medium">
//           {links.map((link) => (
//             <motion.a
//               key={link.href} href={link.href}
//               whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.96 }}
//               className="relative px-4 py-2 rounded-full bg-[#0B3C88]/[0.03] border border-[#0B3C88]/[0.05] transition-all duration-300 hover:bg-[#0B3C88]/[0.08] text-[#0B3C88]"
//             >
//               {link.name}
//             </motion.a>
//           ))}

//           {/* زرار تبديل اللغة */}
//           <button 
//             onClick={() => setLang(lang === "ar" ? "en" : "ar")}
//             className="ml-4 px-3 py-1.5 rounded-full border border-[#0B3C88]/20 bg-[#0B3C88] text-white text-xs hover:bg-[#38B6FF] transition-colors font-sans"
//           >
//             {lang === "ar" ? "EN" : "عربي"}
//           </button>
//         </div>

//         {/* زرار الموبايل */}
//         <div className="flex items-center gap-2 md:hidden">
//           <button 
//             onClick={() => setLang(lang === "ar" ? "en" : "ar")}
//             className="px-2.5 py-1 rounded-full bg-[#0B3C88] text-white text-xs"
//           >
//             {lang === "ar" ? "EN" : "عربي"}
//           </button>
//           <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[#0B3C88]">
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//               <path d={isOpen ? "M3 12L21 12M3 6l18 0M3 18l18 0" : "M4 6h16M4 12h16M4 18h16"} strokeLinecap="round"/>
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* قائمة الموبايل المنسدلة */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
//             className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white border border-neutral-200 rounded-3xl flex flex-col p-4 gap-2 text-center shadow-xl"
//           >
//             {links.map((link) => (
//               <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="py-2.5 rounded-full bg-[#0B3C88]/[0.04] text-[#0B3C88] font-medium">
//                 {link.name}
//               </a>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// وضع قيم افتراضية هيكلية للـ t لمنع الـ undefined error
export default function Navbar({ lang = "ar", setLang, t = { nav: {} } }) {
  const [isOpen, setIsOpen] = useState(false);

  // تأمين قراءة اللينكات ببدائل جاهزة فوراً
  const links = [
    { name: t?.nav?.home || (lang === "ar" ? "الرئيسية" : "Home"), href: "#home" },
    { name: t?.nav?.faculty || (lang === "ar" ? "أعضاء هيئة التدريس" : "Faculty"), href: "#faculty" },
    { name: t?.nav?.research || (lang === "ar" ? "الأبحاث" : "Research"), href: "#research" },
    { name: t?.nav?.library || (lang === "ar" ? "المكتبة" : "Library"), href: "#library" },
    { name: t?.nav?.news || (lang === "ar" ? "الأخبار" : "News"), href: "#news" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-neutral-200/60 px-6 py-3 select-none bg-white/80">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* اللوجو */}
        <div className="relative h-14 w-14 rounded-xl overflow-hidden group bg-neutral-50 border border-neutral-100 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#38B6FF]/10 blur-md rounded-full group-hover:bg-[#38B6FF]/20 transition-colors duration-500" />
          <img src="/logo.png" alt="Logo" className="relative z-10 font-bold text-[#0B3C88] text-xl" />
          <motion.div 
            initial={{ left: "-150%" }} animate={{ left: "150%" }}
            transition={{ repeat: Infinity, duration: 2.8, ease: "linear", delay: 0.5 }}
            className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-[#38B6FF]/30 to-transparent skew-x-12 z-20 pointer-events-none"
          />
        </div>

        {/* لينكات الديسكتوب */}
        <div className="hidden md:flex items-center gap-3 text-sm font-medium">
          {links.map((link) => (
            <motion.a
              key={link.href} href={link.href}
              whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.96 }}
              className="relative px-4 py-2 rounded-full bg-[#0B3C88]/[0.03] border border-[#0B3C88]/[0.05] transition-all duration-300 hover:bg-[#0B3C88]/[0.08] text-[#0B3C88]"
            >
              {link.name}
            </motion.a>
          ))}

          {/* زرار تبديل اللغة */}
          <button 
            onClick={() => setLang && setLang(lang === "ar" ? "en" : "ar")}
            className="ml-4 px-3 py-1.5 rounded-full border border-[#0B3C88]/20 bg-[#0B3C88] text-white text-xs hover:bg-[#38B6FF] transition-colors font-sans"
          >
            {lang === "ar" ? "EN" : "عربي"}
          </button>
        </div>

        {/* زرار الموبايل */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={() => setLang && setLang(lang === "ar" ? "en" : "ar")}
            className="px-2.5 py-1 rounded-full bg-[#0B3C88] text-white text-xs"
          >
            {lang === "ar" ? "EN" : "عربي"}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[#0B3C88]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d={isOpen ? "M3 12L21 12M3 6l18 0M3 18l18 0" : "M4 6h16M4 12h16M4 18h16"} strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* قائمة الموبايل المنسدلة */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white border border-neutral-200 rounded-3xl flex flex-col p-4 gap-2 text-center shadow-xl"
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="py-2.5 rounded-full bg-[#0B3C88]/[0.04] text-[#0B3C88] font-medium">
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}