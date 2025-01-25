'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
const Page = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/dashboard/login');
    }
  }, []);
 
  return (
    <div className="w-100 vh-100">
      <div className="row h-100 w-100">
        {/* Left Sidebar */}
        <div className="col-md-3 border-end bg-light">
         
        </div>

        {/* right side bar */}
        <div className="col-md-9 d-flex flex-column">
          
        </div>
      </div>
    </div>
  );
};

export default Page;
