#!/usr/bin/env python3
"""
Module 9-insert_school
Inserts a new document in a collection based on kwargs
"""


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in a collection.

    Args:
        mongo_collection: the PyMongo collection object.
        **kwargs: keyword arguments representing the document fields.

    Returns:
        The _id of the newly inserted document.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
