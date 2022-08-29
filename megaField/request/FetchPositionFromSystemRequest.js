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
var FetchPositionFromSystemRequest = /** @class */ (function () {
    function FetchPositionFromSystemRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.areaModelName = null;
        this.layerModelName = null;
        this.userIds = null;
        this.duplicationAvoider = null;
    }
    FetchPositionFromSystemRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    FetchPositionFromSystemRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FetchPositionFromSystemRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FetchPositionFromSystemRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    FetchPositionFromSystemRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FetchPositionFromSystemRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FetchPositionFromSystemRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    FetchPositionFromSystemRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FetchPositionFromSystemRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FetchPositionFromSystemRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    FetchPositionFromSystemRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    FetchPositionFromSystemRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    FetchPositionFromSystemRequest.prototype.getLayerModelName = function () {
        return this.layerModelName;
    };
    FetchPositionFromSystemRequest.prototype.setLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    FetchPositionFromSystemRequest.prototype.withLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    FetchPositionFromSystemRequest.prototype.getUserIds = function () {
        return this.userIds;
    };
    FetchPositionFromSystemRequest.prototype.setUserIds = function (userIds) {
        this.userIds = userIds;
        return this;
    };
    FetchPositionFromSystemRequest.prototype.withUserIds = function (userIds) {
        this.userIds = userIds;
        return this;
    };
    FetchPositionFromSystemRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    FetchPositionFromSystemRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    FetchPositionFromSystemRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    FetchPositionFromSystemRequest.fromDict = function (data) {
        return new FetchPositionFromSystemRequest()
            .withNamespaceName(data["namespaceName"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"])
            .withUserIds(data.userIds ?
            data.userIds.map(function (item) {
                return item;
            }) : []);
    };
    FetchPositionFromSystemRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
            "userIds": this.getUserIds() ?
                this.getUserIds().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return FetchPositionFromSystemRequest;
}());
exports.default = FetchPositionFromSystemRequest;
//# sourceMappingURL=FetchPositionFromSystemRequest.js.map