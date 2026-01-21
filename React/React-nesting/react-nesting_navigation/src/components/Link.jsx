const Link = ({ link, children }) => {
  return (
    <a className="navigation__link" href={link}>
      {children}
    </a>
  );
};
export default Link;
