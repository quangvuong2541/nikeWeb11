import React from "react";
import "./index.css";

const dataBlog = [
  {
    id: "1",
    title: "“Just do it” – 30 year old slogan inspired by a last word",
    content:
      "Appeared in 1988, “Just do it” is the campaign that brought Nike around the world and is also the most influential slogan of all time. Up to now, this inspirational slogan has been 30 years old. While trying to find a slogan that has the most impact and response, Dan Wieden, director of advertising agency Wieden&Kennedy, who is responsible for implementing this campaign, suddenly came up with an idea. Gilmore didn't think twice and immediately said a single sentence 'Just do it' ('Let's do it.')....",
  },
  {
    id: "2",
    title: "Nike – 50 years of reigning the sports shoe empire",
    content:
      "In the 1970s, when the running trend began to emerge in the US, Nike sports shoes appeared and were received with great enthusiasm. To have such a successful first step, Knight - the owner of Nike had to research extremely carefully. At the request of the first employee at the company, the founder of the world-famous shoe store chose the name of the Greek goddess of victory to name his shoe store. From the 1970s to the early 1980s, Nike was a huge success, with sales growing exponentially each year and becoming the largest shoe company in the world...",
  },
];

export const Blog = () => {
  return (
    <section className="blog">
      <div className="blog__container">
        <h2 className="blog__heading">LATEST BLOG</h2>

        <ul className="blog__list">
          {dataBlog.map((blog) => (
            <li key={blog.id}>
              <div className="blog__item">
                <figure className="blog__image">
                  <img
                    src={`./assets/images/blog_${blog.id}.jpg`}
                    alt={`blog${blog.id}`}
                  />
                </figure>
                <div className="blog__content">
                  <h3>{blog.title}</h3>
                  <p>{blog.content}</p>
                  <button className="btn-flat btn-hover">READ MORE</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
