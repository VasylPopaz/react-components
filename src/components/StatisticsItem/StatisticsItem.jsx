import { getRandomHexColor } from 'tools/getRandomColor';
import css from './StatisticsItem.module.css';
export const StatisticsItem = ({ label, percentage }) => {
  return (
    <li
      style={{ backgroundColor: getRandomHexColor() }}
      className={css.statsItem}
    >
      <span className={css.statsDesc}>{label}</span>
      <span className={css.statsQuantity}>{percentage}%</span>
    </li>
  );
};
