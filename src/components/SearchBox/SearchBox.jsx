import css from './SearchBox.module.css'

export const Searchbox = ({ filter, onFilterChange }) => {
  return (
    <input
      className={css.inputField}
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={onFilterChange}
    />
  );
};