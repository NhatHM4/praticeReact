import Title from "./Title";
import { tours } from "../data.js";
const Tour = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured tour" />

      <div className="section-center featured-center">
        {tours.map(
          ({ id, image, date, title, info, location, duration, cost }) => {
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{info}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {location}
                    </p>
                    <p>{duration} days</p>
                    <p>from ${cost}</p>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};
export default Tour;
