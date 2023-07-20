"use strict";
/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var GetRarityParameterStatusRequest = /** @class */ (function () {
    function GetRarityParameterStatusRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.parameterName = null;
        this.propertyId = null;
    }
    GetRarityParameterStatusRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRarityParameterStatusRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRarityParameterStatusRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRarityParameterStatusRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRarityParameterStatusRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRarityParameterStatusRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRarityParameterStatusRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRarityParameterStatusRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRarityParameterStatusRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRarityParameterStatusRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetRarityParameterStatusRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetRarityParameterStatusRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetRarityParameterStatusRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    GetRarityParameterStatusRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    GetRarityParameterStatusRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    GetRarityParameterStatusRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    GetRarityParameterStatusRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetRarityParameterStatusRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetRarityParameterStatusRequest.fromDict = function (data) {
        return new GetRarityParameterStatusRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withParameterName(data["parameterName"])
            .withPropertyId(data["propertyId"]);
    };
    GetRarityParameterStatusRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "parameterName": this.getParameterName(),
            "propertyId": this.getPropertyId(),
        };
    };
    return GetRarityParameterStatusRequest;
}());
exports.default = GetRarityParameterStatusRequest;
//# sourceMappingURL=GetRarityParameterStatusRequest.js.map