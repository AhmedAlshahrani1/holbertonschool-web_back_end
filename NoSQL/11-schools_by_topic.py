#!/usr/bin/env python3
"""
Module 11-schools_by_topic
Returns the list of schools having a specific topic
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of school having a specific topic.

    Args:
        mongo_collection: the PyMongo collection object.
        topic (str): the topic searched.

    Returns:
        A list of matching documents.
    """
    return [doc for doc in mongo_collection.find({"topics": topic})]
