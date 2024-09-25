import React from 'react';

const Card = ({ data }) => {
  console.log(data);

  const readMore = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="cardContainer">
      {data.map((curItem, index) => (
        curItem.urlToImage && ( // Conditional rendering using &&
          <div className="card" key={index}>
            <img src={curItem.urlToImage} alt={curItem.title || "Image"} />
            <div className="cardcontent">
              <h2 className="title">{curItem.title}</h2>
              <p>{curItem.description}</p>
              <button onClick={() => readMore(curItem.url)}>Read More</button>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default Card;
