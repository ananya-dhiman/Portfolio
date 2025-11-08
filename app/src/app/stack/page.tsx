
'use client';
import dynamic from 'next/dynamic';


const Stackg = dynamic(() => import('@/components/StackContent'), { ssr: false });
export default function Stack() {
  

  return (
    <Stackg/>
    
  );
}
