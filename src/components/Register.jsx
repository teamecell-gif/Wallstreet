import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Register = () => {
  // 1. State for form data and submission status
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    isDeclared: false
  });
  
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // 2. Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // 3. Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic Validation
    if (!formData.isDeclared) {
      setStatus('error');
      setErrorMessage('You must agree to the terms and conditions.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // 4. Send data to your backend API
      const response = await fetch('https://wallstreet-backend-sbuv.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message || result.error || 'Something went wrong');

      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', college: '', isDeclared: false }); // Reset form
      
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  return (
    <section className="py-24 bg-surface-dark/20 relative overflow-hidden" id="register">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-[600px] bg-primary/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-[800px] mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-surface-dark border border-border-dark rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-black text-white">Join Wall Street</h2>
              <p className="text-white/60">Fill out the form below to register for the competition.</p>
            </div>
            
            {/* Show Success Message */}
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/10 border border-green-500/20 p-6 rounded-lg text-green-400 text-center"
              >
                <h3 className="text-xl font-bold mb-2">Registration Successful!</h3>
                <p>We have received your details. Check your email for confirmation.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm font-bold hover:text-green-300 underline"
                >
                  Register another student
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-white/80">Full Name</label>
                  <input 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                    placeholder="John Doe" 
                    type="text" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-white/80">Email Address</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                    placeholder="john@university.edu" 
                    type="email" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-white/80">Contact Number</label>
                  <input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                    placeholder="+91 666 000 0000" 
                    type="tel" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-white/80">College Name</label>
                  <input 
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    required
                    className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                    placeholder="VNIT Nagpur" 
                    type="text" 
                  />
                </div>
                
                <div className="md:col-span-2 flex items-start gap-3 pt-2">
                  <input 
                    name="isDeclared"
                    checked={formData.isDeclared}
                    onChange={handleChange}
                    className="mt-1 size-5 rounded border-border-dark bg-background-dark text-primary focus:ring-primary focus:ring-offset-background-dark" 
                    id="declare" 
                    type="checkbox" 
                  />
                  <label className="text-sm text-white/60 leading-normal select-none" htmlFor="declare">
                    I hereby declare that the information provided is correct and I agree to the terms and conditions of the Wall Street Trading Competition.
                  </label>
                </div>
                
                {status === 'error' && (
                  <div className="md:col-span-2 text-red-400 text-sm font-medium bg-red-400/10 p-3 rounded border border-red-400/20">
                    Error: {errorMessage}
                  </div>
                )}

                <div className="md:col-span-2 pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === 'submitting'}
                    className={`w-full h-14 bg-primary text-background-dark font-black text-lg rounded-lg transition-all glow-orange ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90'}`} 
                    type="submit"
                  >
                    {status === 'submitting' ? 'Registering...' : 'Submit Registration'}
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Register;