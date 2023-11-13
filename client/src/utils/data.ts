interface League {
  title: string;
  league_id: number;
  league_logo: string;
  currentMatches: number;
  tableLeader: string;
  className: string;
}

export const top5leagues: League[] = [
  {
    title: "Premier League",
    league_id: 1,
    league_logo: "premier-league.png",
    currentMatches: 10,
    tableLeader: "Manchester City",
    className: "premierLeague",
  },
  {
    title: "La Liga",
    league_id: 2,
    league_logo: "LaLiga.png",
    currentMatches: 14,
    tableLeader: "Real Madrid",
    className: "laliga",
  },
  {
    title: "Serie A",
    league_id: 3,
    league_logo: "serie-a.png",
    currentMatches: 8,
    tableLeader: "Juventus",
    className: "serieA",
  },
  {
    title: "Ligue 1",
    league_id: 4,
    league_logo: "ligue1.png",
    currentMatches: 12,
    tableLeader: "PSG",
    className: "ligue1",
  },
  {
    title: "Bundesliga",
    league_id: 5,
    league_logo: "bundesliga.png",
    currentMatches: 10,
    tableLeader: "Borussia Dortmund",
    className: "bundesliga",
  },
];
