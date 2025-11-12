import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Zap, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' }
  ]

  const services = [
    'SEO & Marketing de Conteúdo',
    'Gestão de Redes Sociais',
    'Google Ads & Meta Ads',
    'Design & Identidade Visual',
    'Desenvolvimento Web',
    'Analytics & Consultoria'
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: '(61) 99182-4897',
      href: 'tel:(61)99182-4897'
    },
    {
      icon: MapPin,
      text: 'QN7F Conjunto 5 Lote 4, 102',
      href: '#'
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute top-8 right-8 bg-primary-600 hover:bg-primary-700 p-3 rounded-full transition-colors duration-300 z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      <div className="container-custom relative z-10">
        <div className="section-padding !pb-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-2 rounded-xl">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <span className="text-3xl font-bold">Nexus</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Transformando negócios através de estratégias digitais inovadoras e 
                resultados mensuráveis. Sua parceira para o sucesso online.
              </p>
              
              <div className="space-y-3">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>{info.text}</span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold">Links Rápidos</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="block text-gray-300 hover:text-primary-400 transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold">Nossos Serviços</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold">Pronto para Começar?</h3>
              <p className="text-gray-300">
                Entre em contato conosco hoje mesmo e descubra como podemos 
                transformar sua presença digital.
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="tel:(61)99182-4897"
                  className="block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-primary-700 hover:to-accent-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ligar Agora
                </motion.a>
                
                <motion.a
                  href="#contato"
                  className="block border border-primary-600 text-primary-400 px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary-600 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Enviar Mensagem
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Nexus. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-center md:text-right">
              <span>Criado com</span>
              <motion.a
                href="https://papum.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <em>Papum</em>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}