import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Target, TrendingUp, Lightbulb, Shield, Zap, Heart, Star, CheckCircle } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Sempre buscando novas formas de impactar o mercado digital'
    },
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Amamos o que fazemos e isso se reflete em cada projeto'
    },
    {
      icon: Shield,
      title: 'Confiança',
      description: 'Transparência e honestidade em todas as nossas relações'
    },
    {
      icon: Zap,
      title: 'Agilidade',
      description: 'Resultados rápidos sem comprometer a qualidade'
    }
  ]

  const achievements = [
    { number: '500+', label: 'Projetos Concluídos' },
    { number: '98%', label: 'Taxa de Satisfação' },
    { number: '5 Anos', label: 'de Experiência' },
    { number: '50+', label: 'Prêmios Conquistados' }
  ]

  const differentials = [
    'Estratégias baseadas em dados reais',
    'Equipe multidisciplinar especializada',
    'Acompanhamento em tempo real',
    'ROI comprovado em todos os projetos',
    'Suporte 24/7 para nossos clientes',
    'Metodologia própria de desenvolvimento'
  ]

  return (
    <section id="sobre" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <span className="text-primary-600 font-semibold text-lg">Sobre a Nexus</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Transformamos
                <span className="gradient-text"> Visões </span>
                em Realidade Digital
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Na Nexus, acreditamos que cada marca tem uma história única para contar. 
                Nossa missão é amplificar essa narrativa através de estratégias de marketing 
                digital inovadoras e personalizadas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900">Nossos Diferenciais</h3>
              <div className="grid gap-4">
                {differentials.map((differential, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{differential}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600">{achievement.number}</div>
                  <div className="text-gray-600 text-sm">{achievement.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
              <p className="text-gray-600">
                Princípios que norteiam cada decisão e projeto que desenvolvemos
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-600 to-accent-600 p-8 rounded-2xl text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-6 h-6" />
                  <span className="font-semibold">Nossa Missão</span>
                </div>
                <p className="text-lg leading-relaxed">
                  Capacitar empresas de todos os tamanhos a alcançarem seu máximo potencial 
                  no ambiente digital, através de soluções criativas, estratégicas e 
                  orientadas por resultados mensuráveis.
                </p>
              </div>
              
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}