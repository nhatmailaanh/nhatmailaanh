
export enum UserRole {
  HOST = 'HOST',
  MOD = 'MOD',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
}

export enum SessionStatus {
  PLANNED = 'PLANNED',
  LIVE = 'LIVE',
  DONE = 'DONE'
}

export enum RiskLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

export enum Severity {
  LIGHT = 'LIGHT',
  MEDIUM = 'MEDIUM',
  SEVERE = 'SEVERE'
}

export interface ForbiddenCategory {
  id: string;
  name: string;
  riskLevel: RiskLevel;
  description: string;
  internalExamples: string[];
}

export interface ScriptBlock {
  id: string;
  liveSessionId: string;
  order: number;
  title: string;
  durationMinutes: number;
  talkingPoints: string[];
  detailedScripts?: string[]; // Optional: Detailed script text matching talkingPoints by index
  forbiddenCategoryIds: string[];
}

export interface Violation {
  id: string;
  liveSessionId: string;
  scriptBlockId?: string;
  timestamp: string; // ISO string
  timestampInSeconds: number; // Relative to start
  speakerRole: UserRole;
  categoryId: string;
  severity: Severity;
  note?: string;
  aiRepairSuggestion?: string;
  aiTrainingNote?: string;
}

export interface LiveSession {
  id: string;
  projectName: string;
  market: string;
  propertyType: string;
  durationMinutes: number;
  objective: string;
  hostId: string;
  moderatorIds: string[];
  status: SessionStatus;
  blocks: ScriptBlock[];
  violations: Violation[];
  safetyScore?: number;
  startedAt?: string;
  endedAt?: string;
  aiTrainingRecommendations?: string[];
}

// AI Service Types
export interface AIScriptResponse {
  blocks: {
    title: string;
    durationMinutes: number;
    talkingPoints: string[];
    forbiddenCategoryIds: string[];
  }[];
}

export interface AIRepairResponse {
  onAirFixScript: string;
  noteForTraining: string;
}

export interface AITrainingResponse {
  recommendations: string[];
}
