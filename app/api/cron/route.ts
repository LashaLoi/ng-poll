import { createMessage, deleteMessage, initializeClient } from "@/core/api";

// simulate supabase activity to awaiken free-tier instances
export async function GET() {
  await initializeClient();
  const data = await createMessage("cron");

  // fake delay
  await new Promise((resolve) => setTimeout(resolve, 5000));

  if (!data) return new Response("Cron job failed", { status: 500 });

  const [{ id }] = data;
  await deleteMessage(id.toString());

  return new Response("Cron job executed");
}
