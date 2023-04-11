from pymongo import MongoClient


with MongoClient() as client:
    db = client.library
    piperlines = [
        {"$match": {"status": "PUBLISH"}},
        {"$unwind": "$categories"},
        {"$group": {"_id": "$categories", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
    ]
    for category in db.books.aggregate(piperlines):
        print(category["_id"], category["count"])
