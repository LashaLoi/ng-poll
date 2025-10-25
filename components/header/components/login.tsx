import Link from "next/link";

import { ArrowRightToLine, LogOut } from "lucide-react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import { signOutAction } from "./actions";
import { getMe } from "@/core/api";

export async function HeaderLoginAction() {
  const user = await getMe();

  return user ? (
    <DropdownMenuItem variant="destructive" onClick={signOutAction}>
      <LogOut className="mr-2 size-4" />
      Выйти
    </DropdownMenuItem>
  ) : (
    <DropdownMenuItem asChild>
      <Link href="/auth" className="cursor-pointer">
        <ArrowRightToLine className="mr-2 size-4" />
        Войти
      </Link>
    </DropdownMenuItem>
  );
}
