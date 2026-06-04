/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Message {
  id: string;
  sender: 'user' | 'salvatore';
  text: string;
  timestamp: string;
}

export interface VitalStatus {
  heartRate: number;
  bodyTemp: number;
  posture: 'Normal' | 'Repetitive Strain' | 'Suspected Fall!';
  ambientTemp: number;
  gasLevel: 'Safe' | 'Warning' | 'Hazardous';
  safetyScore: number;
}

export interface ProjectCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
}
