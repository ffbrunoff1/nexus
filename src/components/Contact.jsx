import React, { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Clock, MessageSquare } from 'lucide-react'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        ...formData,
        recipientEmail: '',
        token: token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
          isError: false
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Falha no envio')
      }
    } catch (error) {
      setStatus({
        message: 'Erro ao enviar mensagem. Tente novamente mais tarde.',
        isError: true
      })
    } finally {
      recaptchaRef.current.reset()
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(61) 99182-4897',
      action: 'tel:(61)99182-4897'
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'QN7F Conjunto 5 Lote 4, 102',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      info: 'Segunda à Sexta: 8h às 18h',
      action: '#'
    }
  ]

  const faqs = [
    {
      question: 'Quanto tempo leva para ver resultados?',
      answer: 'Os primeiros resultados aparecem entre 30 a 90 dias, dependendo da estratégia aplicada.'
    },
    {
      question: 'Vocês trabalham com empresas de todos os tamanhos?',
      answer: 'Sim! Temos soluções personalizadas para pequenas, médias e grandes empresas.'
    },
    {
      question: 'Como é feito o acompanhamento dos resultados?',
      answer: 'Fornecemos relatórios mensais detalhados e reuniões de acompanhamento regulares.'
    },
    {
      question: 'Qual o investimento mínimo necessário?',
      answer: 'Oferecemos planos flexíveis a partir de R$ 2.500/mês, adaptados às suas necessidades.'
    },
    {
      question: 'Vocês oferecem garantia de resultados?',
      answer: 'Trabalhamos com metas claras e oferecemos garantia de satisfação em todos os nossos projetos.'
    }
  ]

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
              <MessageSquare className="w-6 h-6 text-primary-600" />
            </div>
            <span className="text-primary-600 font-semibold text-lg">Fale Conosco</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Vamos Conversar Sobre
            <span className="gradient-text block"> Seu Próximo Projeto</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para transformar seus desafios em oportunidades. 
            Entre em contato e descubra como podemos acelerar seu crescimento digital.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Envie sua mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Assunto *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="SEO e Marketing de Conteúdo">SEO e Marketing de Conteúdo</option>
                      <option value="Gestão de Redes Sociais">Gestão de Redes Sociais</option>
                      <option value="Google Ads e Meta Ads">Google Ads e Meta Ads</option>
                      <option value="Design e Identidade Visual">Design e Identidade Visual</option>
                      <option value="Desenvolvimento Web">Desenvolvimento Web</option>
                      <option value="Analytics e Consultoria">Analytics e Consultoria</option>
                      <option value="Orçamento Personalizado">Orçamento Personalizado</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                  ></textarea>
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center space-x-3 p-4 rounded-lg ${
                      status.isError 
                        ? 'bg-red-50 border border-red-200 text-red-700' 
                        : 'bg-green-50 border border-green-200 text-green-700'
                    }`}
                  >
                    {status.isError ? (
                      <AlertCircle className="w-5 h-5" />
                    ) : (
                      <CheckCircle className="w-5 h-5" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2 text-lg py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensagem</span>
                </motion.button>

                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                  size="invisible"
                />
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Escolha a forma mais conveniente para entrar em contato conosco. 
                Nossa equipe está sempre disponível para atendê-lo.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-600">{info.info}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              className="bg-gradient-to-br from-primary-600 to-accent-600 p-8 rounded-2xl text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold mb-4">Resposta Rápida Garantida</h4>
              <p className="text-primary-100 mb-4">
                Comprometemo-nos a responder todas as mensagens em até 2 horas durante 
                o horário comercial.
              </p>
              <div className="flex items-center space-x-2 text-primary-100">
                <CheckCircle className="w-5 h-5" />
                <span>Atendimento personalizado</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h3>
            <p className="text-xl text-gray-600">
              Tire suas principais dúvidas sobre nossos serviços
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-gray-900">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}