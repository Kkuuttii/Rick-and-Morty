export const randomIntegerNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

export const getEpisodeNumber = (episode: string) => {
    let episodeNumber = episode.split ('/');
    return `Episode ${episodeNumber[episodeNumber.length-1]}`
}

export const displayedId = (page: number, perPage: number[]) => {
    const step = perPage.length;
    return perPage.map((item)=>item+(step*(page-1)));
}
