export const fetchCharacter = async (page?: string, search?: string) => {
  let url: string = "";
  if (page) {
    url = `https://swapi.dev/api/people/?page=${page}`;
  } else if (search) {
    url = `https://swapi.dev/api/people/?search=${search}`;
  }

  if (!url) {
    throw new Error("URL is not properly formed");
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("An Error Occur while fetching Characters");
  }
  const data = await res.json();
  return data;
};

export const fetchCharacterItem = async (id: string) => {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  if (!res.ok) {
    throw new Error("An Error Occur while fetching Character");
  }
  const data = await res.json();
  return data;
};
