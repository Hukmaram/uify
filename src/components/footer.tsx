const Footer = () => {
  return (
    <footer>
      <div className="pt-4 border-t border-gray-200">
        <p className="leading-8 text-gray-600 text-md xl:text-center">
          &copy; {new Date().getFullYear()} Uify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
