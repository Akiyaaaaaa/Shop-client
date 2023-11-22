"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const RouteGuard = () => {
  const router = useRouter();
  useEffect(() => {
    const isAuthenticated = false;

    if (!isAuthenticated) {
      router.push("/signin");
    }
  }, [router]);
  return {};
};

export default RouteGuard;
