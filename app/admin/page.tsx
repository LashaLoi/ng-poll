import { getMessagesAction, getMeAction } from "./actions";
import { Messages } from "./components/messages";

export default async function Admin() {
  await getMeAction();
  const messages = await getMessagesAction();

  return <Messages messages={messages ?? []} />;
}
