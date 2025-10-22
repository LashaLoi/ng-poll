import { Messages } from "./components/messages";
import { getMessagesAction, getMeAction } from "./actions";

export default async function Admin() {
  await getMeAction();
  const messages = await getMessagesAction();

  return <Messages messages={messages ?? []} />;
}
