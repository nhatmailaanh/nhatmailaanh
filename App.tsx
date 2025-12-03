import React from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import { AppProvider } from './AppContext';
import SessionList from './components/SessionList';
import LiveMonitor from './components/LiveMonitor';
import PostLiveDashboard from './components/PostLiveDashboard';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="font-bold text-xl tracking-tight text-gray-900">SafeControl</span>
                <span className="ml-2 px-2 py-0.5 rounded bg-gray-100 text-xs text-gray-500 border border-gray-200">Internal</span>
              </div>
            </div>
            <div className="flex items-center">
               <span className="text-sm text-gray-500 italic mr-4">Powered by Gemini 2.0 Flash</span>
               <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">A</div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SessionList />} />
            <Route path="monitor/:id" element={<LiveMonitor />} />
            <Route path="report/:id" element={<PostLiveDashboard />} />
          </Route>
        </Routes>
      </HashRouter>
    </AppProvider>
  );
};

export default App;
