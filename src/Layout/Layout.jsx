import NavBar from "./../component/NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar></NavBar>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
