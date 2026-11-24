export default function ReviewList ({reviews}) {

    return (
        <>
    {console.log(reviews.reviews)}     
    {reviews.reviews.map(item => (
        <ul>
            <li>User: {item.reviewerName} Rating: {item.rating} Comment: {item.comment} Date: {item.date.slice(0, 10)} </li>
        </ul>
    ))}
    </>
    )
}