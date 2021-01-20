import CaNhan from "../pages/canhan/canhan";
import Follow from "../pages/follow/follow";
import Home from "../pages/home/home";
import KhamPha from "../pages/khampha/khampha";
import BangXepHang from "../pages/bangXepHang/bangXepHang";

export const REACT_APP_BASE_URL = "http://localhost:3000";

export const Routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/follow",
    name: "Đang Theo Dõi",
    exact: false,
    main: () => <Follow />,
  },
  {
    path: "/canhan",
    name: "Cá Nhân",
    exact: false,
    main: () => <CaNhan />,
  },
  {
    path: "/khampha",
    name: "Khám Phá",
    exact: false,
    main: () => <KhamPha />,
  },
  {
    path: "/bangxephang",
    name: "Bảng Xếp Hạng",
    exact: false,
    main: () => <BangXepHang />,
  },
];
