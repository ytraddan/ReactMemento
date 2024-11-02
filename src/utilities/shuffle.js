export default function shuffle() {
  const assets = [
    { image: "/assets/css.png" },
    { image: "/assets/dart.png" },
    { image: "/assets/firebase.png" },
    { image: "/assets/flutter.png" },
    { image: "/assets/go.png" },
    { image: "/assets/html5.png" },
    { image: "/assets/jquery.png" },
    { image: "/assets/js.png" },
    // { image: "/assets/jsx.png" },
    // { image: "/assets/next.png" },
    // { image: "/assets/node.png" },
    // { image: "/assets/react.png" },
    // { image: "/assets/rust.png" },
    // { image: "/assets/sql.png" },
    // { image: "/assets/stack.png" },
    // { image: "/assets/ts.png" },
  ];
  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
}
