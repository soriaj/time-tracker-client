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
      return fetch(`${config.API_ENDPOINT}/activities/${activityId}`, {
         method: 'GET',
         headers: {
            'content-type': 'application/json',
         }
      })
      .then(res => 
         (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
      )
   },
   deleteActivity(activityId) {
      return fetch(`${config.API_ENDPOINT}/activities/${activityId}`, {
         method: 'DELETE',
         headers: {
            'content-type': 'application/json',
         }  
      })
      .then(res => {
         if (!res.ok) {
            return Promise.reject(res.error)
         }
      })

   },
   editActivity(activityId, updatedActivity) {
      return fetch(`${config.API_ENDPOINT}/activities/${activityId}`, {
         method: 'PATCH',
         body: JSON.stringify(updatedActivity),
         headers: {
            'content-type': 'application/json',
         }
      })
      .then(res => {
         if (!res.ok) {
            return Promise.reject(res.error)
         }
      })
   },
   addActivity(newActivity) {
      return fetch(`${config.API_ENDPOINT}/activities`, {
         method: 'POST',
         body: JSON.stringify(newActivity),
         headers: {
            'content-type': 'application/json',
         }
      })
      .then(res => 
         (!res.ok)
         ? res.json().then(e => Promise.reject(e))
         : res.json()
      )
   }
}

export default ActivityApiService