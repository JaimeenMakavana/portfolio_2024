"use client";

import useStore from "@/store/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  const { setRandomIndex } = useStore();
  const router: any = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    setRandomIndex();
  }, [router.pathname, params.get("id")]);

  return <>{children}</>;
};

export default Template;
