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

export const shuffleArray = (array: unknown[]) => array.sort(() => Math.random() - 0.5);


export const randomCharactersId = (charactersCount: number)=>{
    if(!charactersCount) {
        return null;
    }
    
    let questionCharacterId = randomIntegerNumber(0, charactersCount+1);
    let fakeCharacter1Id = null;
    let fakeCharacter2Id = null;

    do {
        fakeCharacter1Id = randomIntegerNumber(0, charactersCount+1);
    } while (fakeCharacter1Id === questionCharacterId)

    do {
        fakeCharacter2Id = randomIntegerNumber(0, charactersCount+1);
    } while ((fakeCharacter2Id === questionCharacterId) || (fakeCharacter2Id === fakeCharacter1Id));
    return [questionCharacterId, fakeCharacter1Id, fakeCharacter2Id]
};