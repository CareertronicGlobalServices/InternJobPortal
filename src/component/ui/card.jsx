'use client';

export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`rounded-lg border bg-white text-gray-900 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
