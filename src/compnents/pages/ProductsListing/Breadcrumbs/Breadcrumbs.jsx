import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const ChevronIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 3L9 7L5 11"
      stroke="#BDBDBD"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Nav = styled.nav`
  padding: 20px 0;
  font-family: "DM Sans", sans-serif;
`;

const List = styled.ol`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const Separator = styled.span`
  display: flex;
  align-items: center;
  margin-right: 2px;
`;

const StyledLink = styled(Link)`
  font-size: 13px;
  color: #787878;
  text-decoration: none;
  transition: color 0.15s ease;

  &:hover {
    color: #1c1c1c;
  }
`;

const Current = styled.span`
  font-size: 13px;
  color: #1c1c1c;
  font-weight: 500;
`;

const fromSlug = (slug) =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const buildCrumbs = (pathname, params) => {
  const segments = pathname.split("/").filter(Boolean);

  const crumbs = [{ label: "Home", href: "/" }];

  let currentPath = "";

  segments.forEach((segment) => {
    currentPath += `/${segment}`;

    const isParamValue = Object.values(params).includes(segment);
    const label = isParamValue ? fromSlug(segment) : fromSlug(segment);

    crumbs.push({ label, href: currentPath });
  });

  return crumbs;
};

export default function Breadcrumb() {
  const { pathname } = useLocation();
  const params = useParams();

  const crumbs = buildCrumbs(pathname, params);

  return (
    <Nav aria-label="Breadcrumb">
      <List>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <Item key={index}>
              {index !== 0 && (
                <Separator>
                  <ChevronIcon />
                </Separator>
              )}

              {!isLast ? (
                <StyledLink to={crumb.href}>{crumb.label}</StyledLink>
              ) : (
                <Current aria-current="page">{crumb.label}</Current>
              )}
            </Item>
          );
        })}
      </List>
    </Nav>
  );
}
