const episodes = [
  { id: 's06e01', title: 'The Red Woman' },
  { id: 's06e02', title: 'Home' },
  { id: 's06e03', title: 'Oathbreaker' },
  { id: 's06e04', title: 'Book of the Stranger' },
  { id: 's06e05', title: 'The Door' },
  { id: 's06e06', title: 'Blood of My Blood' },
  { id: 's06e07', title: 'The Broken Man' },
  { id: 's06e08', title: 'No One' },
  { id: 's06e09', title: 'Battle of the Bastards' },
];

const finaleEpisode = { id: 's06e10', title: 'The Winds of Winter' };



function addToPlaylist(playlist, episode) {
    return playlist.concat(episode)
}

function removeFromPlaylist(playlist, episode) {
  var index = playlist.indexOf(episode);
  var new_list=  playlist.slice(0, index).concat(playlist.slice(index, -1));
  // new_list = playlist.delete(episode)
  return new_list
}

function getNextEpisodeInPlaylist(playlist) {
  return playlist[0]
}

function bingeWatch(playlist) {
  while (playlist.length > 0 ) {
    // var next = getNextEpisodeInPlaylist(playlist);
    // removeFromPlaylist(playlist, getNextEpisodeInPlaylist(playlist));
    playlist.shift()

    bingeWatch(playlist)

  }
    return 'Please let there be more!'
}
