import React, { Component } from 'react';

export default function Display({ data }) {
  return <div className="Display">{data.join('')}</div>
}

