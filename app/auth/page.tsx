import { redirect } from "next/navigation";

import { GalleryVerticalEnd } from "lucide-react";

import { createClient } from "@/core/supabase/server";

import { LoginForm } from "./components/login-form";

export default async function LoginPage() {
  const client = await createClient();
  const { data: authData } = await client.auth.getUser();

  if (authData.user) redirect("/admin");

  return (
    <div className={"flex flex-col gap-6"}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <a href="#" className="flex flex-col items-center gap-2 font-medium">
            <div className="flex size-8 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-6" />
            </div>
          </a>
          <h1 className="text-xl font-bold">Вход в систему</h1>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
