export const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>CloneWebsite</h1>
      </div>

      <div className="header-middle">
        <ul className="header-nav">
          <li>
            <a>Find passion</a>
          </li>
          <li>
            <a>Categories</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Customer</a>
          </li>
        </ul>
      </div>
      <div className="header-right">
        <div>
          <a>Login</a>
        </div>
        <div>
          <a>Free Trial</a>
        </div>
      </div>
    </header>
  );
};
