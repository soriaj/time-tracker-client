import React from 'react';

const ActivityContext = React.createContext({
   activities: [],
   loading: true,
   addActivity: () => {},
   deleteActivity: () => {},
   editActivity: () => {},
   setActivityList: () => {},
});

export default ActivityContext;