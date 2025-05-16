import { useParams } from "react-router-dom"

export default function CategoryPage() {
    const { slug } = useParams()
    const categoryOverskrift = slug.charAt(0).toUpperCase() + slug.slice(1) 
    return (
        <h2>{categoryOverskrift}</h2>
    )
}