# Quick-guide for backend implementation

## 1. JS Eventing system

Some actions that happen in the new frontend trigger an event.
Events can be accessed liked that:

```js
window.infoq.event.on('eventName', callback)
```

### Usage example:
```js
infoq.event.on('follow', function(e) {
  console.log('Event payload: ', e)
})
```

where eventName is one of the following:

- `loaded` *(infoq.js for the new frontend has loaded)*
  
  Payload:
  --------

  null

- `closed` *(an item was closed - part of closeables)*
  
  Payload:
  --------
  | var | type | data |
  | --- | ---- | ------- |
  | `closeable` | HTMLElement | the item that gets removed on click |
  

- `tabChange` *(Whenever a tab has changed)*

  Payload:
  --------

  | var | type | data |
  | --- | ---- | ------- |
  | `instance` | HTMLElement | the containing .tabs element |
  | `payload` | Object | { id: String, index: Number} |
- `follow` *(an user or topic gets followed/unfollowed)*

  Payload:
  --------

  | var | type | data |
  | --- | ---- | ------- |
  | `id` | String | user/topic's id |
  | `trkRef` | String | tracking Reference id based on data-trk-ref of closest element |
  | `segment` | String | Depending on the followed item can be 'user' or 'topic' |
  | `flag` | Bool | Follow status |
- `like` *(a topic gets liked/unliked)*

  Payload:
  --------

  | var | type | data |
  | --- | ---- | ------- |
  | `id` | String | topic's id |
  | `type` | String | Depending on the followed item can be 'content' or 'comment' |
  | `trkRef` | String | tracking Reference id based on data-trk-ref of closest element |
  | `title` | String | topic's title |
  | `path` | String | topic's path |
  | `aids` | Array | only for content: topic's authors' ids |
  | `flag` | Bool | Like status |
  | `commenterId` | String | only for comments: commenting author's id |
  | `commentSubject` | String | only for comments: comment subject |
- `login` *(login modal was triggered from a button)*

  Payload:
  --------

  | var | type | data |
  | --- | ---- | ------- |
  | `ref` | String | login call reference - TODO #66 |
- `modalOpen` *(when a modal is triggered)*

  Payload:
  --------

  | var | type | data |
  | --- | ---- | ------- |
  | `containingItem` | HTMLElement | modal's containing item |
- `modalClose` *(when the modal closes)*
  
  Payload:
  --------

  null

- `notificationsReadAll` *(read all notifications button clicked)*
  
  Payload:
  --------

  null

- `notificationRead` *(a notification 'Mark as read' button clicked)*

  Payload:
  --------

  | var | type | data |
  | --- | ---- | ------- |
  | `id` | String | notification's id based on <li data-id="XXX"> el |

- `notificationsTriggered` *(notifications dropdown was opened)*
  
  Payload:
  --------

  null


*Please let me know if you would require additional hooks for implementation and if this document suits the implementation needs.*