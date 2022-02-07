export const getGfis = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}.&limit=10&api_key=bZN7G7XhNkgBg6j0PQrVFBzETdK2RpYd`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        //el signo de interrogacion es para ver si tiene imagen o no
        url: img.images?.downsized_medium.url,
      };
    });

    //console.log(gifs);
    return gifs;
  };