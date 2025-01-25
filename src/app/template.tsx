"use client";

import useStore from "@/store/store";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  const { setRandomIndex } = useStore();
  const router = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    setRandomIndex();
  }, [router, params.get("id")]);

  return <>{children}</>;
};

export default Template;
