import AccountPage from "../page/Account";
import ProfilePage from "../page/Profile";
import CampaignPage from "../page/Campaign";

const AccountRoutes = {
  key: "/",
  path: "/",
  component: AccountPage,
};
const ProfileRoutes = {
  key: "/profile",
  path: "/profile",
  component: ProfilePage,
};
const CampaignRoutes = {
  key: "/campaign",
  path: "/campaign",
  component: CampaignPage,
};

export const routes = [AccountRoutes, ProfileRoutes, CampaignRoutes];
