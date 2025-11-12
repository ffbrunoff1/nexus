import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, TrendingUp, Target, Star, ArrowRight, Sparkles, Users, Award } from 'lucide-react'

export default function Hero() {
  const stats = [
    { icon: Users, number: '500+', label: 'Clientes Satisfeitos' },
    { icon: Rocket, number: '1200+', label: 'Campanhas Lançadas' },
    { icon: TrendingUp, number: '300%', label: 'ROI Médio' },
    { icon: Award, number: '50+', label: 'Prêmios Conquistados' }
  ]

  const features = [
    { icon: Target, title: 'Estratégias Personalizadas', desc: 'Soluções únicas para cada negócio' },
    { icon: TrendingUp, title: 'Resultados Comprovados', desc: 'Métricas que realmente importam' },
    { icon: Sparkles, title: 'Inovação Constante', desc: 'Sempre à frente das tendências' }
  ]

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container-custom section-padding relative z-10 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-accent-400" />
                <span className="text-accent-400 font-medium text-lg">Transforme Seu Negócio</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Marketing Digital
                <span className="gradient-text block">Revolucionário</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Sua marca merece destaque no mundo digital. Com estratégias inovadoras e 
                resultados comprovados, transformamos visitantes em clientes fiéis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="btn-primary group flex items-center justify-center space-x-2 text-lg py-4 px-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Começar Agora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                className="btn-secondary group flex items-center justify-center space-x-2 text-lg py-4 px-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Ver Portfólio</span>
                <Star className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-6 pt-8"
            >
              {stats.slice(0, 2).map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                      <IconComponent className="w-6 h-6 text-accent-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">Dashboard Analytics</h3>
                    <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {stats.slice(2).map((stat, index) => {
                      const IconComponent = stat.icon
                      return (
                        <motion.div
                          key={index}
                          className="bg-white/10 rounded-xl p-4 text-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <IconComponent className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">{stat.number}</div>
                          <div className="text-gray-300 text-xs">{stat.label}</div>
                        </motion.div>
                      )
                    })}
                  </div>

                  <div className="space-y-3">
                    {features.map((feature, index) => {
                      const IconComponent = feature.icon
                      return (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <IconComponent className="w-5 h-5 text-primary-400" />
                          <div>
                            <div className="text-white font-medium text-sm">{feature.title}</div>
                            <div className="text-gray-400 text-xs">{feature.desc}</div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-accent-500 p-4 rounded-2xl shadow-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Rocket className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-primary-500 p-4 rounded-2xl shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}