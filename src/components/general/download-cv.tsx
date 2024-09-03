'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('../../../public/files/Youssef_Fahmy.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
