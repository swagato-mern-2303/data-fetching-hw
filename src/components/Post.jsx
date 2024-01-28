/* eslint-disable react/prop-types */

function User({ data }) {
  return (
    <div className="post">
      <h1 className="post__title">
        <a target="_blank" href={data.url} rel="noreferrer">
          {data.title}
        </a>
      </h1>
      <div className="post__info">
        <p>Category: {data.category}</p>
        <p>Published: {data.publishedAt}</p>
        <p>Updated: {data.updatedAt}</p>
      </div>
      <div className="post__body">
        <img className="post__img" src={data.image} alt="post image" />
        <p className="post__content">{data.content}</p>
      </div>
    </div>
  );
}

export default User;
