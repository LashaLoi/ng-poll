import { createMessage, deleteMessage, initializeClient } from "@/core/api";
import { withDelay } from "@/core/utils";

// simulate supabase activity to awaiken free-tier instances
export async function GET() {
  await initializeClient();
  const data = await createMessage("cron");

  // fake delay
  await withDelay(5000);

  if (!data) return new Response("Cron job failed", { status: 500 });

  const [{ id }] = data;
  await deleteMessage(id.toString());

  return new Response(JSON.stringify({ message: "Cron job executed" }), {
    status: 200,
  });
}
