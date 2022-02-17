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
var DeleteMoldRequest = /** @class */ (function () {
    function DeleteMoldRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.moldName = null;
    }
    DeleteMoldRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteMoldRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMoldRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMoldRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteMoldRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMoldRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMoldRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteMoldRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMoldRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMoldRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DeleteMoldRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteMoldRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteMoldRequest.prototype.getMoldName = function () {
        return this.moldName;
    };
    DeleteMoldRequest.prototype.setMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    DeleteMoldRequest.prototype.withMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    DeleteMoldRequest.fromDict = function (data) {
        return new DeleteMoldRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withMoldName(data["moldName"]);
    };
    DeleteMoldRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "moldName": this.getMoldName(),
        };
    };
    return DeleteMoldRequest;
}());
export default DeleteMoldRequest;
//# sourceMappingURL=DeleteMoldRequest.js.map