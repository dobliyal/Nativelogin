import React from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

const DownloadIcon: React.FC<{ width?: number; height?: number; color?: string }> = ({
  width = 24,
  height = 24,
  color = '#000',
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <Path
      d="M21,13v7a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V13H8a4,4,0,0,0,8,0Z"
      fill="none"
      stroke="#2ca9bc"
      strokeWidth="2"
    />
    <Polyline
      points="9 8 12 11 15 8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <Path
      d="M21,13,18.23,4.68A1,1,0,0,0,17.28,4H16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <Path
      d="M8,4H6.72a1,1,0,0,0-1,.68L3,13"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <Path
      d="M12,3v8m4,2a4,4,0,0,1-8,0H3v7a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V13Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </Svg>
);

export default DownloadIcon;