import { FC, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '../../utils/emailjs';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Contact: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // Prepare the template parameters based on your EmailJS template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };
      
      // Send the email using EmailJS
      const { success, error } = await sendEmail(templateParams);
      
      if (success) {
        setFormStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      } else {
        setFormStatus('error');
        setErrorMessage('There was an error sending your message. Please try again later.');
        
        // Reset error status after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
          setErrorMessage('');
        }, 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setErrorMessage('There was an error sending your message. Please try again later.');
      
      console.error('Error submitting form:', error);
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <section className="section-spacing" id="contact">
      <div className="container mx-auto px-6">
        <motion.div 
          className="bg-gradient-to-br from-darkGray/80 to-black/80 backdrop-blur-lg rounded-2xl p-8 md:p-16 border border-white/5 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-mint/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-mint/5 blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h2 
              className="text-4xl md:text-5xl font-heading mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in Touch
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Have questions about TapEats? We're here to help! Connect with our team for expert assistance.
            </motion.p>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Contact Form */}
              <div>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-mint transition-colors"
                      placeholder="Your name"
                      disabled={formStatus === 'submitting'}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-mint transition-colors"
                      placeholder="your@email.com"
                      disabled={formStatus === 'submitting'}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-mint transition-colors"
                      disabled={formStatus === 'submitting'}
                    >
                      <option value="">Select a subject</option>
                      <option value="Sales Inquiry">Sales Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Partnership">Partnership</option>
                      <option value="General Questions">General Questions</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-mint transition-colors resize-none"
                      placeholder="How can we help you?"
                      disabled={formStatus === 'submitting'}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-3 px-6 bg-gradient-to-r from-mint to-mintDarker text-black font-medium rounded-lg hover:shadow-lg hover:shadow-mint/20 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {formStatus === 'success' && (
                    <div className="mt-4 p-3 bg-mint/10 border border-mint/20 rounded-lg text-mint text-center">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}
                  
                  {formStatus === 'error' && (
                    <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center">
                      {errorMessage || 'There was an error sending your message. Please try again.'}
                    </div>
                  )}
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-mint/10 rounded-lg flex items-center justify-center text-mint flex-shrink-0 mt-1">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">Phone</h4>
                        <p className="text-muted">+91 9510320237</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-mint/10 rounded-lg flex items-center justify-center text-mint flex-shrink-0 mt-1">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">Email</h4>
                        <p className="text-muted">supatel5678.90@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-mint/10 rounded-lg flex items-center justify-center text-mint flex-shrink-0 mt-1">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">Address</h4>
                        <p className="text-muted">Vadodara, Gujarat</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-mint hover:text-black transition-all hover:-translate-y-1">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-mint hover:text-black transition-all hover:-translate-y-1">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-mint hover:text-black transition-all hover:-translate-y-1">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-mint hover:text-black transition-all hover:-translate-y-1">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};