// "use client";
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function Hero() {
//   const containerRef = useRef(null);

//   // مراقبة السكرول بالكامل داخل السكشن
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // 1. تأثير حركة الصورة لفوق (تأثير السكرول الطبيعي) في أول 20% من السكرول
//   const imageY = useTransform(scrollYProgress, [0, 0.2, 1], [0, -80, -120]);

//   // 2. تمدد السائل بـ Custom Cubic Bezier عشان النعومة والمطاطية
//   // يبدأ السائل في الفتح بعد أول 15% من السكرول (عشان يسيب مساحة لحركة الصورة في الأول)
//   const clipPathValue = useTransform(
//     scrollYProgress,
//     [0, 0.15, 0.85, 1],
//     ["circle(0% at 50% 50%)", "circle(0% at 50% 50%)", "circle(130% at 50% 50%)", "circle(130% at 50% 50%)"]
//   );

//   // تأثير تلاشي وحركة نصوص الواجهة الأولى مع السكرول
//   const textFade = useTransform(scrollYProgress, [0, 0.15, 0.35], [1, 1, 0]);
//   const textY = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

//   return (
//     // خفضنا الـ h لـ 200vh عشان السكرول يخلص أسرع وينقلك للسكشن اللي بعده بسلاسة وبدون مماطلة
//     <div ref={containerRef} className="relative h-[200vh] bg-white ">
      
//       {/* الجزء الثابت المحبوس داخل الشاشة أثناء السكرول */}
//       <div className="sticky top-0 h-screen w-screen overflow-hidden flex items-center justify-center">
        
//         {/* ========================================================= */}
//         {/* الطبقة الأولى المشرقة: شلنا الأوفرلاي الأسود تماماً وخليناها مريحة ونظيفة */}
//         {/* ========================================================= */}
//         <motion.div 
//           style={{ y: imageY }}
//           className="absolute inset-0 w-full h-[120vh] bg-cover bg-center flex flex-col items-center justify-center p-4 text-center select-none"
//           // اخترت لك صورة مودرن ومشرقة مريحة للعين تتماشى مع الأبيض والكحلي
//           style={{ 
//             backgroundImage: "url('hero.jpg')",
//             y: imageY 
//           }}
//         >
//           {/* بديل الأوفرلاي الأسود: تدرج زجاجي أبيض شفاف جداً ناعم عشان يبرز النص الكحلي بنظافة */}
//           <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white" />
          
//           <motion.div style={{ opacity: textFade, y: textY }} className="z-10 space-y-4">
//             <h1 className="text-6xl md:text-9xl font-serif tracking-[0.15em] font-bold text-[#0B3C88] drop-shadow-[0_4px_12px_rgba(11,60,136,0.06)]">
//               DELTA TECH
//             </h1>
//             <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#0B3C88]/70 font-medium animate-pulse">
//               انزل لأسفل لاكتشاف الإبداع
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* ========================================================= */}
//         {/* الطبقة الثانية: السائل المطاطي اللي بيفتح ويقلب الألوان بالكامل للكحلي الفخم */}
//         {/* ========================================================= */}
//         <motion.div
//           style={{ 
//             clipPath: clipPathValue,
//             filter: "url(#liquid-gooey-effect)"
//           }}
//           // قلبنا الخلفية هنا للكحلي الأصلي بتاعك (#0B3C88)، والنص أبيض، واللمسات بالسيان لتأثير درامي ومبهر
//           className="absolute inset-0 w-full h-full bg-[#0B3C88] text-white flex flex-col items-center justify-center p-6 text-center z-20"
//         >
//           {/* إضاءة خلفية نيون ناعمة بلون السيان تظهر خلف النص داخل السائل */}
//           <div className="absolute w-[450px] h-[450px] bg-[#38B6FF]/15 blur-[120px] rounded-full pointer-events-none" />

