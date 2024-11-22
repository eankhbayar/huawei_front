import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { OverviewCommunityForm } from 'src/sections/overview/community-form/view';

// ----------------------------------------------------------------------

const metadata = { title: `Community Forum | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <OverviewCommunityForm />
    </>
  );
}
