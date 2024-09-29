import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <header className="container py-1">
        <div className="flex justify-between p-2">
          <div className="">CODE BRANCH</div>
          <nav>
            <ul className="flex justify-between space-x-10">
              <li className="cursor-pointer">
                <Link
                  to="team"
                  smooth={true}
                  duration={500}
                  offset={-70} // чтобы учитывать высоту хедера
                  spy={true}
                  activeClass="active"
                >
                  Команда
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="aboutUs"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="active"
                >
                  О нас
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="h-[2px] bg-[#6b73ff]"></div>
    </>
  );
};

export default Header;
