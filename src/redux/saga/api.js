async function getData(payload) {
  try {
    const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${payload}&format=json`,
        {
            method: "GET",
        }
    )

    let resJS = await response.json()

    return resJS.query.search;
  } catch (error) {
    console.log(error)
  }
}

export const api = {
    getData
 };