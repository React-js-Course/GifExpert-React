
export const getGift = async(categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=FkxgIoi64J9BiAtts9Onvt0HlXDnGNAP&q=${categoria}&limit=10`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
  
    const gift = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));    
  return gift;
  }