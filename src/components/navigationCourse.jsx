import "../assets/css/navigationCourse.css";
export const NavigationCourse = () => {
  return (
    <ul className="container-navigation">
      <li className="line">
        <a>All categories</a>
      </li>
      <li className=" line-clicked">
        <a>Entertainment</a>
      </li>
      <li className="line">
        <a>Lifestyle</a>
      </li>
      <li className="line">
        <a>Writing</a>
      </li>
      <li className="line">
        <a>Business</a>
      </li>
      <li className="line">
        <a>Food</a>
      </li>
    </ul>
  );
};
