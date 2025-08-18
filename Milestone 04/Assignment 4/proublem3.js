function bestTeam(player1, player2) {
  if (player1 === undefined || player2 === undefined) return "Invalid";

  let ans1 = player1.foul + player1.cardR + player1.cardY;
  let ans2 = player2.foul + player2.cardR + player2.cardY;

  if (ans1 < ans2) return player1.name;
  else if (ans2 < ans1) return player2.name;
  else return "Tie";
}

// let ans = bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 });

// console.log(ans);
