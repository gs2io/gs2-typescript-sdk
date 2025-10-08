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
var SubMoldCapacityRequest = /** @class */ (function () {
    function SubMoldCapacityRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.moldModelName = null;
        this.capacity = null;
        this.duplicationAvoider = null;
    }
    SubMoldCapacityRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SubMoldCapacityRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubMoldCapacityRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubMoldCapacityRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SubMoldCapacityRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubMoldCapacityRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubMoldCapacityRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SubMoldCapacityRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubMoldCapacityRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubMoldCapacityRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SubMoldCapacityRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SubMoldCapacityRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SubMoldCapacityRequest.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    SubMoldCapacityRequest.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    SubMoldCapacityRequest.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    SubMoldCapacityRequest.prototype.getCapacity = function () {
        return this.capacity;
    };
    SubMoldCapacityRequest.prototype.setCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    SubMoldCapacityRequest.prototype.withCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    SubMoldCapacityRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SubMoldCapacityRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubMoldCapacityRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubMoldCapacityRequest.fromDict = function (data) {
        return new SubMoldCapacityRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withMoldModelName(data["moldModelName"])
            .withCapacity(data["capacity"]);
    };
    SubMoldCapacityRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "moldModelName": this.getMoldModelName(),
            "capacity": this.getCapacity(),
        };
    };
    return SubMoldCapacityRequest;
}());
exports.default = SubMoldCapacityRequest;
//# sourceMappingURL=SubMoldCapacityRequest.js.map