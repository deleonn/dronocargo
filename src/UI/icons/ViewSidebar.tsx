import Icon from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const ViewSidebarSvg = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.99994 4V20H21.9999V4H1.99994ZM19.9999 8.67H17.4999V6H19.9999V8.67ZM17.4999 10.67H19.9999V13.34H17.4999V10.67ZM3.99994 6H15.4999V18H3.99994V6ZM17.4999 18V15.33H19.9999V18H17.4999Z"
      fill="black"
      fill-opacity="0.25"
    />
  </svg>
);

export const ViewSidebarIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ViewSidebarSvg} {...props} />
);
