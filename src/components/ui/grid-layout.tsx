'use client';

import { cn } from '@/lib/utils';
import type * as React from 'react';

interface CrosshairConfig {
  topLeft?: boolean;
  topRight?: boolean;
  bottomLeft?: boolean;
  bottomRight?: boolean;
}

interface GridLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  crosshairs?: CrosshairConfig;
  gridLines?: boolean;
  columns?: 8 | 12 | 16;
  lineVariant?: 'all' | 'vertical' | 'horizontal' | 'center' | 'none';
}

function CrosshairIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1V15M1 8H15"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GridLayout({
  children,
  crosshairs,
  gridLines = true,
  columns = 16,
  lineVariant = 'all',
  className,
  ...props
}: GridLayoutProps) {
  return (
    <div
      className={cn(
        'relative grid w-full gap-0',
        gridLines && ' border',
        columns === 16 && 'grid-cols-grid-16',
        columns === 12 && 'grid-cols-grid-12',
        columns === 8 && 'grid-cols-grid-8',
        className,
      )}
      {...props}
    >
      {gridLines && (
        <div className="absolute inset-0 z-0">
          {/* Vertikale Linien */}
          {(lineVariant === 'all' ||
            lineVariant === 'vertical' ||
            lineVariant === 'center') && (
            <div className="absolute inset-0 flex justify-center">
              {lineVariant === 'center' ? (
                <div className=" h-full w-px border-r" />
              ) : (
                <div
                  className={cn(
                    'grid size-full',
                    columns === 16 && 'grid-cols-grid-16',
                    columns === 12 && 'grid-cols-grid-12',
                    columns === 8 && 'grid-cols-grid-8',
                  )}
                >
                  {Array.from({ length: columns }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(' border-r', i === 0 && 'border-l')}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Horizontale Linien */}
          {(lineVariant === 'all' || lineVariant === 'horizontal') && (
            <div className="absolute inset-0 grid grid-rows-[repeat(16,1fr)]">
              {Array.from({ length: 17 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(' border-t', i === 16 && 'border-b')}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Crosshairs */}
      {crosshairs?.topLeft && (
        <CrosshairIcon className=" absolute -left-1.5 -top-1.5" />
      )}
      {crosshairs?.topRight && (
        <CrosshairIcon className=" absolute -right-1.5 -top-1.5" />
      )}
      {crosshairs?.bottomLeft && (
        <CrosshairIcon className=" absolute -bottom-1.5 -left-1.5" />
      )}
      {crosshairs?.bottomRight && (
        <CrosshairIcon className=" absolute -bottom-1.5 -right-1.5" />
      )}

      <div className="relative z-10 col-span-full">{children}</div>
    </div>
  );
}
