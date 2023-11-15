# coding: utf-8

"""
    E2B API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json


from pydantic import BaseModel, Field, conint


class InstancesInstanceIDRefreshesPostRequest(BaseModel):
    """
    InstancesInstanceIDRefreshesPostRequest
    """

    duration: conint(strict=True, le=3600, ge=0) = Field(
        ...,
        description="Duration for which the instance should be kept alive in seconds",
    )

    """Pydantic configuration"""
    model_config = {
        "populate_by_name": True,
        "validate_assignment": True,
    }

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> InstancesInstanceIDRefreshesPostRequest:
        """Create an instance of InstancesInstanceIDRefreshesPostRequest from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.model_dump(by_alias=True, exclude={}, exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> InstancesInstanceIDRefreshesPostRequest:
        """Create an instance of InstancesInstanceIDRefreshesPostRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return InstancesInstanceIDRefreshesPostRequest.model_validate(obj)

        # raise errors for additional fields in the input
        for _key in obj.keys():
            if _key not in ["duration"]:
                raise ValueError(
                    "Error due to additional fields (not defined in InstancesInstanceIDRefreshesPostRequest) in the input: "
                    + obj
                )

        _obj = InstancesInstanceIDRefreshesPostRequest.model_validate(
            {"duration": obj.get("duration")}
        )
        return _obj
