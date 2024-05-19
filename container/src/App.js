import React from 'react';

const RemoteGallery = React.lazy(() => import('remoteGallery/gallery_app'));
const RemoteRecent = React.lazy(() => import('remoteRecent/recent_app'));

const App = () => (
  <div>
    <h1>Basic Host App</h1>
    <h2>Host</h2>
    <React.Suspense fallback="Loading MFE">
      <RemoteGallery />
        <RemoteRecent />
    </React.Suspense>
  </div>
);

export default App;
