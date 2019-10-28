export const fetchCrimeReoprt = async () => {

    const url = "https://data.police.uk/api/crime-categories";
    
    return await fetch(url)
    .then((res) => {
        return res.json()
    })
}

export const fetchForcesData = async () => {

    const url = "https://data.police.uk/api/forces";
    
    return await fetch(url).then((res) => {
        return res.json()
    })

}

