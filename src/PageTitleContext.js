import { createContext } from 'react';

const PageTitleContext = createContext({
  title: 'Kenneth Imade', // Default title
  setTitle: () => {} // Placeholder function
});

export default PageTitleContext;
