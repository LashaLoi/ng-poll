import { Messages } from "./components/messages";
import { getMessages, getUserAction } from "./actions";

export default async function Admin() {
  await getUserAction();
  const messages = await getMessages();

  return <Messages messages={messages ?? []} />;
}
