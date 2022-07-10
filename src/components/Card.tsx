import React from 'react';
import './Card.scss';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { Film } from '../react-app-env';

export interface Props {
  films: Film[];
}

export const Card: React.FC<Props> = ({ films }) => {
  return (
    <>
      {films.map(film => (
        <div
          className="card"
          key={film.imdbId}
        >
          <img
            src={film.imgUrl}
            className="card-img"
            alt={film.description}
          />
          <div className="card-product">
            <p className="card-product__name">
              {film.title}
            </p>
            <p className="card-product__code">
              {`Код фільма: ${film.imdbId}`}
            </p>
            <div className="card-rate">
              <div className="card-rate__stbox stars-4">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
              </div>
              <p className="card-rate__feedback">
                Відгуків: 5
              </p>
            </div>

            <div className="card-pricebox">
              <div className="card-pricebox__word">Ціна:</div>
              <div className="card-pricebox__number">250 грн</div>
            </div>

            <button className="card-buy" type="submit">
              Замовити квиток
            </button>

          </div>
        </div>
      ))}
    </>
  );
};
