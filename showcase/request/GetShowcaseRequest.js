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
var GetShowcaseRequest = /** @class */ (function () {
    function GetShowcaseRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.accessToken = null;
    }
    GetShowcaseRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetShowcaseRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetShowcaseRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetShowcaseRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetShowcaseRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetShowcaseRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetShowcaseRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetShowcaseRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetShowcaseRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetShowcaseRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    GetShowcaseRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    GetShowcaseRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    GetShowcaseRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetShowcaseRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetShowcaseRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetShowcaseRequest.fromDict = function (data) {
        return new GetShowcaseRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withAccessToken(data["accessToken"]);
    };
    GetShowcaseRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return GetShowcaseRequest;
}());
export default GetShowcaseRequest;
//# sourceMappingURL=GetShowcaseRequest.js.map