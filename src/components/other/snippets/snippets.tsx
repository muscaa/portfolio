import type { Component } from '@builder.io/qwik';

export interface IconOpts {
  size?: number;
  strokeWidth?: number;
  class?: string;
}

export type Icon = Component<IconOpts>;
