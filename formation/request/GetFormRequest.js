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
var GetFormRequest = /** @class */ (function () {
    function GetFormRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.moldName = null;
        this.index = null;
    }
    GetFormRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetFormRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFormRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFormRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetFormRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFormRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFormRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetFormRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFormRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFormRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetFormRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetFormRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetFormRequest.prototype.getMoldName = function () {
        return this.moldName;
    };
    GetFormRequest.prototype.setMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    GetFormRequest.prototype.withMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    GetFormRequest.prototype.getIndex = function () {
        return this.index;
    };
    GetFormRequest.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    GetFormRequest.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    GetFormRequest.fromDict = function (data) {
        return new GetFormRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withMoldName(data["moldName"])
            .withIndex(data["index"]);
    };
    GetFormRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "moldName": this.getMoldName(),
            "index": this.getIndex(),
        };
    };
    return GetFormRequest;
}());
export default GetFormRequest;
//# sourceMappingURL=GetFormRequest.js.map