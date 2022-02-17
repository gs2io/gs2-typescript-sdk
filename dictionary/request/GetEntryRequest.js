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
var GetEntryRequest = /** @class */ (function () {
    function GetEntryRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.entryModelName = null;
    }
    GetEntryRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetEntryRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEntryRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEntryRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetEntryRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEntryRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEntryRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetEntryRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetEntryRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetEntryRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetEntryRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetEntryRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetEntryRequest.prototype.getEntryModelName = function () {
        return this.entryModelName;
    };
    GetEntryRequest.prototype.setEntryModelName = function (entryModelName) {
        this.entryModelName = entryModelName;
        return this;
    };
    GetEntryRequest.prototype.withEntryModelName = function (entryModelName) {
        this.entryModelName = entryModelName;
        return this;
    };
    GetEntryRequest.fromDict = function (data) {
        return new GetEntryRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withEntryModelName(data["entryModelName"]);
    };
    GetEntryRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "entryModelName": this.getEntryModelName(),
        };
    };
    return GetEntryRequest;
}());
export default GetEntryRequest;
//# sourceMappingURL=GetEntryRequest.js.map