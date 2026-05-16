import React from 'react';
import Content from './Content';

export default function Footer() {
  return (
    // Mobile: 700px to accommodate stacked content
    // Desktop (md+): original 600px
    <div
      className="relative h-[700px] md:h-[600px]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="relative h-[calc(100vh+700px)] md:h-[calc(100vh+600px)] -top-[100vh]">
        <div className="h-[700px] md:h-[600px] sticky top-[calc(100vh-700px)] md:top-[calc(100vh-600px)]">
          <Content />
        </div>
      </div>
    </div>
  );
}