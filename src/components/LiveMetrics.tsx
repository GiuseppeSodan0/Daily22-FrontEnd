import React from 'react';
import {motion} from 'motion/react';
import {
  Heart,
  Thermometer,
  Activity,
  ShieldCheck,
  Brain,
  Zap,
} from 'lucide-react';
import {useAnimatedCounter} from '../hooks/useAnimatedCounter';

function MetricCard({
  icon: Icon,
  label,
  end,
  decimals = 0,
  suffix = '',
  color = 'text-yellow-500',
  liveFluctuation = false,
  barColor = 'bg-yellow-500',
}: {
  icon: React.ElementType;
  label: string;
  end: number;
  decimals?: number;
  suffix?: string;
  color?: string;
  liveFluctuation?: boolean;
  barColor?: string;
}) {
  const {ref, value, hasAnimated} = useAnimatedCounter({
    end,
    duration: 2000,
    decimals,
    suffix,
    liveFluctuation,
  });

  const barWidth = hasAnimated ? `${Math.min((end / 100) * 100, 100)}%` : '0%';

  return (
    <div
      ref={ref}
      className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-yellow-400 transition-all duration-500"
    >
      <div className="flex items-center justify-between mb-4">
        <Icon className={`w-5 h-5 ${color}`} />
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">
          {label}
        </span>
      </div>
      <p className={`text-3xl font-black ${color} font-sans tabular-nums`}>
        {value}
      </p>
      <div className="mt-3 h-1 rounded-full bg-gray-100 overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${barColor}`}
          initial={{width: '0%'}}
          animate={{width: barWidth}}
          transition={{duration: 2, ease: 'easeOut', delay: 0.5}}
        />
      </div>
    </div>
  );
}

export default function LiveMetrics() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-yellow-400/10 blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-80px'}}
          transition={{duration: 0.6}}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">
            Monitoraggio Live
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 font-sans">
            Dati in tempo reale
          </h2>
          <p className="mt-4 text-sm text-gray-500 font-light leading-relaxed">
            I sensori WIDIU monitorano costantemente parametri biometrici e ambientali, elaborati da DailyPlatform per una prevenzione predittiva.
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-80px'}}
          transition={{duration: 0.6, delay: 0.1}}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <MetricCard
            icon={Heart}
            label="Frequenza Cardiaca"
            end={72}
            suffix=" BPM"
            color="text-red-500"
            liveFluctuation
            barColor="bg-red-500"
          />
          <MetricCard
            icon={Thermometer}
            label="Temperatura Corporea"
            end={366}
            decimals={1}
            suffix="°C"
            color="text-orange-500"
            liveFluctuation
            barColor="bg-orange-500"
          />
          <MetricCard
            icon={Activity}
            label="Livello Stress"
            end={23}
            suffix="%"
            color="text-yellow-600"
            liveFluctuation
            barColor="bg-yellow-500"
          />
          <MetricCard
            icon={ShieldCheck}
            label="Compliance Aziendale"
            end={987}
            decimals={1}
            suffix="%"
            color="text-emerald-500"
            liveFluctuation
            barColor="bg-emerald-500"
          />
          <MetricCard
            icon={Brain}
            label="AI Confidence"
            end={96}
            suffix="%"
            color="text-cyan-600"
            liveFluctuation
            barColor="bg-cyan-500"
          />
          <MetricCard
            icon={Zap}
            label="Copertura Sensori"
            end={94}
            suffix="%"
            color="text-purple-500"
            liveFluctuation
            barColor="bg-purple-500"
          />
        </motion.div>

        <motion.p
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.4}}
          className="text-center text-[10px] text-gray-400 font-mono mt-8"
        >
          I dati fluttuano in tempo reale simulando l'effettivo monitoraggio WIDIU
        </motion.p>
      </div>
    </section>
  );
}
