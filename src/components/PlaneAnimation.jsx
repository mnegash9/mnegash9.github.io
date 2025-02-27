import React, { useState, useEffect, useRef } from 'react';

const PlaneAnimation = () => {
const [isFlying, setIsFlying] = useState(false);
const [animationCount, setAnimationCount] = useState(0);
const [flightPath, setFlightPath] = useState('normal');
const planeRef = useRef(null);
const animationRef = useRef(null);

// Reset plane position and animation when component unmounts
useEffect(() => {
    return () => {
    if (animationRef.current) {
        clearTimeout(animationRef.current);
    }
    };
}, []);

const getRandomFlightPath = () => {
    const paths = ['normal', 'looping', 'zigzag', 'bouncy', 'barrel-roll'];
    // Don't repeat the same path twice in a row
    let newPath;
    do {
    newPath = paths[Math.floor(Math.random() * paths.length)];
    } while (newPath === flightPath);
    return newPath;
};

const flyPlane = () => {
    if (isFlying) return;
    
    setIsFlying(true);
    setAnimationCount(prev => prev + 1);
    const newPath = getRandomFlightPath();
    setFlightPath(newPath);
    
    // Reset after animation completes
    animationRef.current = setTimeout(() => {
    setIsFlying(false);
    }, 15000); // 15 seconds max duration
};

// Different plane colors for variety
const planeColors = ['#3366CC', '#DC3545', '#FFC107', '#28A745', '#17A2B8'];
const planeColor = planeColors[animationCount % planeColors.length];

return (
    <div className="plane-animation-container">
    <button 
        className="fly-plane-button"
        onClick={flyPlane}
        disabled={isFlying}
    >
        I could fly a plane if the pilot was incapacitated
    </button>
    
    <div className="animation-area">
        <div 
        ref={planeRef}
        className={`plane ${isFlying ? 'flying' : ''} ${flightPath}`}
        style={{ 
            '--plane-color': planeColor,
            '--flight-duration': '15s'
        }}
        >
        <svg viewBox="0 0 100 50" width="100" height="50">
            {/* Plane body */}
            <path 
            d="M20,25 L65,25 C70,25 75,20 80,25 L90,25 L80,30 L65,30 C60,35 40,35 20,30 L10,30 L5,25 L10,20 L20,20 Z" 
            fill={planeColor} 
            stroke="#000" 
            strokeWidth="1"
            />
            {/* Wings */}
            <path 
            d="M40,25 L40,10 L55,10 L55,25 M40,25 L40,40 L55,40 L55,25" 
            fill={planeColor} 
            stroke="#000" 
            strokeWidth="1"
            />
            {/* Tail */}
            <path 
            d="M80,25 L85,15 L90,15 L85,25 M80,25 L85,35 L90,35 L85,25" 
            fill={planeColor} 
            stroke="#000" 
            strokeWidth="1"
            />
            {/* Windows */}
            <circle cx="30" cy="25" r="2" fill="white" />
            <circle cx="40" cy="25" r="2" fill="white" />
            <circle cx="50" cy="25" r="2" fill="white" />
        </svg>
        </div>
    </div>
    
    <style jsx>{`
        .plane-animation-container {
        position: relative;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
        }
        
        .fly-plane-button {
        background-color: #535bf2;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 12px 24px;
        font-size: 16px;
        cursor: pointer;
        margin-bottom: 20px;
        transition: background-color 0.3s;
        font-weight: bold;
        }
        
        .fly-plane-button:hover {
        background-color: #4349d8;
        }
        
        .fly-plane-button:disabled {
        background-color: #8084e3;
        cursor: not-allowed;
        }
        
        .animation-area {
        position: relative;
        width: 100%;
        height: 300px;
        overflow: hidden;
        border-radius: 8px;
        background-color: #f0f8ff;
        }
        
        .plane {
        position: absolute;
        transform: translateX(-120px);
        top: 50%;
        opacity: 0;
        transition: opacity 0.5s;
        }
        
        .plane.flying {
        opacity: 1;
        animation-duration: var(--flight-duration);
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        }
        
        /* Normal flight path */
        .plane.flying.normal {
        animation-name: normalFlight;
        }
        
        /* Looping flight path */
        .plane.flying.looping {
        animation-name: loopingFlight;
        }
        
        /* Zigzag flight path */
        .plane.flying.zigzag {
        animation-name: zigzagFlight;
        }
        
        /* Bouncy flight path */
        .plane.flying.bouncy {
        animation-name: bouncyFlight;
        }
        
        /* Barrel roll flight path */
        .plane.flying.barrel-roll {
        animation-name: barrelRollFlight;
        }
        
        @keyframes normalFlight {
        0% {
            transform: translateX(-120px) translateY(0) rotate(0deg);
        }
        /* Initial jittery movement */
        5% {
            transform: translateX(5%) translateY(-20px) rotate(-5deg);
        }
        10% {
            transform: translateX(10%) translateY(10px) rotate(3deg);
        }
        15% {
            transform: translateX(15%) translateY(-5px) rotate(-2deg);
        }
        20% {
            transform: translateX(20%) translateY(5px) rotate(0deg);
        }
        /* Straight and level flight */
        25% { transform: translateX(25%) translateY(0) rotate(0deg); }
        50% { transform: translateX(50%) translateY(0) rotate(0deg); }
        75% { transform: translateX(75%) translateY(0) rotate(0deg); }
        /* Exit off-screen */
        100% { transform: translateX(120%) translateY(0) rotate(0deg); }
        }
        
        @keyframes loopingFlight {
        0% {
            transform: translateX(-120px) translateY(0) rotate(0deg);
        }
        /* Initial jitter */
        5% {
            transform: translateX(5%) translateY(-10px) rotate(-5deg);
        }
        10% {
            transform: translateX(10%) translateY(15px) rotate(3deg);
        }
        /* Loop the loop */
        25% { transform: translateX(25%) translateY(0) rotate(0deg); }
        35% { transform: translateX(35%) translateY(-50px) rotate(45deg); }
        40% { transform: translateX(40%) translateY(-100px) rotate(90deg); }
        45% { transform: translateX(45%) translateY(-50px) rotate(180deg); }
        50% { transform: translateX(50%) translateY(0) rotate(270deg); }
        55% { transform: translateX(55%) translateY(0) rotate(360deg); }
        /* Straight and level */
        75% { transform: translateX(75%) translateY(0) rotate(0deg); }
        /* Exit */
        100% { transform: translateX(120%) translateY(0) rotate(0deg); }
        }
        
        @keyframes zigzagFlight {
        0% {
            transform: translateX(-120px) translateY(0) rotate(0deg);
        }
        /* Initial jitter */
        10% {
            transform: translateX(10%) translateY(-20px) rotate(-5deg);
        }
        /* Zigzag pattern */
        20% { transform: translateX(20%) translateY(50px) rotate(15deg); }
        30% { transform: translateX(30%) translateY(-50px) rotate(-15deg); }
        40% { transform: translateX(40%) translateY(30px) rotate(10deg); }
        50% { transform: translateX(50%) translateY(-30px) rotate(-10deg); }
        60% { transform: translateX(60%) translateY(20px) rotate(5deg); }
        70% { transform: translateX(70%) translateY(-20px) rotate(-5deg); }
        /* Straight and level */
        80% { transform: translateX(80%) translateY(0) rotate(0deg); }
        90% { transform: translateX(90%) translateY(0) rotate(0deg); }
        /* Exit */
        100% { transform: translateX(120%) translateY(0) rotate(0deg); }
        }
        
        @keyframes bouncyFlight {
        0% {
            transform: translateX(-120px) translateY(0) rotate(0deg);
        }
        /* Initial jitter and bounces */
        10% { transform: translateX(10%) translateY(-40px) rotate(-5deg); }
        15% { transform: translateX(15%) translateY(0) rotate(0deg); }
        20% { transform: translateX(20%) translateY(-60px) rotate(-8deg); }
        25% { transform: translateX(25%) translateY(0) rotate(0deg); }
        30% { transform: translateX(30%) translateY(-80px) rotate(-10deg); }
        35% { transform: translateX(35%) translateY(0) rotate(0deg); }
        40% { transform: translateX(40%) translateY(-60px) rotate(-8deg); }
        45% { transform: translateX(45%) translateY(0) rotate(0deg); }
        50% { transform: translateX(50%) translateY(-40px) rotate(-5deg); }
        55% { transform: translateX(55%) translateY(0) rotate(0deg); }
        /* Straight and level */
        70% { transform: translateX(70%) translateY(0) rotate(0deg); }
        85% { transform: translateX(85%) translateY(0) rotate(0deg); }
        /* Exit */
        100% { transform: translateX(120%) translateY(0) rotate(0deg); }
        }
        
        @keyframes barrelRollFlight {
        0% {
            transform: translateX(-120px) translateY(0) rotate(0deg);
        }
        /* Initial jitter */
        10% {
            transform: translateX(10%) translateY(-10px) rotate(-3deg);
        }
        /* Barrel roll */
        20% { transform: translateX(20%) translateY(0) rotate(0deg); }
        30% { transform: translateX(30%) translateY(0) rotate(90deg); }
        40% { transform: translateX(40%) translateY(0) rotate(180deg); }
        50% { transform: translateX(50%) translateY(0) rotate(270deg); }
        60% { transform: translateX(60%) translateY(0) rotate(360deg); }
        /* Second barrel roll */
        70% { transform: translateX(70%) translateY(0) rotate(450deg); }
        80% { transform: translateX(80%) translateY(0) rotate(720deg); }
        /* Straight and level */
        90% { transform: translateX(90%) translateY(0) rotate(720deg); }
        /* Exit */
        100% { transform: translateX(120%) translateY(0) rotate(720deg); }
        }
    `}</style>
    </div>
);
};

export default PlaneAnimation;