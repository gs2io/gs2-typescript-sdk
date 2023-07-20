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
var GetBalanceParameterStatusRequest = /** @class */ (function () {
    function GetBalanceParameterStatusRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.parameterName = null;
        this.propertyId = null;
    }
    GetBalanceParameterStatusRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBalanceParameterStatusRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBalanceParameterStatusRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBalanceParameterStatusRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBalanceParameterStatusRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBalanceParameterStatusRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBalanceParameterStatusRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBalanceParameterStatusRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBalanceParameterStatusRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBalanceParameterStatusRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetBalanceParameterStatusRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetBalanceParameterStatusRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetBalanceParameterStatusRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    GetBalanceParameterStatusRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    GetBalanceParameterStatusRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    GetBalanceParameterStatusRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    GetBalanceParameterStatusRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetBalanceParameterStatusRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    GetBalanceParameterStatusRequest.fromDict = function (data) {
        return new GetBalanceParameterStatusRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withParameterName(data["parameterName"])
            .withPropertyId(data["propertyId"]);
    };
    GetBalanceParameterStatusRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "parameterName": this.getParameterName(),
            "propertyId": this.getPropertyId(),
        };
    };
    return GetBalanceParameterStatusRequest;
}());
exports.default = GetBalanceParameterStatusRequest;
//# sourceMappingURL=GetBalanceParameterStatusRequest.js.map