import { useEffect, useState } from "react";

import { useResettableActionState } from "@/core/hooks/use-resettable-action-state";
import { withDelay } from "@/core/utils";

import { askAction } from "./actions";

export const useAskForm = () => {
  const [actionState, formAction, pending, reset] = useResettableActionState(
    askAction,
    null
  );
  const [state, setState] = useState<typeof actionState | null>(null);

  useEffect(() => {
    if (actionState === "ok") {
      setState("ok");
      withDelay(5000, () => {
        setState(null);
        reset();
      });
    }

    if (actionState === "error") {
      setState("error");
      withDelay(5000, () => {
        setState(null);
        reset();
      });
    }
  }, [actionState, reset]);

  return { state, formAction, pending };
};