//           <div className="max-w-4xl space-y-6 px-4 z-10">
//             <span className="text-xs font-semibold uppercase tracking-widest text-[#38B6FF] bg-[#38B6FF]/10 px-4 py-1.5 rounded-full border border-[#38B6FF]/20">
//               مستقبل الواجهات الرقمية
//             </span>
//             <h2 className="text-4xl md:text-6xl font-bold tracking-wide text-white leading-tight">
//               نصمم تجارب مستخدم <br />
//               <span className="text-[#38B6FF]">تخطف الأنظار وتدوم</span>
//             </h2>
//             <p className="text-neutral-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
//               نحن في أوريكس تك ندمج الفن بالبرمجة لنخلق واجهات رقمية انسيابية وسريعة متوافقة مع هويتك الفريدة.
//             </p>
//             <div className="w-16 h-[2px] bg-[#38B6FF]/40 mx-auto mt-6" />
//           </div>
//         </motion.div>

//       </div>

//       {/* فلتر الـ SVG السائل المحسن */}
//       <svg className="absolute w-0 h-0 invisible pointer-events-none">
//         <defs>
//           <filter id="liquid-gooey-effect">
//             <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
//             <feColorMatrix 
//               in="blur" 
//               mode="matrix" 
//               values="1 0 0 0 0  
//                       0 1 0 0 0  
//                       0 0 1 0 0  
//                       0 0 0 22 -9" 
//               result="goo" 
//             />
//             <feComposite in="SourceGraphic" in2="goo" operator="atop" />
//           </filter>
//         </defs>
//       </svg>
//     </div>
//   );
// }





"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ضفنا تدمير للـ props مع وضع قيمة افتراضية فارغة { hero: {} } عشان لو الـ t ضربت متوقعش الموقع
export default function Hero({ t = { hero: {} } }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const clipPathValue = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["circle(0% at 50% 50%)", "circle(0% at 50% 50%)", "circle(150% at 50% 50%)", "circle(150% at 50% 50%)"]
  );
  const textFade = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);

  // تأمين إضافي لقراءة القيم داخل الـ Text لمنع أي TypeError ران-تايم
  const heroTitle = t?.hero?.title || "DELTA USA";
  // const heroSubtitle = t?.hero?.subtitle || "انزل لأسفل لاكتشاف الإبداع";
  const heroTag = t?.hero?.tag || "مستقبل التعليم الرقمي";
  const heroH2_1 = t?.hero?.h2_1 || "نصمم تجارب تعليمية";
  const heroH2_2 = t?.hero?.h2_2 || "تخطف الأنظار وتدوم";
  const heroDesc = t?.hero?.desc || "";

  return (
    <div ref={containerRef} id="home" className="relative h-[200vh] bg-white ">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* الطبقة الأولى المشرقة */}
        <motion.div 
          className="absolute inset-0 w-full h-full bg-cover bg-center flex flex-col items-center justify-center p-4 text-center select-none"
          style={{ backgroundImage: "url('hero.jpg')", y: imageY }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white" />
          <motion.div style={{ opacity: textFade }} className="z-10 space-y-4">
            <h1 className="text-6xl md:text-9xl font-bold text-[#0B3C88] tracking-wide drop-shadow-sm">
              {heroTitle}
            </h1>
            {/* <p className="text-xs md:text-sm uppercase text-[#0B3C88]/70 font-medium tracking-widest animate-pulse">
              {heroSubtitle}
            </p> */}
          </motion.div>
        </motion.div>

        {/* الطبقة الثانية الكاشفة الفخمة */}
        <motion.div
          style={{ clipPath: clipPathValue , backgroundImage: "url('https://img.magnific.com/free-vector/abstract-organic-pattern-design-background_1048-19286.jpg?semt=ais_hybrid&w=740&q=80')", y: imageY }}
          className="absolute inset-0 w-full h-full bg-[#4d6993] text-white flex flex-col items-center justify-center p-6 text-center z-20 "
        >
          <img src="logo.png" alt="" className="w-64 h-64 object-cover rounded-full" />
        </motion.div>

      </div>
    </div>
  );
}