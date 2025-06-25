import useFetch from "../useFetch"

const HotelByName = ({ name }) => {

    const  { data, loading, error } = useFetch(`https://hotel-stay-app-backend.vercel.app/hotels/${name}`)
    return data ? (
        <div>
            <h1>{name}</h1>
            <p><b>Location :</b> {data.location}</p>
            <p><b>Rating : </b> {data.rating}</p>
            <p><b>Price Range : </b> {data.priceRange}</p>
        </div>
    ) : (
        loading && <p>Loading...</p>
    )
}

export default HotelByName