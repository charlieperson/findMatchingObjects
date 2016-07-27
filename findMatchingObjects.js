//  for loop

function topPlayers (players) {
  var results = [];
  for(var i=0; i<players.length; i++) {
    if(players[i].score > 100) results.push(players[i].name);
  }
  return results;
}

//  filter and map

function topPlayers(players) {
  return players.filter(function(player) {
    if(player.score > 100) return true;
  })
  .map(function(bigPlayer) {
    return bigPlayer.name;
  });
}
