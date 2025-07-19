import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { aiChatService } from '@/services/ai-chat';

export const QuoteSection = () => {
  const [currentQuote, setCurrentQuote] = useState('');
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = aiChatService.getInspirationalQuotes();

  useEffect(() => {
    setCurrentQuote(quotes[0]);
    
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval);
  }, [quotes]);

  useEffect(() => {
    setCurrentQuote(quotes[quoteIndex]);
  }, [quoteIndex, quotes]);

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card border-primary/20 p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyber-blue to-cyber-purple" />
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <Quote className="h-12 w-12 text-primary mx-auto opacity-60" />
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={quoteIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-lg md:text-xl lg:text-2xl font-light text-foreground/90 italic leading-relaxed mb-6"
                >
                  {currentQuote}
                </motion.blockquote>
              </AnimatePresence>

              {/* Quote Navigation Dots */}
              <div className="flex justify-center space-x-2">
                {quotes.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setQuoteIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === quoteIndex 
                        ? 'bg-primary w-8' 
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};