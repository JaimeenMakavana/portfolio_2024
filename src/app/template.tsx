"use client"; // Ensure this is a Client Component

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import useStore from "@/store/store";

const TemplateContent = ({ children }: { children: React.ReactNode }) => {
  const { setRandomIndex } = useStore();
  const router = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    setRandomIndex();
  }, [router, params.get("id")]);

  return <>{children}</>;
};

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TemplateContent>{children}</TemplateContent>
    </Suspense>
  );
};

export default Template;
