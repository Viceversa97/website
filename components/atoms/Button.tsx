import { ButtonHTMLAttributes } from 'react';
export function Button({ className = '', type = 'button', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) { return <button type={type} className={`rounded-md bg-navy px-4 py-2 text-sm font-bold text-white transition hover:bg-[#092d48] ${className}`} {...props} />; }
