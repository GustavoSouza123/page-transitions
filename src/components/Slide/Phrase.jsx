import React from 'react';

export default function Phrase({ children }) {
  return (
    <div className="phrase">
      <p>{children}</p>
    </div>
  );
}
