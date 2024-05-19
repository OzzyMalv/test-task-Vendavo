import React from "react";
import { Box, CssBaseline, Skeleton, Tab, Tabs } from "@mui/material";

// curated imports
const RemoteGallery = React.lazy(() => import("remoteGallery/gallery_app"));
const RemoteRecent = React.lazy(() => import("remoteRecent/recent_app"));

const TABS = ["GALLERY", "RECENTLY_VIEWED"];

const App = () => {
  const [_, startTransition] = React.useTransition();
  const [tabIndex, setTab] = React.useState(0);
  const handleChange = (event, newValue) => {
    startTransition(() => setTab(newValue));
  };

  return (
    <div>
      <CssBaseline />
      <Box
        component="header"
        position="fixed"
        top={0}
        width="100%"
        sx={{ zIndex: 1000 }}
        backgroundColor="background.paper"
      >
        <Tabs value={tabIndex} onChange={handleChange} centered>
          <Tab label="Gallery" />
          <Tab label="Recently Viewed" />
        </Tabs>
      </Box>
      <Box paddingTop={6}>
        <React.Suspense
          fallback={<Skeleton variant="rectangular" width={400} height={400} />}
        >
          {TABS[tabIndex] === TABS[0] ? <RemoteGallery /> : <RemoteRecent />}
        </React.Suspense>
      </Box>
    </div>
  );
};

export default App;
