import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li key={country.country} className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
