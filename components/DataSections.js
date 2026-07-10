"use client";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function DataSections({ t, lang }) {
  // داتا أعضاء هيئة التدريس المستخرجة من الملفات المرفوعة
  const facultyMembers = [
    { name_ar: "أ.د. محمد لطفي", name_en: "Prof. Mohamed Lotfy", role_ar: "عميد المعهد", role_en: "Dean of Institute", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400" },
    { name_ar: "د. حنان مرسي", name_en: "Prof. Hanan Morsi", role_ar: "رئيس قسم نظم المعلومات", role_en: "Head of Information Systems Dept.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" },
    { name_ar: "د. أحمد سمير", name_en: "Dr. Ahmed Samir", role_ar: "أستاذ المحاسبة والتمويل", role_en: "Professor of Accounting & Finance", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400" }
  ];

  // داتا الأبحاث والمشاريع المتميزة للطلاب
  const items = [
    { title_ar: "تحليل البيانات الضخمة باستخدام الذكاء الاصطناعي", title_en: "Big Data Analysis Using AI", tag_ar: "نظم معلومات", tag_en: "Information Systems", desc_ar: "مختبر دلتا البحثي للتطوير والابتكار.", desc_en: "Delta Research Lab for Innovation." },
    { title_ar: "مشروع نظام رعاية صحية ذكي (Medical Companion)", title_en: "Smart Healthcare System", tag_ar: "مشاريع تخرج", tag_en: "Graduation Projects", desc_ar: "إشراف د. حميدة أشرف - لوحة تحكم وإدارة كاملة.", desc_en: "Supervised by Dr. Hamida Ashraf - Full Dashboard Hub." }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      
      {/* ==================== سكشن أعضاء هيئة التدريس ==================== */}
      <section id="faculty" className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0B3C88] text-center mb-12">
          {t?.sections?.faculty || "أعضاء هيئة التدريس"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facultyMembers.map((member, i) => (
            <motion.div 
              key={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-neutral-50 border border-neutral-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-[#38B6FF]/30 group-hover:border-[#38B6FF] transition-colors">
                <img src={member.img} alt="Faculty" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#0B3C88]">
                {lang === "ar" ? member.name_ar : member.name_en}
              </h3>
              <p className="text-sm text-neutral-500 mt-1">
                {lang === "ar" ? member.role_ar : member.role_en}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================== سكشن الأبحاث والمشاريع ==================== */}
      <section id="research" className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B3C88] text-center mb-12">
            {t?.sections?.research || "الأبحاث والمشاريع"}
          </h2>
          <div className="space-y-6">
            {items.map((item, i) => (
              <motion.div 
                key={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white border border-neutral-200/60 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-[#38B6FF]/50 transition-all"
              >
                <div>
                  <span className="text-xs bg-[#38B6FF]/10 text-[#0B3C88] px-3 py-1 rounded-full border border-[#38B6FF]/20 font-semibold mb-2 inline-block">
                    {lang === "ar" ? item.tag_ar : item.tag_en}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B3C88]">
                    {lang === "ar" ? item.title_ar : item.title_en}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1">
                    {lang === "ar" ? item.desc_ar : item.desc_en}
                  </p>
                </div>
                <button className="text-xs bg-[#0B3C88] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#38B6FF] transition-colors">
                  {lang === "ar" ? "عرض التفاصيل" : "View Details"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== سكشن المكتبة الرقمية ==================== */}
      <section id="library" className="py-20 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0B3C88] mb-6">
          {t?.sections?.library || "المكتبة الرقمية"}
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
          {lang === "ar" 
            ? "وصول كامل ومباشر للكتب الرقمية، المراجع الأكاديمية والمقالات العلمية المخصصة لطلاب وأعضاء هيئة تدريس دلتا." 
            : "Full access to digital books, academic references, and scientific papers tailored for Delta students and faculty."}
        </p>
        <button className="px-6 py-3 bg-[#0B3C88] text-white font-medium rounded-full hover:bg-[#38B6FF] transition-all shadow-sm">
          {lang === "ar" ? "تصفح المراجع الرقمية" : "Browse Resources"}
        </button>
      </section>

    </div>
  );
}