//  for loop

function topPlayers (players) {
  var results = [];
  for(var i=0; i<players.length; i++) {
    if(players[i].score > 100) results.push(players[i].name);
  }
  return results;
}
