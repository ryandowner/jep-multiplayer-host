import { Link } from "@remix-run/react";
import * as React from "react";

import { GameVisibilityTag } from "~/components/game-visibility-icon";
import { LoadingSpinner } from "~/components/icons";
import SolveIcon from "~/components/solve-icon";
import type { DbGame } from "~/models/game.server";
import { Solve } from "~/models/solves.server";

export default function GameCard({
  game,
  solve,
  isLoggedIn = false,
  isHostMode = false,
}: {
  game: DbGame;
  solve?: Solve;
  isLoggedIn?: boolean;
  isHostMode?: boolean;
}) {
  const [loading, setLoading] = React.useState(false);
  const [hostLoading, setHostLoading] = React.useState(false);
  const solved = solve?.solved_at !== null;
  const to =
    solve && !solve.solved_at
      ? `/room/${solve.room_id}-${solve.rooms?.name}`
      : `/game/${game.id}/play`;
  const hostTo = `/game/${game.id}/play?mode=host`;

  return (
    <button
      onClick={() => setLoading(true)}
      className={`group flex basis-full flex-col rounded-lg border
      border-slate-300 shadow-sm transition-colors hover:border-blue-500
      hover:shadow-sm sm:basis-auto`}
      disabled={loading}
    >
      <Link to={to} className="w-full grow">
        <div className="flex h-full min-w-0 grow flex-col items-start gap-2 p-4">
          <div className="flex w-full justify-between">
            <strong className="text-left text-lg" title={game.title}>
              {game.title}
            </strong>
            {solve ? (
              <div>
                <SolveIcon solved={solved} />
              </div>
            ) : null}
          </div>
          <p
            className="w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-sm"
            title={game.author}
          >
            {game.author}
          </p>
          {game.note && (
            <p className="break-word text-left text-sm text-slate-500">
              {game.note}
            </p>
          )}
          <div className="mt-auto flex w-full justify-between gap-2">
            <div className="flex gap-2">
              {(loading || hostLoading) ? <LoadingSpinner className="text-blue-500" /> : null}
            </div>
            <div className="flex gap-2">
              {game.visibility !== "PUBLIC" && (
                <GameVisibilityTag visibility={game.visibility} />
              )}
            </div>
          </div>
        </div>
      </Link>
      {isLoggedIn && isHostMode && !solve && (
        <div className="p-2 border-t border-slate-200">
          <Link
            to={hostTo}
            onClick={() => setHostLoading(true)}
            className={`flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors ${
              hostLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {hostLoading ? (
              <LoadingSpinner className="h-4 w-4" />
            ) : (
              <span>🎯</span>
            )}
            Host Game
          </Link>
        </div>
      )}
    </button>
  );
}
