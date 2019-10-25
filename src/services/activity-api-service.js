import config from '../config'

const ActivityApiService = {
   getActivities() {
      return fetch(`${config.API_ENDPOINT}/activities`)
         .then(res =>
            (!res.ok)
               ? res.json().then(e => Promise.reject(e))
               : res.json()
         )
   },
   getActivity(activityId) {
      return fetch(`${config.API_ENDPOINT}/activities/${activityId}`)
         .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
         )
   },
   deleteActivity(activityId) {
      return fetch(`${config.API_ENDPOINT}/activities/${activityId}`, {
         method: 'DELETE'  
      })
      .then(res => 
         (!res.ok)
         ? res.json().then(e => Promise.reject(e))
         : res.json()
      )

   },
   editActivity(activityId, updatedActivity) {
      return fetch(`${config.API_ENDPOINT}/activities/${activityId}`, {
         method: 'PATCH',
         body: JSON.stringify(updatedActivity)
      })
      .then(res => {
         (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
      })
   }
}

export default ActivityApiService