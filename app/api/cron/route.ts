import { createClient } from "@/core/supabase/server";

// simulate supabase activity to awaiken free-tier instances
export async function GET() {
  const client = await createClient();
  const { data } = await client
    .from("question")
    .insert({ text: "cron" })
    .select();

  // fake delay
  await new Promise((resolve) => setTimeout(resolve, 5000));

  if (!data) return new Response("Cron job failed", { status: 500 });

  const [{ id }] = data;
  await client.from("question").delete().eq("id", id);

  return new Response("Cron job executed");
}
