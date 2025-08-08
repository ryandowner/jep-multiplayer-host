import * as React from "react";
import type { RoomProps } from "~/components/game";
import { useEngineContext } from "~/engine";
import { ConnectedCheckForm as CheckForm } from "./check-form";

/** HostModeCheckForm - stupid simple version that reuses existing CheckForm */
export function HostModeCheckForm({
  roomId,
  longForm,
}: {
  roomId: string;
  longForm: boolean;
} & RoomProps) {
  const { winningBuzzer, activeClue } = useEngineContext();
  
  if (!activeClue) {
    return null;
  }

  // For regular clues, just show the check form for the winning buzzer
  if (winningBuzzer && !longForm) {
    return (
      <CheckForm
        roomId={roomId}
        userId={winningBuzzer}
        showAnswer={true}
        onClickShowAnswer={() => {}} // Host doesn't need to click reveal
        isHostMode={true}
      />
    );
  }

  // We dont need to support long form clues for host mode on final jeopardy.
  return null;
}