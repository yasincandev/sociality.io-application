import React from "react";
import data from "../data.json";
import dayjs from "dayjs";
import entryStatuses from "../entryStatuses";
import deleteIcon from "../assets/card-actions/delete.png";
import optionsIcon from "../assets/card-actions/options.png";
import noImage from "../assets/no-post-image.png";
import likes from "../assets/interaction-icons/heart.svg";
import comments from "../assets/interaction-icons/comments.svg";
import retweet from "../assets/interaction-icons/retweet.svg";
import views from "../assets/interaction-icons/views.svg";
import shares from "../assets/interaction-icons/shares.svg";
import "./Feed.css";

const Feed = ({ socialMediaIconsSwitch, switchColors, switchActionIcons }) => {
  const earlierDate = data.posts_by_date["2021-06-17"];
  const laterDate = data.posts_by_date["2021-07-01"];
  const early = Object.keys(data.posts_by_date)["0"];
  const late = Object.keys(data.posts_by_date)["1"];

  const earlierDateFormatted = dayjs(early).format("DD MMMM YYYY");
  const laterDateFormatted = dayjs(late).format("DD MMMM YYYY");

  const onError = (e) => {
    e.target.src = noImage;
  };

  return (
    <div className="feed__page">
      <div className="feed__page__earlier">
        <div className="earlier__date">
          <h1>{earlierDateFormatted}</h1>
        </div>
        <div className="feed__container">
          {Object.keys(earlierDate).map((date) => {
            return (
              <div key={date} className="feed__card__container">
                <div className="feed__card">
                  <div
                    style={{
                      backgroundColor: switchColors(
                        entryStatuses,
                        earlierDate[date].status
                      ),
                    }}
                    className="feed__card__status__social__icon"
                  >
                    <a
                      href={earlierDate[date].link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={socialMediaIconsSwitch(
                          earlierDate[date].account.channel
                        )}
                        alt="channel icon"
                      />
                    </a>
                  </div>
                  <div className="feed__card__details">
                    <div className="feed__card__details__publish__date__action__icons">
                      <div className="feed__card__details__publish__date">
                        <p>{earlierDate[date].published_at}</p>
                      </div>
                      <div className="feed__card__details__action__icons">
                        <img src={deleteIcon} alt="delete icon" />
                        <img src={optionsIcon} alt="edit icon" />
                      </div>
                    </div>
                    <div className="feed__card__details__text">
                      <p>{earlierDate[date].entry.message}</p>
                    </div>
                    <div className="feed__card__details__image">
                      {earlierDate[date].entry.image ? (
                        <img
                          style={{ width: "284px", height: "239px" }}
                          src={earlierDate[date].entry.image}
                          alt="post"
                          onError={onError}
                        />
                      ) : (
                        <img
                          style={{ width: "284px", height: "239px" }}
                          src={noImage}
                          alt="no post"
                        />
                      )}
                    </div>
                    <div className="feed__card__interactions__container">
                      <div className="feed__card__interactions">
                        <img src={likes} alt="comments" />
                        {earlierDate[date].is_published ? (
                          <span>124</span>
                        ) : (
                          <span>0</span>
                        )}
                      </div>
                      <div className="feed__card__interactions">
                        <img
                          src={
                            earlierDate[date].account.channel !== "twitter"
                              ? comments
                              : retweet
                          }
                          alt="comments"
                        />
                        {earlierDate[date].is_published ? (
                          <span>63</span>
                        ) : (
                          <span>0</span>
                        )}
                      </div>
                      <div className="feed__card__interactions">
                        <img
                          src={
                            earlierDate[date].account.channel === "twitter"
                              ? comments
                              : shares
                          }
                          alt="comments"
                        />
                        {earlierDate[date].is_published ? (
                          <span>4</span>
                        ) : (
                          <span>0</span>
                        )}
                      </div>
                      <div className="feed__card__interactions">
                        <img src={views} alt="comments" />
                        {earlierDate[date].is_published ? (
                          <span>1426</span>
                        ) : (
                          <span>0</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="feed__page__later">
        <div className="earlier__date">
          <h1>{laterDateFormatted}</h1>
        </div>
        <div className="feed__container">
          {Object.keys(laterDate).map((date) => {
            return (
              <div key={date} className="feed__card__container">
                <div className="feed__card">
                  <div
                    style={{
                      backgroundColor: switchColors(
                        entryStatuses,
                        laterDate[date].status
                      ),
                    }}
                    className="feed__card__status__social__icon"
                  >
                    <a
                      href={laterDate[date].link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={socialMediaIconsSwitch(
                          laterDate[date].account.channel
                        )}
                        alt="channel icon"
                      />
                    </a>
                  </div>
                  <div className="feed__card__details">
                    <div className="feed__card__details__publish__date__action__icons">
                      <div className="feed__card__details__publish__date">
                        <p>{laterDate[date].published_at}</p>
                      </div>

                      <div className="feed__card__details__action__icons">
                        <img
                          src={switchActionIcons(
                            entryStatuses,
                            laterDate[date].status
                          )}
                          alt="action icon"
                        />
                        <img src={deleteIcon} alt="delete icon" />
                        <img src={optionsIcon} alt="edit icon" />
                      </div>
                    </div>

                    <div className="feed__card__details__text__image">
                      <div className="feed__card__details__text">
                        <p>{laterDate[date].entry.message}</p>
                      </div>
                      <div className="feed__card__details__image">
                        {laterDate[date].entry.image ? (
                          <img
                            style={{ width: "284px", height: "239px" }}
                            src={laterDate[date].entry.image}
                            alt="post"
                            onError={onError}
                          />
                        ) : (
                          <img
                            style={{ width: "284px", height: "239px" }}
                            src={noImage}
                            alt="no post"
                          />
                        )}
                      </div>
                    </div>
                    <div className="feed__card__interactions__container">
                      <div className="feed__card__interactions">
                        <img src={likes} alt="comments" />
                        {laterDate[date].is_published ? (
                          <span>124</span>
                        ) : (
                          <span>0</span>
                        )}
                      </div>
                      <div className="feed__card__interactions">
                        <img
                          src={
                            laterDate[date].account.channel !== "twitter"
                              ? comments
                              : retweet
                          }
                          alt="comments"
                        />
                        {laterDate[date].is_published ? (
                          <span>63</span>
                        ) : (
                          <span>0</span>
                        )}
                      </div>
                      <div className="feed__card__interactions">
                        <img
                          src={
                            laterDate[date].account.channel === "twitter"
                              ? comments
                              : shares
                          }
                          alt="comments"
                        />
                        {laterDate[date].is_published ? (
                          <span>4</span>
                        ) : (
                          <span>0</span>
                        )}
                      </div>
                      <div className="feed__card__interactions">
                        <img src={views} alt="comments" />
                        {laterDate[date].is_published ? (
                          <span>1426</span>
                        ) : (
                          <span>0</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
