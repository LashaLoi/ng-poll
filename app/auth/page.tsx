import { redirect } from "next/navigation";
import { GalleryVerticalEnd } from "lucide-react";
import { getMe } from "@/core/api";
import { LoginForm } from "./components/login-form";

export default async function LoginPage() {
  const user = await getMe();

  if (user) redirect("/admin");

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
