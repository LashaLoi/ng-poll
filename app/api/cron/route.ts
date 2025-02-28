import { createClient } from "@/utils/supabase/server";

export async function GET(req: Request) {
  if (
    req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return Response.error();
  }

  const supabase = await createClient();
  await supabase.from("question").select("*");

  return Response.json({ ok: true });
}
