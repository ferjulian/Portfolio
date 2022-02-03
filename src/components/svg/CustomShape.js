import React from 'react';
import './customShape.css';

const CustomShape = () => {
    return (
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <linearGradient id="my-cool-gradient" x2="1" y2="1">
                <stop offset="0%" stop-color="#FEF6DF" />
                <stop offset="50%" stop-color="#d3e3cc" />
                <stop offset="100%" stop-color="#aacec4" />
            </linearGradient>
            <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
        </svg>
    );
}

export default CustomShape;