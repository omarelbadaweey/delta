// // "use client";
// // import { useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";

// // export default function Hero() {
// //   const containerRef = useRef(null);

// //   // مراقبة السكرول بالكامل داخل السكشن
// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start start", "end end"],
// //   });

// //   // 1. تأثير حركة الصورة لفوق (تأثير السكرول الطبيعي) في أول 20% من السكرول
// //   const imageY = useTransform(scrollYProgress, [0, 0.2, 1], [0, -80, -120]);

// //   // 2. تمدد السائل بـ Custom Cubic Bezier عشان النعومة والمطاطية
// //   // يبدأ السائل في الفتح بعد أول 15% من السكرول (عشان يسيب مساحة لحركة الصورة في الأول)
// //   const clipPathValue = useTransform(
// //     scrollYProgress,
// //     [0, 0.15, 0.85, 1],
// //     ["circle(0% at 50% 50%)", "circle(0% at 50% 50%)", "circle(130% at 50% 50%)", "circle(130% at 50% 50%)"]
// //   );

// //   // تأثير تلاشي وحركة نصوص الواجهة الأولى مع السكرول
// //   const textFade = useTransform(scrollYProgress, [0, 0.15, 0.35], [1, 1, 0]);
// //   const textY = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

// //   return (
// //     // خفضنا الـ h لـ 200vh عشان السكرول يخلص أسرع وينقلك للسكشن اللي بعده بسلاسة وبدون مماطلة
// //     <div ref={containerRef} className="relative h-[200vh] bg-white ">
      
// //       {/* الجزء الثابت المحبوس داخل الشاشة أثناء السكرول */}
// //       <div className="sticky top-0 h-screen w-screen overflow-hidden flex items-center justify-center">
        
// //         {/* ========================================================= */}
// //         {/* الطبقة الأولى المشرقة: شلنا الأوفرلاي الأسود تماماً وخليناها مريحة ونظيفة */}
// //         {/* ========================================================= */}
// //         <motion.div 
// //           style={{ y: imageY }}
// //           className="absolute inset-0 w-full h-[120vh] bg-cover bg-center flex flex-col items-center justify-center p-4 text-center select-none"
// //           // اخترت لك صورة مودرن ومشرقة مريحة للعين تتماشى مع الأبيض والكحلي
// //           style={{ 
// //             backgroundImage: "url('hero.jpg')",
// //             y: imageY 
// //           }}
// //         >
// //           {/* بديل الأوفرلاي الأسود: تدرج زجاجي أبيض شفاف جداً ناعم عشان يبرز النص الكحلي بنظافة */}
// //           <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white" />
          
// //           <motion.div style={{ opacity: textFade, y: textY }} className="z-10 space-y-4">
// //             <h1 className="text-6xl md:text-9xl font-serif tracking-[0.15em] font-bold text-[#0B3C88] drop-shadow-[0_4px_12px_rgba(11,60,136,0.06)]">
// //               DELTA TECH
// //             </h1>
// //             <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#0B3C88]/70 font-medium animate-pulse">
// //               انزل لأسفل لاكتشاف الإبداع
// //             </p>
// //           </motion.div>
// //         </motion.div>

// //         {/* ========================================================= */}
// //         {/* الطبقة الثانية: السائل المطاطي اللي بيفتح ويقلب الألوان بالكامل للكحلي الفخم */}
// //         {/* ========================================================= */}
// //         <motion.div
// //           style={{ 
// //             clipPath: clipPathValue,
// //             filter: "url(#liquid-gooey-effect)"
// //           }}
// //           // قلبنا الخلفية هنا للكحلي الأصلي بتاعك (#0B3C88)، والنص أبيض، واللمسات بالسيان لتأثير درامي ومبهر
// //           className="absolute inset-0 w-full h-full bg-[#0B3C88] text-white flex flex-col items-center justify-center p-6 text-center z-20"
// //         >
// //           {/* إضاءة خلفية نيون ناعمة بلون السيان تظهر خلف النص داخل السائل */}
// //           <div className="absolute w-[450px] h-[450px] bg-[#38B6FF]/15 blur-[120px] rounded-full pointer-events-none" />

// //           <div className="max-w-4xl space-y-6 px-4 z-10">
// //             <span className="text-xs font-semibold uppercase tracking-widest text-[#38B6FF] bg-[#38B6FF]/10 px-4 py-1.5 rounded-full border border-[#38B6FF]/20">
// //               مستقبل الواجهات الرقمية
// //             </span>
// //             <h2 className="text-4xl md:text-6xl font-bold tracking-wide text-white leading-tight">
// //               نصمم تجارب مستخدم <br />
// //               <span className="text-[#38B6FF]">تخطف الأنظار وتدوم</span>
// //             </h2>
// //             <p className="text-neutral-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
// //               نحن في أوريكس تك ندمج الفن بالبرمجة لنخلق واجهات رقمية انسيابية وسريعة متوافقة مع هويتك الفريدة.
// //             </p>
// //             <div className="w-16 h-[2px] bg-[#38B6FF]/40 mx-auto mt-6" />
// //           </div>
// //         </motion.div>

