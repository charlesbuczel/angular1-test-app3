eventsApp.factory('eventData', function ($resource) {
  const resource = $resource('/data/event/:id',  {id: '@id'});
  return {
    get: () => resource.get({id: 1}),
    save: (event) => resource.save(event)
  };
});
