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
      <div className="brand-card rounded-2xl p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300">
          Your quote request has been submitted. Jason will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="brand-card rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Get Your Free Quote
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
              className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors backdrop-blur-sm"
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
              className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors backdrop-blur-sm"
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
            className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors backdrop-blur-sm"
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
            className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none backdrop-blur-sm"
            placeholder="Tell us about your trade show needs, timeline, and budget..."
          />
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
        * Required fields. We'll respond within 24 hours.
      </p>
    </div>
  );
};

export default QuoteForm;