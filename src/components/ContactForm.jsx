import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Mail, Phone, User, Building, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.company.trim()) errs.company = 'Company / Organization is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.message.trim()) errs.message = 'Please include a message with your enquiry';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setErrorMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Product Enquiry: Pulsar Thermal Fusion Binocular (${formData.company})`,
          from_name: formData.name,
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success || response.status === 200) {
        setStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        // Handle API error
        console.error('Web3Forms Error:', result);
        setStatus('error');
        setErrorMessage(result.message || "We couldn't submit your enquiry. Please try again.");
      }
    } catch (err) {
      console.error('Submission error:', err);
      // If offline or test env without key, provide clean error response state
      setStatus('error');
      setErrorMessage("We couldn't submit your enquiry. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#05070B] border-t border-slate-800/80 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech tracking-widest uppercase">
              <Mail className="w-3.5 h-3.5" />
              <span>DIRECT PRODUCT ENQUIRY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight">
              REQUEST PRODUCT INFORMATION
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Interested in the Pulsar Thermal Fusion Binocular? Submit your details and our team will get in touch.
            </p>
          </div>

          {/* Form Card */}
          <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-cyan-500/30 shadow-[0_0_40px_rgba(0,217,255,0.15)] relative hud-corner">
            
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-cyan-950 border-2 border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(0,217,255,0.4)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">Enquiry Received</h3>
                <p className="text-sm font-mono-tech text-cyan-300 max-w-md mx-auto">
                  Thank you. Your enquiry has been received. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2.5 rounded glass-panel text-xs font-mono-tech text-slate-300 hover:text-white border border-cyan-500/30"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {status === 'error' && (
                  <div className="p-4 rounded-lg bg-red-950/60 border border-red-500/40 flex items-center gap-3 text-red-300 text-xs font-mono-tech animate-in fade-in">
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                    <span>{errorMessage || "We couldn't submit your enquiry. Please try again."}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-mono-tech text-slate-300 uppercase tracking-wider">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Cmdr. Rajesh Verma"
                        className={`w-full pl-10 pr-4 py-3 rounded-lg bg-slate-950/80 border text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 font-sans transition-all ${
                          errors.name ? 'border-red-500' : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-[11px] font-mono-tech text-red-400">{errors.name}</p>}
                  </div>

                  {/* Company / Organization */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-xs font-mono-tech text-slate-300 uppercase tracking-wider">
                      Company / Organization <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Strategic Defence Systems"
                        className={`w-full pl-10 pr-4 py-3 rounded-lg bg-slate-950/80 border text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 font-sans transition-all ${
                          errors.company ? 'border-red-500' : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                    </div>
                    {errors.company && <p className="text-[11px] font-mono-tech text-red-400">{errors.company}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-mono-tech text-slate-300 uppercase tracking-wider">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="r.verma@defencesys.in"
                        className={`w-full pl-10 pr-4 py-3 rounded-lg bg-slate-950/80 border text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 font-sans transition-all ${
                          errors.email ? 'border-red-500' : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-[11px] font-mono-tech text-red-400">{errors.email}</p>}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-mono-tech text-slate-300 uppercase tracking-wider">
                      Phone Number <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full pl-10 pr-4 py-3 rounded-lg bg-slate-950/80 border text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 font-sans transition-all ${
                          errors.phone ? 'border-red-500' : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-[11px] font-mono-tech text-red-400">{errors.phone}</p>}
                  </div>

                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-mono-tech text-slate-300 uppercase tracking-wider">
                    Message / Deployment Requirements <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify system quantity, operational environment or enquiry details..."
                      className={`w-full pl-10 pr-4 py-3 rounded-lg bg-slate-950/80 border text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 font-sans transition-all ${
                        errors.message ? 'border-red-500' : 'border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                  </div>
                  {errors.message && <p className="text-[11px] font-mono-tech text-red-400">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>256-bit Encrypted Transmission</span>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto px-8 py-4 rounded bg-cyan-500 text-slate-950 font-bold text-xs font-mono-tech tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,217,255,0.4)] hover:bg-cyan-400 disabled:opacity-50 transition-all duration-300 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>PROCESSING...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND ENQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
