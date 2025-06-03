/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4100798438")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_mHCgzLZgOC` ON `societies` (id)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4100798438")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
