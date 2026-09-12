#!/usr/bin/env python3
"""
Module 10-update_topics
Changes all topics of a school document based on the name
"""


def update_topics(mongo_collection, name, topics):
    """
    Changes all topics of a school document based on the name.

    Args:
        mongo_collection: the PyMongo collection object.
        name (str): the school name to update.
        topics (list of str): the list of topics approached in the school.
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
