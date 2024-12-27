function Footer() {
  return (
    <footer className="footer footer-center bg-black text-white p-4 relative">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
