import { useEffect, useState } from "react";
import { askAction } from "./actions";
import { useResettableActionState } from "@/core/hooks/use-resettable-action-state";

export const useAskForm = () => {
  const [actionState, formAction, pending, reset] = useResettableActionState(
    askAction,
    null
  );
  const [state, setState] = useState<typeof actionState | null>(null);

  useEffect(() => {
    if (actionState === "ok") {
      setState("ok");
      setTimeout(() => {
        setState(null);
        reset();
      }, 5000);
    }

    if (actionState === "error") {
      setState("error");
      setTimeout(() => {
        setState(null);
        reset();
      }, 5000);
    }
  }, [actionState, reset]);

  return { state, formAction, pending };
};
