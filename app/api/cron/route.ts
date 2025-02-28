import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = await createClient();
  await supabase.from("question").select("*");

  return Response.json({ ok: true });
}
