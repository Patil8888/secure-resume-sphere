
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Shield, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cyber-black flex items-center justify-center p-4">
      <div className="cyber-card max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-cyber-gray/30 border border-cyber-blue/20">
            <AlertTriangle size={48} className="text-cyber-green" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-2 text-gradient">404</h1>
        <h2 className="text-xl font-bold mb-6 text-cyber-light">Access Denied</h2>
        
        <p className="text-cyber-light/70 mb-8">
          The resource you're attempting to access does not exist or you lack appropriate permissions to view it.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyber-green to-cyber-blue font-medium text-cyber-black transition-transform hover:scale-105"
        >
          <Shield className="mr-2 h-4 w-4" />
          Return to Secure Zone
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
