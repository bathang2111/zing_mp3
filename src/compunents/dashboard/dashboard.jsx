import { useSelector } from "react-redux";
import { Routes } from "../../constants/routers";
import { active, Container, Item, Logo } from "./StyleDashboard";
export default function Dashboard() {
  const topic = useSelector((state) => state.topic.mainTopic);

  const showMenu = () => {
    const listMenu = Routes.map((item, index) => {
      if (index > 0) {
        return (
          <Item
            key={item.path}
            activeClassName={active}
            to={item.path}
            dashboard_item_hover_color={topic.dashboard_item_hover_color}
            dashboard_item_active_color={topic.dashboard_item_active_color}
            dashboard_item_color={topic.dashboard_item_color}
            dashboard_item_active_background={topic.dashboard_item_active_background}
          >
            {item.name}
          </Item>
        );
      }
    });
    return listMenu;
  };

  return (
    <Container background={topic.dashboard_background}>
      <Logo
        to="/"
        exact
        dashboard_logo_hover_color={topic.dashboard_logo_hover_color}
        dashboard_logo_color={topic.dashboard_logo_color}
      >
        Win mp3
      </Logo>
      {showMenu()}
    </Container>
  );
}
