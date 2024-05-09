# Responsive Navbar made with React and Tailwind

```js
const rightLinks = [
  {
    id: "1",
    name: "About",
    path: "/about",
  },
  {
    id: "2",
    name: "Contact",
    path: "/contact",
  },
];
const centerLinks = [
  {
    id: "1",
    name: "Home",
    path: "/home",
  },
];
```

```jsx
<Navbar
  allLinks={AllLinks}
  logo={logo}
  logoSize={200}
  textColor={"text-white"}
  navbgColor={"bg-black"}
  activeBorderColor={"orange"}
  borderColor={"border-orange-500"}
  transparent={true}
  centerLinkStatus={true}
  centerLinks={centerLinks}
/>
```

| Props             | Datatype | Description                                   |
| ----------------- | -------- | --------------------------------------------- |
| allLinks          | Array    | links to be placed at the right               |
| logo              | string   | logo image URL                                |
| logoSize          | Number   | width of Logo                                 |
| textColor         | string   | text color in tailwind class                  |
| navbgColor        | string   | background color in tailwind class            |
| activeBorderColor | string   | active color in hex                           |
| borderColor       | string   | border color in tailwind class                |
| transparent       | Boolean  | if transparent background is needed then true |
| centerLinkStatus  | Boolean  | if center links are needed then true          |
| centerLinks       | Array    | links to be placed at the center              |
