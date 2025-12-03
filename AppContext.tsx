import React, { createContext, useContext, useState, useEffect } from 'react';
import { LiveSession, User, Violation, SessionStatus } from './types';
import { MOCK_USERS } from './constants';

interface AppContextType {
  currentUser: User;
  sessions: LiveSession[];
  addSession: (session: LiveSession) => void;
  updateSession: (id: string, updates: Partial<LiveSession>) => void;
  addViolation: (sessionId: string, violation: Violation) => void;
  getSession: (id: string) => LiveSession | undefined;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser] = useState<User>(MOCK_USERS[3]); // Default to Mod for demo
  const [sessions, setSessions] = useState<LiveSession[]>([]);

  // Load initial dummy data if empty
  useEffect(() => {
    // Ideally fetch from API
  }, []);

  const addSession = (session: LiveSession) => {
    setSessions(prev => [session, ...prev]);
  };

  const updateSession = (id: string, updates: Partial<LiveSession>) => {
    setSessions(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s));
  };

  const addViolation = (sessionId: string, violation: Violation) => {
    setSessions(prev => prev.map(s => {
      if (s.id === sessionId) {
        // Calculate new safety score simply for demo
        // Start 100, minus points based on severity
        const currentScore = s.safetyScore ?? 100;
        let penalty = 2;
        if (violation.severity === 'MEDIUM') penalty = 5;
        if (violation.severity === 'SEVERE') penalty = 15;
        
        return {
          ...s,
          violations: [...s.violations, violation],
          safetyScore: Math.max(0, currentScore - penalty)
        };
      }
      return s;
    }));
  };

  const getSession = (id: string) => sessions.find(s => s.id === id);

  return (
    <AppContext.Provider value={{ currentUser, sessions, addSession, updateSession, addViolation, getSession }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};
