import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type CountdownProps = {
  targetDate: Date;
  className?: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer = ({ targetDate, className = '' }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        <TimeUnit label="Days" value={formatNumber(timeLeft.days)} />
        <TimeUnit label="Hours" value={formatNumber(timeLeft.hours)} />
        <TimeUnit label="Minutes" value={formatNumber(timeLeft.minutes)} />
        <TimeUnit label="Seconds" value={formatNumber(timeLeft.seconds)} />
      </div>
    </div>
  );
};

const TimeUnit = ({ label, value }: { label: string; value: string }) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mb-1">
        <span className="font-playfair text-2xl sm:text-3xl md:text-4xl font-semibold text-wedding-cream">{value}</span>
      </div>
      <span className="text-xs sm:text-sm md:text-base text-wedding-cream font-cormorant uppercase tracking-wider">{label}</span>
    </motion.div>
  );
};

export default CountdownTimer;