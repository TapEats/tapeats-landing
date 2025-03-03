import * as React from 'react';
import { MotionProps } from 'framer-motion';

declare module 'framer-motion' {
  export interface MotionProps {
    className?: string;
    children?: React.ReactNode;
    key?: React.Key;
    style?: React.CSSProperties;
    [key: string]: any;
  }
}