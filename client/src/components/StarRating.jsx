import React, { useState } from 'react';

export const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div >
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={ratingValue}
            role="button"
            onClick={() => handleRatingChange(ratingValue)}
            style={{
                cursor: 'pointer',
                color: ratingValue <= rating ? 'gold' : 'silver', //// Couleur des étoiles
                fontSize: '35px', // Taille des étoiles
              }}
          >
            &#9733;
          </span>
        );
      })}
      
    </div>
  );
};

