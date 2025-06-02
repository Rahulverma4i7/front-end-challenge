import AppFooter from "../AppFooter/index";
import AppHeader from "../AppHeader";
import PageContent from "../PageContent";
import SideMenu from "../SideMenu";

const Main = () => {
  return (
    <div>
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      {/* <AppFooter /> */}
    </div>
  );
};

export default Main;
