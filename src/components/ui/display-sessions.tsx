import React from "react";

export type Sessions = {
  name: string;
  id: string;
  papers: { title: string; authors: string }[];
}

export interface DisplaySessionsProps {
  sessions: Sessions[];
}

export default function DisplaySessions({ sessions }: DisplaySessionsProps) {
  return (
    <div>
      {sessions.map((session, index) => (
        <div key={index}>
          <h2 id={session.id} className="text-2xl font-bold text-red-900">{session.name}</h2>
          <ul className="mt-8 mb-8">
            {session.papers.map((paper, index) => (
              <li key={index} className="mt-2">
                <h3 className="text-base font-semibold">{paper.title}</h3>
                <p className="mt-1">{paper.authors}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
