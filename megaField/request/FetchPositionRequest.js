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
var FetchPositionRequest = /** @class */ (function () {
    function FetchPositionRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.areaModelName = null;
        this.layerModelName = null;
        this.userIds = null;
        this.duplicationAvoider = null;
    }
    FetchPositionRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    FetchPositionRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FetchPositionRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FetchPositionRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    FetchPositionRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FetchPositionRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FetchPositionRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    FetchPositionRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FetchPositionRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FetchPositionRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    FetchPositionRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    FetchPositionRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    FetchPositionRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    FetchPositionRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    FetchPositionRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    FetchPositionRequest.prototype.getLayerModelName = function () {
        return this.layerModelName;
    };
    FetchPositionRequest.prototype.setLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    FetchPositionRequest.prototype.withLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    FetchPositionRequest.prototype.getUserIds = function () {
        return this.userIds;
    };
    FetchPositionRequest.prototype.setUserIds = function (userIds) {
        this.userIds = userIds;
        return this;
    };
    FetchPositionRequest.prototype.withUserIds = function (userIds) {
        this.userIds = userIds;
        return this;
    };
    FetchPositionRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    FetchPositionRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    FetchPositionRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    FetchPositionRequest.fromDict = function (data) {
        return new FetchPositionRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"])
            .withUserIds(data.userIds ?
            data.userIds.map(function (item) {
                return item;
            }) : null);
    };
    FetchPositionRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
            "userIds": this.getUserIds() ?
                this.getUserIds().map(function (item) {
                    return item;
                }) : null,
        };
    };
    return FetchPositionRequest;
}());
exports.default = FetchPositionRequest;
//# sourceMappingURL=FetchPositionRequest.js.map