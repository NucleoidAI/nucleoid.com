import { useEffect } from 'react';

import { usePathname } from 'src/routes/hooks';

// ----------------------------------------------------------------------

export function useScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
