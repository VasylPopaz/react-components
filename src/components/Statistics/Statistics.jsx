import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';

export const Statistics = ({ title, statistics }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {statistics.map(elem => (
          <StatisticsItem key={elem.id} {...elem} />
        ))}
      </ul>
    </section>
  );
};
