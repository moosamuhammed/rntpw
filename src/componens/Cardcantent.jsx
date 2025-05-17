// components/ui/card.jsx
import React from 'react';
import classNames from 'classnames';

export function Card({ children, className }) {
  return (
    <div className={classNames("bg-white rounded-2xl shadow-lg p-6", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={classNames("space-y-3", className)}>
      {children}
    </div>
  );
}
