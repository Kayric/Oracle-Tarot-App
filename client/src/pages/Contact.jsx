import React from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-slate-50 min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-slate-900">Contact Us</h2>
          <p className="mt-2 text-slate-500">We'd love to hear from you.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-yellow-500 outline-none" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-yellow-500 outline-none" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-yellow-500 outline-none resize-none" placeholder="Your thoughts..."></textarea>
            </div>
            <button type="button" className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
