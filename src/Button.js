import React, { Component } from 'react';

export default function Button({ onClick, size, value, label}) {
  return (
    <div onClick={onClick} className="Button" data-size={size} data-value={value}>
      {label}
    </div>
  )
}
