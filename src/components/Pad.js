// Pad.js

import { h } from 'preact';

// A simple functional component that renders its children within a div.
// You might want to add more props or styling depending on your needs.
const Pad = ({ children }) => {
  return <div className="pad">{children}</div>;
};

export default Pad;
