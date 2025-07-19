import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { aiChatService } from '@/services/ai-chat';

// Import portrait images
import eleanorRooseveltImg from '@/assets/eleanor-roosevelt.jpg';
import steveJobsImg from '@/assets/steve-jobs.jpg';
import andrewNgImg from '@/assets/andrew-ng.jpg';
import stephenHawkingImg from '@/assets/stephen-hawking.jpg';

export const QuoteSection = () => {
  const [currentQuote, setCurrentQuote] = useState('');
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotesWithAuthors = [
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      image: eleanorRooseveltImg
    },
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      image: steveJobsImg
    },
    {
      quote: "Artificial intelligence is the new electricity.",
      author: "Andrew Ng",
      image: andrewNgImg
    },
    {
      quote: "Intelligence is the ability to adapt to change.",
      author: "Stephen Hawking",
      image: stephenHawkingImg
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
      image: steveJobsImg // Using Steve Jobs image as placeholder
    },
    {
      quote: "Technology is nothing. What's important is that you have a faith in people.",
      author: "Steve Jobs",
      image: steveJobsImg
    }
  ];

  useEffect(() => {
    setCurrentQuote(quotesWithAuthors[0].quote);
    
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotesWithAuthors.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval);
  }, [quotesWithAuthors]);

  useEffect(() => {
    setCurrentQuote(quotesWithAuthors[quoteIndex].quote);
  }, [quoteIndex, quotesWithAuthors]);

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
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={quoteIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6 }}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/30 flex-shrink-0"
                >
                  <img 
                    src={quotesWithAuthors[quoteIndex].image}
                    alt={quotesWithAuthors[quoteIndex].author}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6 md:hidden"
                >
                  <Quote className="h-8 w-8 text-primary mx-auto opacity-60" />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6 hidden md:block"
                >
                  <Quote className="h-12 w-12 text-primary opacity-60" />
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={quoteIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="text-lg md:text-xl lg:text-2xl font-light text-foreground/90 italic leading-relaxed mb-4"
                  >
                    "{quotesWithAuthors[quoteIndex].quote}"
                  </motion.blockquote>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.cite
                    key={quoteIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-primary font-semibold not-italic text-base md:text-lg"
                  >
                    — {quotesWithAuthors[quoteIndex].author}
                  </motion.cite>
                </AnimatePresence>
              </div>
            </div>

            
            {/* Quote Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {quotesWithAuthors.map((_, index) => (
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
        </motion.div>
      </div>
    </section>
  );
};