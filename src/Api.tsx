import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = "29353874-6524bfeaf443742d489eb2baf";

export interface Card {
  id: number;
  largeImageURL: string;
  webformatURL: string;
}

interface IFetchCard {
  hits: Card[];
}

const Api = async (query: string, page: number) => {
  try {
    const { data } = await axios.get<IFetchCard>(
      `?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { Api };
