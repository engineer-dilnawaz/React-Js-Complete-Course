import { createContext, useState } from "react";

export const ChallengesContext = createContext({
  challenges: [],
  addChallenge: () => {},
  updateChallengeStatus: () => {},
});

export default function ChallengesContextProvider({ children }) {
  const [challenges, setChallenges] = useState([
    {
      title: "React Dom Hook",
      description: "Learn and practice as much as you can",
      id: "0.08387801928706773",
      image: {
        src: "/src/assets/constructing.png",
        alt: "Person working on some furniture.",
      },
      status: "active",
      deadline: "2025-06-25",
    },
    {
      title: "React Redux",
      description: "Learn and practice as much as you can",
      id: "0.08387801928706243",
      image: {
        src: "/src/assets/family-time.png",
        alt: "Person working on some furniture.",
      },
      status: "active",
      deadline: "2025-08-25",
    },
  ]);

  function addChallenge(challenge) {
    setChallenges((prevChallenges) => [
      { ...challenge, id: Math.random().toString(), status: "active" },
      ...prevChallenges,
    ]);
  }

  function deleteChallenge(challengeId) {
    setChallenges((prevChallenges) =>
      prevChallenges.filter((challenge) => challenge.id !== challengeId)
    );
  }

  function updateChallengeStatus(challengeId, newStatus) {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: newStatus };
        }
        return challenge;
      })
    );
  }

  const challengesContext = {
    challenges,
    addChallenge,
    deleteChallenge,
    updateChallengeStatus,
  };

  return (
    <ChallengesContext.Provider value={challengesContext}>
      {children}
    </ChallengesContext.Provider>
  );
}
