import React from 'react';

const ActivityContext = React.createContext({
   activities: [],
   addActivity: () => {},
   deleteActivity: () => {},
   editActivity: () => {},
});

export default ActivityContext;