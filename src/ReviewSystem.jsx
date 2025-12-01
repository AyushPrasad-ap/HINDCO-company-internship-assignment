import React, { useEffect, useState } from "react";
import "./ReviewSystem.css";

export default function ReviewSystem() {
    const LOCAL_STORAGE_KEY = "reviews";
    const [username, setUsername] = useState("");
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved) setReviews(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(reviews));
    }, [reviews]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!username || !comment) return alert("Fill all fields!");

        const newReview = {
            id: Date.now(),
            username,
            rating,
            comment,
            time: formatDate(new Date()),
        };

        setReviews([newReview, ...reviews]);
        setUsername("");
        setRating(5);
        setComment("");
    };

    const formatDate = (date) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, "0");
        const month = String(d.getMonth() + 1).padStart(2, "0"); // Months start at 0
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
    };


    return (
        <div className="container">
            <div className="form-container">
                <h2>Add Review</h2>

                <form onSubmit={onSubmit}>

                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label>Rating (1-5)</label>
                    <select value={rating} onChange={(e) => setRating(e.target.value)}>
                        {[1, 2, 3, 4, 5].map((n) => (
                            <option key={n} value={n}>
                                {n}
                            </option>
                        ))}
                    </select>

                    <label>Comment</label>
                    <textarea
                        rows={4}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />

                    <button type="submit">Submit Review</button>
                </form>
            </div>

            <div className="reviews-container">
                <h2>Reviews</h2>
                {reviews.length === 0 && <p>No reviews yet</p>}

                {reviews.map((r) => (
                    <div key={r.id} className="review-card">
                        <div className="review-header">
                            <h3>{r.username}</h3>
                            <span>{r.rating} ⭐</span>
                        </div>

                        <p className="comment">{r.comment}</p>
                        <small className="time">{r.time}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}
