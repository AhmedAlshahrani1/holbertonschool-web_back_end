#!/usr/bin/env python3
"""
Module 8-all
Lists all documents in a MongoDB collection using PyMongo
"""


def list_all(mongo_collection):
    """
    Lists all documents in a collection.

    Args:
        mongo_collection: the PyMongo collection object.

    Returns:
        A list of all documents, or an empty list if no document exists.
    """
    return [doc for doc in mongo_collection.find()]
