import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const QuoteForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    // Let Netlify handle the form submission
    // Show success message after a brief delay to simulate processing
    setTimeout(() => {
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-slate-800/60 to-gray-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300">
          Your quote request has been submitted. Jason will get back to you within 1 hour.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-800/60 to-gray-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Start your free design today
      </h3>

      <form
        name="quote-request"
        method="POST"
        action="/thank-you.html"
        netlify
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="quote-request" />
        <p className="hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors backdrop-blur-sm"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors backdrop-blur-sm"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors backdrop-blur-sm"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="project-details" className="block text-sm font-medium text-gray-300 mb-2">
            Project Details
          </label>
          <textarea
            id="project-details"
            name="project-details"
            rows={4}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none backdrop-blur-sm"
            placeholder="Tell us about your trade show needs, timeline, and budget..."
          />
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            className="mt-1 w-4 h-4 text-blue-600 bg-slate-800/50 border border-slate-600/50 rounded focus:ring-blue-400 focus:ring-2"
          />
          <label htmlFor="consent" className="text-sm text-gray-300 leading-relaxed">
            By checking this box and submitting this form, I consent to receive marketing communications from Form4Design via phone, email, and text message. I understand that I can opt out at any time by replying STOP to text messages or unsubscribing from emails. Message and data rates may apply. I acknowledge that I have read and agree to the{' '}
            <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms-of-service" className="text-blue-400 hover:text-blue-300 underline">
              Terms of Service
            </a>
            . *
          </label>
        </div>

        <button
          type="submit"
          className="w-full brand-button text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
        >
          Send Quote Request
          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>

      <p className="text-sm text-gray-400 text-center mt-4">
        * Required fields. We'll respond within 1 hour.
      </p>
    </div>
  );
};

export default QuoteForm;