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
var GetDataObjectHistoryRequest = /** @class */ (function () {
    function GetDataObjectHistoryRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.dataObjectName = null;
        this.generation = null;
    }
    GetDataObjectHistoryRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetDataObjectHistoryRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDataObjectHistoryRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDataObjectHistoryRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetDataObjectHistoryRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDataObjectHistoryRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDataObjectHistoryRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetDataObjectHistoryRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetDataObjectHistoryRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetDataObjectHistoryRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetDataObjectHistoryRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetDataObjectHistoryRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetDataObjectHistoryRequest.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    GetDataObjectHistoryRequest.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    GetDataObjectHistoryRequest.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    GetDataObjectHistoryRequest.prototype.getGeneration = function () {
        return this.generation;
    };
    GetDataObjectHistoryRequest.prototype.setGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    GetDataObjectHistoryRequest.prototype.withGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    GetDataObjectHistoryRequest.fromDict = function (data) {
        return new GetDataObjectHistoryRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withDataObjectName(data["dataObjectName"])
            .withGeneration(data["generation"]);
    };
    GetDataObjectHistoryRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "dataObjectName": this.getDataObjectName(),
            "generation": this.getGeneration(),
        };
    };
    return GetDataObjectHistoryRequest;
}());
export default GetDataObjectHistoryRequest;
//# sourceMappingURL=GetDataObjectHistoryRequest.js.map