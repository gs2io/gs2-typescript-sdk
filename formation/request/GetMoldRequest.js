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
var GetMoldRequest = /** @class */ (function () {
    function GetMoldRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.moldName = null;
    }
    GetMoldRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetMoldRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMoldRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMoldRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetMoldRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMoldRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMoldRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetMoldRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMoldRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMoldRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetMoldRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetMoldRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetMoldRequest.prototype.getMoldName = function () {
        return this.moldName;
    };
    GetMoldRequest.prototype.setMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    GetMoldRequest.prototype.withMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    GetMoldRequest.fromDict = function (data) {
        return new GetMoldRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withMoldName(data["moldName"]);
    };
    GetMoldRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "moldName": this.getMoldName(),
        };
    };
    return GetMoldRequest;
}());
export default GetMoldRequest;
//# sourceMappingURL=GetMoldRequest.js.map