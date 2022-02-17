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
var SetMoldCapacityByUserIdRequest = /** @class */ (function () {
    function SetMoldCapacityByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.moldName = null;
        this.capacity = null;
    }
    SetMoldCapacityByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetMoldCapacityByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetMoldCapacityByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetMoldCapacityByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetMoldCapacityByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.getMoldName = function () {
        return this.moldName;
    };
    SetMoldCapacityByUserIdRequest.prototype.setMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.withMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.getCapacity = function () {
        return this.capacity;
    };
    SetMoldCapacityByUserIdRequest.prototype.setCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    SetMoldCapacityByUserIdRequest.prototype.withCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    SetMoldCapacityByUserIdRequest.fromDict = function (data) {
        return new SetMoldCapacityByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMoldName(data["moldName"])
            .withCapacity(data["capacity"]);
    };
    SetMoldCapacityByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "moldName": this.getMoldName(),
            "capacity": this.getCapacity(),
        };
    };
    return SetMoldCapacityByUserIdRequest;
}());
export default SetMoldCapacityByUserIdRequest;
//# sourceMappingURL=SetMoldCapacityByUserIdRequest.js.map