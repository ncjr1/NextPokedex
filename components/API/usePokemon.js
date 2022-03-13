import useSWR from "swr"
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function usePokemon (url) {
    const { data, error } = useSWR(url , fetcher);
    return {
      data: data == undefined ? {} : { Image: data.sprites.front_default, Types: data.types },
      isLoading: !error && !data,
      isError: error
    }
}