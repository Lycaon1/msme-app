import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <Building2 className="mx-auto h-12 w-12 text-blue-600" />
            <h1 className="mt-2 text-2xl font-bold text-gray-900">
              MSME Registration Portal
            </h1>
          </div>
          <Outlet />
          <p className="mt-8 text-center text-sm text-gray-500">
            {window.location.pathname === '/login' ? (
              <>
                Don't have an account?{' '}
                <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                  Sign up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                  Sign in
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};