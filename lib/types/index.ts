export type linksTypes = {
  id: string;
  name: string;
  path: string;
  rel?: string;
  target?: string;
  icon?: string;
};
export type navbarTypes = {
  allLinks: linksTypes[];
  logo: string;
  navbgColor: string;
  textColor: string;
  borderColor: string;
  logoSize: Number | string;
  activeBorderColor: string;
  transparent: Boolean;
  centerLinks: linksTypes[];
  centerLinkStatus: Boolean;
};
