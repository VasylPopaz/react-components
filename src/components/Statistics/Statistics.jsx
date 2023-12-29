import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import css from './Statistics.module.css';

export const Statistics = ({ title, statistics }) => {
  return (
    <section className={css.statsContainer}>
      {title && <h2 className={css.statsTitle}>{title}</h2>}

      <ul className={css.statsList}>
        {statistics.map(elem => (
          <StatisticsItem
            style={{ backgroundColor: 'red' }}
            key={elem.id}
            {...elem}
          />
        ))}
      </ul>
    </section>
  );
};
