import React from 'react'
import { motion } from 'framer-motion'
import { Search, Megaphone, Palette, BarChart3, Globe, Smartphone, TrendingUp, Target, Users, Zap, Star, ArrowRight, CheckCircle, Award } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Search,
      title: 'SEO & Marketing de Conteúdo',
      description: 'Posicionamento orgânico estratégico que gera tráfego qualificado e aumenta a autoridade da sua marca.',
      features: [
        'Auditoria completa de SEO',
        'Estratégia de palavras-chave',
        'Criação de conteúdo otimizado',
        'Link building estratégico'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Megaphone,
      title: 'Gestão de Redes Sociais',
      description: 'Presença digital marcante que engaja sua audiência e constrói relacionamentos duradouros.',
      features: [
        'Planejamento de conteúdo',
        'Design gráfico profissional',
        'Gestão de comunidade',
        'Análise de performance'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: BarChart3,
      title: 'Google Ads & Meta Ads',
      description: 'Campanhas pagas otimizadas que maximizam ROI e aceleram o crescimento do seu negócio.',
      features: [
        'Configuração de campanhas',
        'Otimização contínua',
        'Remarketing estratégico',
        'Relatórios detalhados'
      ],
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Palette,
      title: 'Design & Identidade Visual',
      description: 'Criação de identidades visuais marcantes que comunicam os valores da sua marca.',
      features: [
        'Logo e identidade visual',
        'Material gráfico',
        'Design para web',
        'Branding estratégico'
      ],
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Globe,
      title: 'Desenvolvimento Web',
      description: 'Sites modernos, responsivos e otimizados para conversão que impressionam visitantes.',
      features: [
        'Sites responsivos',
        'E-commerce completo',
        'Otimização de velocidade',
        'Experiência do usuário'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Consultoria',
      description: 'Análises profundas e insights estratégicos para tomadas de decisão baseadas em dados.',
      features: [
        'Configuração de analytics',
        'Relatórios personalizados',
        'Consultoria estratégica',
        'KPIs e métricas'
      ],
      color: 'from-indigo-500 to-blue-600'
    }
  ]

  const processSteps = [
    {
      icon: Target,
      title: 'Diagnóstico',
      description: 'Análise completa do seu negócio e mercado'
    },
    {
      icon: Zap,
      title: 'Estratégia',
      description: 'Desenvolvimento de plano personalizado'
    },
    {
      icon: Users,
      title: 'Execução',
      description: 'Implementação das ações planejadas'
    },
    {
      icon: BarChart3,
      title: 'Otimização',
      description: 'Monitoramento e melhoria contínua'
    }
  ]

  const testimonials = [
    {
      name: 'Maria Silva',
      company: 'TechStart',
      text: 'A Nexus transformou completamente nossa presença digital. Triplicamos nossos leads em 6 meses.',
      rating: 5
    },
    {
      name: 'João Santos',
      company: 'E-Commerce Plus',
      text: 'Profissionais excepcionais! Nosso ROI aumentou 400% com as campanhas que desenvolveram.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      company: 'Consultoria Business',
      text: 'Parceria estratégica fundamental para nosso crescimento. Recomendo para qualquer empresa.',
      rating: 5
    }
  ]

  return (
    <section id="servicos" className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-primary-100 p-2 rounded-lg">
              <Smartphone className="w-6 h-6 text-primary-600" />
            </div>
            <span className="text-primary-600 font-semibold text-lg">Nossos Serviços</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Soluções Completas para
            <span className="gradient-text block"> Seu Sucesso Digital</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Da estratégia à execução, oferecemos um ecossistema completo de serviços 
            para acelerar o crescimento da sua marca no ambiente digital.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  className="mt-8 flex items-center space-x-2 text-primary-600 font-semibold group-hover:text-primary-700 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-12 text-white mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Nosso Processo de Trabalho</h3>
            <p className="text-xl text-primary-100">
              Uma metodologia comprovada para garantir resultados excepcionais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  
                  <div className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-primary-100">{step.description}</p>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-white/30 transform -translate-y-1/2"></div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-accent-100 p-2 rounded-lg">
              <Award className="w-6 h-6 text-accent-600" />
            </div>
            <span className="text-accent-600 font-semibold text-lg">Depoimentos</span>
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            O que nossos clientes dizem
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}