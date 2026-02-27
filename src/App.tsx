import { motion } from "motion/react";
import { ArrowRight, Building2, ShieldCheck, Briefcase, Coffee, Mail, Phone, MapPin, Calendar } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
                <Building2 size={20} />
              </div>
              <span className="text-xl font-bold text-stone-900">99樟树林</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-stone-600 hover:text-emerald-600 transition-colors">首页</a>
              <a href="#services" className="text-stone-600 hover:text-emerald-600 transition-colors">园区服务</a>
              <a href="#events" className="text-stone-600 hover:text-emerald-600 transition-colors">近期活动</a>
              <a href="#contact" className="text-stone-600 hover:text-emerald-600 transition-colors">联系入驻</a>
            </div>
            <a href="#contact" className="bg-emerald-600 text-white px-5 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors">
              联系我们
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6">
              欢迎来到 99樟树林
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 mb-8 leading-tight">
              卓越的园区生态<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">专业的运营管家</span>
            </h1>
            <p className="text-xl text-stone-600 mb-10 leading-relaxed">
              我们致力于为园区租户提供高品质的物业管理与全方位的企业运营服务，打造绿色、智能、高效的办公环境，助力企业安心发展。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
                申请入驻 <ArrowRight size={20} />
              </a>
              <a href="#services" className="bg-white text-stone-700 border border-stone-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-stone-50 transition-all flex items-center justify-center gap-2">
                了解服务
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Hero Image Placeholder */}
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://picsum.photos/seed/park1/800/600" 
                alt="园区大门实景" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-xl">
                99
              </div>
              <div>
                <p className="text-sm text-stone-500 font-medium">入驻企业</p>
                <p className="text-xl font-bold text-stone-900">100+ 家</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">全方位的园区运营服务</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">从基础物业到企业增值服务，我们为您提供全生命周期的管家式体验。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "高品质物业管理", desc: "24小时安保巡逻、专业环境保洁、设施设备定期维护，确保园区安全、整洁、有序。" },
              { icon: Briefcase, title: "企业增值服务", desc: "提供政策申报指导、工商财税咨询、人才招聘对接等服务，全面赋能企业成长。" },
              { icon: Coffee, title: "完善的配套设施", desc: "配备共享会议室、员工餐厅、休闲咖啡吧及充足车位，满足企业日常办公与商务需求。" }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 transition-all"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment Gallery Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-4">园区环境实景</h2>
              <p className="text-stone-600 max-w-2xl">绿树成荫，设施完善，为您打造舒适的办公体验。</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md group">
              <img src="https://picsum.photos/seed/office1/600/400" alt="办公环境" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md group">
              <img src="https://picsum.photos/seed/office2/600/400" alt="绿化景观" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md group">
              <img src="https://picsum.photos/seed/office3/600/400" alt="配套设施" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section id="events" className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-4">
                社区动态
              </span>
              <h2 className="text-3xl font-bold text-stone-900 mb-4">近期园区活动</h2>
              <p className="text-stone-600 max-w-2xl">参与丰富的社区活动，拓展商业人脉，激发创新灵感。</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
              查看全部活动 <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "2026 创新企业财税政策解读会",
                date: "2026年3月15日 14:00",
                location: "园区 A 栋共享会议中心",
                image: "https://picsum.photos/seed/event1/600/400",
                status: "报名中"
              },
              {
                title: "春季园区企业羽毛球联谊赛",
                date: "2026年3月22日 09:00",
                location: "园区文体活动中心",
                image: "https://picsum.photos/seed/event2/600/400",
                status: "即将开始"
              },
              {
                title: "AI 时代下的企业数字化转型沙龙",
                date: "2026年4月5日 15:30",
                location: "园区 B 栋咖啡路演厅",
                image: "https://picsum.photos/seed/event3/600/400",
                status: "筹备中"
              }
            ].map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-700">
                    {event.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-emerald-600 transition-colors">{event.title}</h3>
                  <div className="space-y-2 text-sm text-stone-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-emerald-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-emerald-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (Lead Generation) */}
      <section id="contact" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12 bg-emerald-600 text-white flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">准备好入驻了吗？</h2>
                <p className="text-emerald-100 mb-8 leading-relaxed">
                  留下您的联系方式，我们的招商运营专员将在24小时内与您取得联系，为您提供详细的园区介绍与报价方案。
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-emerald-200">招商热线</p>
                      <p className="font-semibold">400-XXX-XXXX (待补充)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-emerald-200">园区地址</p>
                      <p className="font-semibold">XX市XX区XX路99号 (待补充)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-12">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">您的姓名 / 称呼</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="例如：张先生" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">联系电话</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="您的手机号码" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">意向需求 (选填)</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="例如：需要500平米办公场地，预计下个月入驻..."></textarea>
                  </div>
                  <button className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                    提交咨询
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
                <Building2 size={20} />
              </div>
              <span className="text-xl font-bold text-white">99樟树林</span>
            </div>
            <p className="max-w-sm">
              专业的园区物业管理与运营服务商，致力于为企业提供优质的办公环境与发展土壤。
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">首页</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">园区服务</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">近期活动</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">联系入驻</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">联系方式</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><Phone size={16} /> 400-XXX-XXXX</li>
              <li className="flex items-center gap-2"><Mail size={16} /> contact@99zhangshulin.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-sm text-center">
          © {new Date().getFullYear()} 99樟树林. 保留所有权利.
        </div>
      </footer>
    </div>
  );
}
