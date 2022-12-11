export const randomIntegerNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

export const getEpisodeNumber = (episode: string) => {
    let episodeNumber = episode.split ('/');
    return `Episode ${episodeNumber[episodeNumber.length-1]}`
  }
