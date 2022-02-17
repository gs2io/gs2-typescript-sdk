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
var GetDataObjectHistoryByUserIdRequest = /** @class */ (function () {
    function GetDataObjectHistoryByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.dataObjectName = null;
        this.generation = null;
    }
    GetDataObjectHistoryByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetDataObjectHistoryByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDataObjectHistoryByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDataObjectHistoryByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetDataObjectHistoryByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDataObjectHistoryByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDataObjectHistoryByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetDataObjectHistoryByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetDataObjectHistoryByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetDataObjectHistoryByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetDataObjectHistoryByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetDataObjectHistoryByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetDataObjectHistoryByUserIdRequest.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    GetDataObjectHistoryByUserIdRequest.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    GetDataObjectHistoryByUserIdRequest.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    GetDataObjectHistoryByUserIdRequest.prototype.getGeneration = function () {
        return this.generation;
    };
    GetDataObjectHistoryByUserIdRequest.prototype.setGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    GetDataObjectHistoryByUserIdRequest.prototype.withGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    GetDataObjectHistoryByUserIdRequest.fromDict = function (data) {
        return new GetDataObjectHistoryByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withDataObjectName(data["dataObjectName"])
            .withGeneration(data["generation"]);
    };
    GetDataObjectHistoryByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "dataObjectName": this.getDataObjectName(),
            "generation": this.getGeneration(),
        };
    };
    return GetDataObjectHistoryByUserIdRequest;
}());
export default GetDataObjectHistoryByUserIdRequest;
//# sourceMappingURL=GetDataObjectHistoryByUserIdRequest.js.map