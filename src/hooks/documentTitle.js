import { useEffect } from 'react';

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]); // Title will change whenever the 'title' variable changes
}

export default useDocumentTitle;