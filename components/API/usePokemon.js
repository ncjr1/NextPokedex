import useSWR from "swr"
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function usePokemon (url) {
    const { data, error } = useSWR( url , fetcher);
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return {
      Image : data.sprites.front_default,
      Types : data.types
    }
}