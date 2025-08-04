import { useState, useEffect, useRef } from "react";

interface RadarDot {
  id: number;
  sector: number;
  distance: number; // 0-1 (0 = center, 1 = outer edge)
  angle: number; // angle within the sector
  isAnimating: boolean;
  animationKey?: number; // Timestamp to force animation restart
  rippleRadius?: number; // Current ripple radius for animation
  rippleOpacity?: number; // Current ripple opacity for animation
  hasBeenTriggered?: boolean; // Track if animation was already triggered this sweep
}

export function RadarChart({
  onSectorClick,
}: {
  onSectorClick?: (sector: number) => void;
}) {
  const [hoveredSector, setHoveredSector] = useState<number | null>(null);
  const [sweepAngle, setSweepAngle] = useState(0);
  const [dots, setDots] = useState<RadarDot[]>([]);
  const prevSweepAngleRef = useRef(0);
  const svgRef = useRef<SVGSVGElement>(null);

  // Primary color variables
  const primaryColor = "oklch(0.5635 0.2099 282.64)";
  const primaryColorRgba = "106, 89, 234"; // RGB values for primary color

  // Initialize radar dots
  useEffect(() => {
    const initialDots: RadarDot[] = [
      {
        id: 1,
        sector: 0,
        distance: 0.3, // inside inner circle
        angle: 15,
        isAnimating: false,
        animationKey: 0,
        hasBeenTriggered: false,
      },
      {
        id: 2,
        sector: 1,
        distance: 0.7,
        angle: 25,
        isAnimating: false,
        animationKey: 0,
        hasBeenTriggered: false,
      },
      {
        id: 3,
        sector: 2,
        distance: 0.5,
        angle: 10,
        isAnimating: false,
        animationKey: 0,
        hasBeenTriggered: false,
      },
      {
        id: 4,
        sector: 4,
        distance: 0.14, // inside inner circle
        angle: 30,
        isAnimating: false,
        animationKey: 0,
        hasBeenTriggered: false,
      },
      {
        id: 5,
        sector: 5,
        distance: 0.3, // inside inner circle
        angle: 20,
        isAnimating: false,
        animationKey: 0,
        hasBeenTriggered: false,
      },
      {
        id: 6,
        sector: 7,
        distance: 0.2, // inside inner circle
        angle: 35,
        isAnimating: false,
        animationKey: 0,
        hasBeenTriggered: false,
      },
      {
        id: 7,
        sector: 8,
        distance: 0.18, // inside inner circle
        angle: 15,
        isAnimating: false,
        animationKey: 0,
        hasBeenTriggered: false,
      },
      {
        id: 8,
        sector: 3,
        distance: 0.25, // inside inner circle
        angle: 25,
        isAnimating: false,
        animationKey: 0,
        hasBeenTriggered: false,
      },
    ];
    setDots(initialDots);
  }, []);

  // Sweeper animation - RE-ENABLED
  useEffect(() => {
    const interval = setInterval(() => {
      setSweepAngle((prev) => {
        const newAngle = (prev + 2) % 360;
        const prevAngle = prevSweepAngleRef.current;
        prevSweepAngleRef.current = newAngle;

        setDots((prevDots) =>
          prevDots.map((dot) => {
            const sectorAngle = dot.sector * 40;
            const dotAngle = (sectorAngle + dot.angle - 90 + 360) % 360;

            // Check if sweeper just passed the dot (crossed its angle)
            let crossed = false;
            if (prevAngle < dotAngle && newAngle >= dotAngle) {
              crossed = true;
            } else if (
              prevAngle > newAngle &&
              (dotAngle > prevAngle || dotAngle <= newAngle)
            ) {
              // Handle wraparound from 359 to 0
              crossed = true;
            }

            // Reset trigger flag when sweeper is far from dot (outside 20-degree range)
            let angleDiff = Math.abs(newAngle - dotAngle);
            if (angleDiff > 180) angleDiff = 360 - angleDiff;
            if (angleDiff > 20) {
              return { ...dot, hasBeenTriggered: false };
            }

            if (crossed && !dot.isAnimating && !dot.hasBeenTriggered) {
              // Delay animation by 200ms after sweeper passes
              setTimeout(() => {
                setDots((d) =>
                  d.map((d) =>
                    d.id === dot.id ? { ...d, isAnimating: false } : d
                  )
                );
              }, 800 + 400);
              setTimeout(() => {
                setDots((d) =>
                  d.map((d) =>
                    d.id === dot.id
                      ? {
                          ...d,
                          isAnimating: true,
                          animationKey: Date.now(),
                          hasBeenTriggered: true,
                        }
                      : d
                  )
                );
              }, 100);
              return dot;
            }
            return dot;
          })
        );
        return newAngle;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleSectorClick = (sector: number) => {
    if (onSectorClick) {
      onSectorClick(sector);
    }
  };

  const centerX = 200;
  const centerY = 200;
  const innerRadius = 60;
  const midRadius = 120;
  const outerRadius = 180;

  // Generate single unified path: major arc of inner circle + sectors 1 & 2 outer boundaries
  const generateUnifiedPath = () => {
    const sector1StartAngle = (1 * 40 - 90) * (Math.PI / 180); // Sector 1 start
    const sector2EndAngle = ((2 + 1) * 40 - 90) * (Math.PI / 180); // Sector 2 end

    // Points on outer radius for sector boundaries
    const outerStart = {
      x: centerX + outerRadius * Math.cos(sector1StartAngle),
      y: centerY + outerRadius * Math.sin(sector1StartAngle),
    };
    const outerEnd = {
      x: centerX + outerRadius * Math.cos(sector2EndAngle),
      y: centerY + outerRadius * Math.sin(sector2EndAngle),
    };

    // Points on inner circle for sector boundaries
    const innerStart = {
      x: centerX + innerRadius * Math.cos(sector1StartAngle),
      y: centerY + innerRadius * Math.sin(sector1StartAngle),
    };
    const innerEnd = {
      x: centerX + innerRadius * Math.cos(sector2EndAngle),
      y: centerY + innerRadius * Math.sin(sector2EndAngle),
    };

    // Create single unified path: outer arc of sectors + major arc of inner circle
    const largeArcFlagOuter =
      sector2EndAngle - sector1StartAngle > Math.PI ? 1 : 0;

    return `M ${outerStart.x} ${outerStart.y}
            A ${outerRadius} ${outerRadius} 0 ${largeArcFlagOuter} 1 ${outerEnd.x} ${outerEnd.y}
            L ${innerEnd.x} ${innerEnd.y}
            A ${innerRadius} ${innerRadius} 0 1 1 ${innerStart.x} ${innerStart.y}
            Z`;
  };

  // Generate sector paths
  const generateSectorPath = (sectorIndex: number) => {
    const startAngle = (sectorIndex * 40 - 90) * (Math.PI / 180);
    const endAngle = ((sectorIndex + 1) * 40 - 90) * (Math.PI / 180);

    // Start from center origin instead of inner circle
    const x1 = centerX; // Start from center
    const y1 = centerY; // Start from center
    const x2 = centerX + outerRadius * Math.cos(startAngle);
    const y2 = centerY + outerRadius * Math.sin(startAngle);

    const x3 = centerX + outerRadius * Math.cos(endAngle);
    const y3 = centerY + outerRadius * Math.sin(endAngle);

    return `M ${x1} ${y1} L ${x2} ${y2} A ${outerRadius} ${outerRadius} 0 0 1 ${x3} ${y3} Z`;
  };

  // Calculate dot position
  const getDotPosition = (dot: RadarDot) => {
    const sectorAngle = dot.sector * 40;
    const dotAngle = (sectorAngle + dot.angle - 90) * (Math.PI / 180);
    // Now, distance is measured from the origin (center)
    const radius = dot.distance * outerRadius;
    return {
      x: centerX + radius * Math.cos(dotAngle),
      y: centerY + radius * Math.sin(dotAngle),
    };
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg
        ref={svgRef}
        width="400"
        height="400"
        className="drop-shadow-2xl"
        style={{
          filter: `drop-shadow(0 0 20px rgba(${primaryColorRgba}, 0.3))`,
        }}
      >
        <defs>
          {/* Gradient for sweeper */}
          <linearGradient
            id="sweeperGradient"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="0%"
          >
            <stop offset="0%" stopColor={`rgba(${primaryColorRgba}, 0.8)`} />
            <stop offset="90%" stopColor={`rgba(${primaryColorRgba}, 0)`} />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Ripple animation */}
          <filter id="ripple">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* CSS-based ripple animation */}
          <style>
            {`
              @keyframes rippleExpand {
                0% {
                  r: 3;
                  opacity: 0.8;
                  stroke-width: 2;
                }
                100% {
                  r: 15;
                  opacity: 0;
                  stroke-width: 0;
                }
              }
              .ripple-animate {
                animation: rippleExpand 0.8s ease-out forwards;
              }
            `}
          </style>
        </defs>

        {/* Background circles */}
        <circle
          cx={centerX}
          cy={centerY}
          r={outerRadius}
          fill="none"
          stroke={`rgba(${primaryColorRgba}, 0.2)`}
          strokeWidth="1"
        />
        <circle
          cx={centerX}
          cy={centerY}
          r={midRadius}
          fill="none"
          stroke={`rgba(${primaryColorRgba}, 0.2)`}
          strokeWidth="1"
        />
        <circle
          cx={centerX}
          cy={centerY}
          r={innerRadius}
          fill="none"
          stroke={`rgba(${primaryColorRgba}, 0.2)`}
          strokeWidth="1"
        />

        {/* Single unified path: major arc of inner circle + sectors 1 & 2 outer boundaries */}
        <path
          d={generateUnifiedPath()}
          fill={`rgba(${primaryColorRgba}, 0.05)`}
          stroke={primaryColor}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-lg"
          style={{ filter: "url(#glow)" }}
        />

        {/* Sector divider lines */}
        {Array.from({ length: 9 }, (_, i) => {
          const angle = (i * 40 - 90) * (Math.PI / 180);
          const x1 = centerX; // Start from center origin
          const y1 = centerY; // Start from center origin
          const x2 = centerX + outerRadius * Math.cos(angle);
          const y2 = centerY + outerRadius * Math.sin(angle);

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={`rgba(${primaryColorRgba}, 0.2)`}
              strokeWidth="1"
            />
          );
        })}

        {/* Interactive sectors */}
        {Array.from({ length: 9 }, (_, i) => (
          <path
            key={i}
            d={generateSectorPath(i)}
            fill="transparent"
            stroke={
              hoveredSector === i
                ? `rgba(${primaryColorRgba}, 0.6)`
                : "transparent"
            }
            strokeWidth="2"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredSector(i)}
            onMouseLeave={() => setHoveredSector(null)}
            onClick={() => handleSectorClick(i)}
            style={{
              filter: hoveredSector === i ? "url(#glow)" : "none",
            }}
          />
        ))}

        {/* Sweeper */}
        <g transform={`rotate(${sweepAngle}, ${centerX}, ${centerY})`}>
          {/* Triangular sweeper that spans one sector (40 degrees) starting from center */}
          <path
            d={`M ${centerX} ${centerY} 
                L ${centerX} ${centerY - outerRadius} 
                A ${outerRadius} ${outerRadius} 0 0 1 ${
              centerX + outerRadius * Math.sin((40 * Math.PI) / 180)
            } ${centerY - outerRadius * Math.cos((40 * Math.PI) / 180)} 
                L ${centerX} ${centerY} 
                Z`}
            fill="url(#sweeperGradient)"
            opacity="0.6"
            style={{ filter: "url(#glow)" }}
          />
          {/* Right side stroke */}
          <line
            x1={centerX}
            y1={centerY}
            x2={centerX + outerRadius * Math.sin((40 * Math.PI) / 180)}
            y2={centerY - outerRadius * Math.cos((40 * Math.PI) / 180)}
            stroke={`rgba(${primaryColorRgba}, 0.8)`}
            strokeWidth="2"
            style={{ filter: "url(#glow)" }}
          />
        </g>

        {/* Radar dots */}
        {dots.map((dot) => {
          const position = getDotPosition(dot);
          return (
            <>
              {/* Ripple animation when sweeper passes (not inside <g> to avoid clipping) */}
              {dot.isAnimating && (
                <circle
                  key={`ripple-${dot.id}-${dot.animationKey}`}
                  cx={position.x}
                  cy={position.y}
                  r="3"
                  fill="none"
                  stroke={`rgba(${primaryColorRgba}, 0.8)`}
                  strokeWidth="2"
                  opacity="0.8"
                  style={{ filter: "url(#ripple)" }}
                  pointerEvents="none"
                  className="ripple-animate"
                />
              )}

              {/* Main dot */}
              <circle
                cx={position.x}
                cy={position.y}
                r="3"
                fill={`rgba(${primaryColorRgba}, 0.9)`}
                stroke={`rgba(${primaryColorRgba}, 1)`}
                strokeWidth="1"
                style={{ filter: "url(#glow)" }}
              >
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </>
          );
        })}
      </svg>
    </div>
  );
}
