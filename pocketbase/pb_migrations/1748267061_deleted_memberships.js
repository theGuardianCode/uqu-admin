/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1990943746");

  return app.delete(collection);
}, (app) => {
  const collection = new Collection({
    "createRule": "userID = @request.auth.id",
    "deleteRule": "userID = @request.auth.id",
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "_pb_users_auth_",
        "hidden": false,
        "id": "relation1608019204",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "userID",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_4100798438",
        "hidden": false,
        "id": "relation26119915",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "socID",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_1990943746",
    "indexes": [],
    "listRule": "",
    "name": "memberships",
    "system": false,
    "type": "base",
    "updateRule": "userID = @request.auth.id",
    "viewRule": ""
  });

  return app.save(collection);
})