// //       </div>

// //       {/* فلتر الـ SVG السائل المحسن */}
// //       <svg className="absolute w-0 h-0 invisible pointer-events-none">
// //         <defs>
// //           <filter id="liquid-gooey-effect">
// //             <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
// //             <feColorMatrix 
// //               in="blur" 
// //               mode="matrix" 
// //               values="1 0 0 0 0  
// //                       0 1 0 0 0  
// //                       0 0 1 0 0  
// //                       0 0 0 22 -9" 
// //               result="goo" 
// //             />
// //             <feComposite in="SourceGraphic" in2="goo" operator="atop" />
// //           </filter>
// //         </defs>
// //       </svg>
// //     </div>
// //   );
// // }





// "use client";
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// // ضفنا تدمير للـ props مع وضع قيمة افتراضية فارغة { hero: {} } عشان لو الـ t ضربت متوقعش الموقع
// export default function Hero({ t = { hero: {} } }) {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
//   const clipPathValue = useTransform(
//     scrollYProgress,
//     [0, 0.2, 0.8, 1],
//     ["circle(0% at 50% 50%)", "circle(0% at 50% 50%)", "circle(150% at 50% 50%)", "circle(150% at 50% 50%)"]
//   );
//   const textFade = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);

//   // تأمين إضافي لقراءة القيم داخل الـ Text لمنع أي TypeError ران-تايم
//   const heroTitle = t?.hero?.title || "DELTA USA";
//   // const heroSubtitle = t?.hero?.subtitle || "انزل لأسفل لاكتشاف الإبداع";
//   const heroTag = t?.hero?.tag || "مستقبل التعليم الرقمي";
//   const heroH2_1 = t?.hero?.h2_1 || "نصمم تجارب تعليمية";
//   const heroH2_2 = t?.hero?.h2_2 || "تخطف الأنظار وتدوم";
//   const heroDesc = t?.hero?.desc || "";

//   return (
//     <div ref={containerRef} id="home" className="relative h-[200vh] bg-white ">
//       <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
//         {/* الطبقة الأولى المشرقة */}
//         <motion.div 
//           className="absolute inset-0 w-full h-full bg-cover bg-center flex flex-col items-center justify-center p-4 text-center select-none"
//           style={{ backgroundImage: "url('hero.jpg')", y: imageY }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white" />
//           <motion.div style={{ opacity: textFade }} className="z-10 space-y-4">
//             <h1 className="text-6xl md:text-9xl font-bold text-[#0B3C88] tracking-wide drop-shadow-sm">
//               {heroTitle}
//             </h1>
//             {/* <p className="text-xs md:text-sm uppercase text-[#0B3C88]/70 font-medium tracking-widest animate-pulse">
//               {heroSubtitle}
//             </p> */}
//           </motion.div>
//         </motion.div>

//         {/* الطبقة الثانية الكاشفة الفخمة */}
//         <motion.div
//           style={{ clipPath: clipPathValue , backgroundImage: "url('https://img.magnific.com/free-vector/abstract-organic-pattern-design-background_1048-19286.jpg?semt=ais_hybrid&w=740&q=80')", y: imageY }}
//           className="absolute inset-0 w-full h-full bg-[#4d6993] text-white flex flex-col items-center justify-center p-6 text-center z-20 "
//         >
//           <img src="logo.png" alt="" className="w-64 h-64 object-cover rounded-full" />
//         </motion.div>

//       </div>
//     </div>
//   );
// }




