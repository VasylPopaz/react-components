import css from './Profile.module.css';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={css.profileContainer}>
      <div className={css.descriptionContainer}>
        <img src={avatar} alt="User avatar" className={css.img} />
        <p className={css.name}>{username}</p>
        <p className={css.descText}>{tag}</p>
        <p className={css.descText}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsListItem}>
          <span className={css.statsTitle}>Followers</span>
          <span className={css.statsQuantity}>{followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statsTitle}>Views</span>
          <span className={css.statsQuantity}>{views}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statsTitle}>Likes</span>
          <span className={css.statsQuantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
