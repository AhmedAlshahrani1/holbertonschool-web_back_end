#!/usr/bin/env python3
"""
This module provides a type-annotated function to_kv.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Takes a string and an int OR float, returns a tuple with the string
    and the square of the number as a float.
    """
    return (k, v ** 2)
