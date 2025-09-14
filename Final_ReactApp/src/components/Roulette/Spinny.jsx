// This component creates the animated spinning wheel for the roulette feature.
// It draws the wheel on a canvas, handles the spin animation, and tells us which movie was picked.

import React, { useRef, useState, useEffect } from 'react';
import '../../styles/Spinny.css';

const Spinny = ({
  segments,        // This is an array of movie titles we pass in to appear on the wheel
  onFinished,      // This is a function that runs when the wheel stops (we use it to pick the winner)
  size = 400,      // Size of the canvas (wheel size)
  buttonText = 'SPIN' // The text that appears on the button in the middle of the wheel
}) => {
  const canvasRef = useRef(null); // We use this to directly draw on the canvas
  const [startAngle, setStartAngle] = useState(0); // Keeps track of where the wheel starts
  const [spinning, setSpinning] = useState(false); // Used to disable repeated spins
  const arc = (2 * Math.PI) / segments.length; // This calculates how much space each segment gets on the wheel

  // Define the colors for each segment and spin button
  const wheelColors = ['#403156', '#774c60', '#b75d69'];
  const spinButtonBg = '#f0e1d2';
  const spinButtonText = '#403156';

  // Every time the wheel updates or new segments come in, we redraw the wheel
  useEffect(() => {
    drawWheel();
  }, [segments, startAngle]);

  // This function draws the full wheel and the SPIN button
  const drawWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const radius = size / 2;
    ctx.clearRect(0, 0, size, size); // Clear previous drawing

    // Draw each movie title as a slice on the wheel
    segments.forEach((segment, i) => {
      const angle = startAngle + i * arc;
      const bgColor = wheelColors[i % wheelColors.length];

      // Draw each colored arc
      ctx.beginPath();
      ctx.fillStyle = bgColor;
      ctx.moveTo(radius, radius);
      ctx.arc(radius, radius, radius, angle, angle + arc, false);
      ctx.lineTo(radius, radius);
      ctx.fill();

      // Determine the text color (white or black for contrast)
      const textColor = bgColor.toLowerCase() === '#b75d69' ? '#000000' : '#ffffff';

      // Draw the movie title text inside the arc
      ctx.save();
      ctx.translate(radius, radius);
      ctx.rotate(angle + arc / 2);
      ctx.fillStyle = textColor;
      ctx.font = '14px "Avenir", sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText(segment.slice(0, 24), radius - 10, 0); // Show only the first 24 characters
      ctx.restore();
    });

    // Draw the center SPIN button
    ctx.beginPath();
    ctx.arc(radius, radius, 45, 0, 2 * Math.PI);
    ctx.fillStyle = spinButtonBg;
    ctx.fill();
    ctx.strokeStyle = spinButtonText;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = spinButtonText;
    ctx.font = 'bold 18px "Avenir", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(buttonText, radius, radius);
  };

  // This function handles the spin animation
  const spin = () => {
    if (spinning) return; // If it's already spinning, don't spin again
    setSpinning(true);

    // These control the spin speed and duration
    let spinAngleStart = Math.random() * 10 + 10; // Spin speed
    let spinTime = 0;
    let spinTimeTotal = Math.random() * 2000 + 4000; // Total duration of spin

    // Function to rotate the wheel
    const rotate = () => {
      spinTime += 30;
      if (spinTime >= spinTimeTotal) {
        stopRotate(); // Stop spinning and pick a winner
        return;
      }
      // This eases the spin (slows down over time)
      const angle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
      setStartAngle(prev => prev + (angle * Math.PI) / 180); // Update the angle
      requestAnimationFrame(rotate); // Continue animation
    };

    rotate(); // Start spinning
  };

  // When the wheel stops, we figure out which segment it landed on
  const stopRotate = () => {
    const degrees = (startAngle * 180) / Math.PI + 90; // Convert to degrees and offset
    const index = Math.floor(((360 - (degrees % 360)) % 360) / (360 / segments.length));
    onFinished(segments[index]); // Pass the selected movie title to the parent component
    setSpinning(false); // Allow another spin
  };

  // Easing function to slow the spin over time
  const easeOut = (t, b, c, d) => {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  };

  return (
    <div className="wheel-wrapper">
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        onClick={spin} // Clicking the wheel starts the spin
        className="wheel-canvas"
      />
    </div>
  );
};

export default Spinny;