"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero({ t }) {
  const containerRef = useRef(null);
  
  // مراقبة السكرول داخل الحاوية الكبيرة (200vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // انيميشن الطبقة الأولى (تأثير بارالاكس خفيف وحركة النص)
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textFade = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  // انيميشن الطبقة الثانية (تأثير السائل المطاطي اللي بيفتح من النص)
  const clipPathValue = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [
      "circle(0% at 50% 50%)",
      "circle(0% at 50% 50%)",
      "circle(140% at 50% 50%)",
      "circle(140% at 50% 50%)"
    ]
  );

  const titleEn = t?.hero?.titleEn || "Delta Higher Institute";
  const subTitleEn = "for Management Information Systems and Accounting";
  const titleAr = t?.hero?.titleAr || "معهد دلتا العالي لنظم المعلومات الإدارية والمحاسبة";

  return (
    <div ref={containerRef} id="home" className="top-20 relative h-[200vh] bg-white select-none">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* ==================== الطبقة الأولى (التصميم الأبيض والنظيف) ==================== */}
        <motion.div 
          style={{ backgroundImage : `url('/heroo.jpeg')`, y: imageY }}
          className="absolute inset-0 w-full h-full bg-white flex flex-col items-center justify-center p-6 text-center z-10"
        >
          {/* الخلفية المستوحاة من الجرافيك الأزرق الناعم في الصورة */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            {/* الدوائر والمنحنيات الزرقاء في الأركان */}
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-linear-to-br from-[#0B3C88]/20 to-transparent blur-2xl" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-linear-to-tl from-[#0B3C88]/30 to-transparent blur-3xl" />
            {/* شبكة النقاط (Dot Grid) الزخرفية مثل الصورة */}
            <div className="absolute top-10 left-10 w-24 h-24 bg-[radial-gradient(#0B3C88_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-[radial-gradient(#0B3C88_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />
          </div>

          {/* محتوى المعهد (نفس ترتيب الصورة واللوجو) */}
          <motion.div 
            style={{ opacity: textFade, y: textY }} 
            className="z-10 max-w-4xl flex flex-col items-center space-y-6 md:space-y-8"
          >
            {/* مكان اللوجو الدائري الأزرق */}
            <div className="w-34 h-34 md:w-44 md:h-44 border-4 border-[#0B3C88] overflow-hidden rounded-full flex items-center justify-center p-2 bg-white shadow-md">
              <video src="/logo.mp4" autoPlay muted loop alt="Delta Logo" className="w-full h-full scale-[1.110]" />
            </div>

            {/* النصوص بالإنجليزية والعربية */}
            <div className="space-y-3">
              <h1 className="text-2xl md:text-4xl font-bold text-[#0B3C88] tracking-wide leading-tight font-sans">
                {titleEn}
              </h1>
              <p className="text-lg md:text-xl font-medium text-[#0B3C88] max-w-2xl mx-auto">
                {subTitleEn}
              </p>
            </div>

            <div className="w-full max-w-xl border-t border-[#0B3C88]/20 pt-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#0B3C88] leading-relaxed dir-rtl">
                {titleAr}
              </h2>
            </div>
          </motion.div>
        </motion.div>

        {/* ==================== الطبقة الثانية (تأثير السائل والكشف الفخم) ==================== */}
 <motion.div
  style={{ 
    clipPath: clipPathValue,
    filter: "url(#liquid-gooey-effect)",
    backgroundImage: "url('/hero.jpg')" // تأكد أن الاسم مطابق لملف الصورة الفعلي في فولدر public (مثلاً hero.jpg أو bg.jpg)
  }}
  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat text-white flex flex-col items-center justify-center p-6 text-center z-20 before:absolute before:inset-0 before:bg-slate-950/85 before:z-0"
>
  {/* إضاءة خلفية نيون خفيفة (تم تعديل المقاس لكلاسات Tailwind القياسية لضمان الظهور) */}
  <div className="absolute w-125 h-125 bg-cyan-400/10 blur-[150px] rounded-full pointer-events-none z-10" />

  {/* المحتوى الداخلي عند التحول بالكامل */}
  <div className="max-w-4xl space-y-8 px-4 z-10 flex flex-col items-center relative">
    
    {/* حاوية اللوجو مع معالجة الشفافية والمظهر المضيء */}
    <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden bg-slate-900/30 backdrop-blur-md p-4 border border-white/15 shadow-2xl flex items-center justify-center group">
      
      {/* اللوجو الأصلي */}
              <video src="/logo.mp4" autoPlay muted loop alt="Delta Logo" className="w-full h-full scale-[1.150]" />

      
      {/* تأثير اللمعان المتحرك (Shine Effect) */}
      <div className="absolute inset-0 top-0 left-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shine pointer-events-none z-30" />
    </div>
    
    <div className="space-y-4">

      <h3 className="text-3xl md:text-5xl font-bold tracking-wide text-white leading-tight">
        نصنع قادة الغد في <br />
        <span className="text-cyan-400">مجالات التكنولوجيا والمحاسبة</span>
      </h3>
    </div>
  </div>
</motion.div>

      </div>

      {/* فلتر الـ SVG السائل (Gooey Effect) */}
      <svg className="absolute w-0 h-0 invisible pointer-events-none">
        <defs>
          <filter id="liquid-gooey-effect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 20 -9" 
              result="goo" 
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}