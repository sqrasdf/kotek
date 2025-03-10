import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017")

db = client["kotek_db"]

import names
db.kotek_db.insert_one({"name": names.get_first_name()})
db.kotek_db.insert_one({"name": names.get_first_name()})
db.kotek_db.insert_one({"name": names.get_first_name()})