import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} GroceryStore. All rights reserved.</p>
    </footer>
  );
};

export default Footer;