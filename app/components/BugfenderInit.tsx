'use client';

import { useEffect } from 'react';

export default function BugfenderInit() {
  useEffect(() => {
    import('@bugfender/sdk').then(({ Bugfender }) => {
      Bugfender.init({
        appKey: process.env.NEXT_PUBLIC_BUGFENDER_APP_KEY!,
      });
    });
  }, []);

  return null;
}