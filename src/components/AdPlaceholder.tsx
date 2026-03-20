import React, { useEffect } from 'react';

interface AdPlaceholderProps {
  slot: string;
  className?: string;
  adSlotId?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ slot, className = "", adSlotId }) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div 
      className={`bg-neutral-50/50 border border-neutral-200 rounded-[2rem] flex flex-col items-center justify-center p-4 min-h-[100px] text-neutral-400 overflow-hidden relative ${className}`}
      id={`ad-slot-${slot}`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      <span className="text-[10px] font-mono uppercase tracking-[0.2em] mb-2 text-neutral-400">Advertisement</span>
      
      {/* Real AdSense Tag */}
      <ins className="adsbygoogle"
           style={{ display: 'block', width: '100%', height: '100%' }}
           data-ad-client="ca-pub-5692243700875872"
           data-ad-slot={adSlotId || "1234567890"} // Placeholder slot if not provided
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>

      {!adSlotId && (
        <span className="text-[9px] opacity-40 mt-2 italic">Waiting for Ad Unit ID (Slot: {slot})</span>
      )}
    </div>
  );
};
