import React from 'react';

const ActivityContext = React.createContext({
   activities: [],
   addActivity: () => {},
   deleteActivity: () => {},
   editActivity: () => {},
   setActivityList: () => {},
});

export default ActivityContext;