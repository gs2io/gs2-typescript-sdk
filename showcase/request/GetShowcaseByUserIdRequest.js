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
var GetShowcaseByUserIdRequest = /** @class */ (function () {
    function GetShowcaseByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.userId = null;
    }
    GetShowcaseByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetShowcaseByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetShowcaseByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetShowcaseByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetShowcaseByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetShowcaseByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetShowcaseByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetShowcaseByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetShowcaseByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetShowcaseByUserIdRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    GetShowcaseByUserIdRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    GetShowcaseByUserIdRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    GetShowcaseByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetShowcaseByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetShowcaseByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetShowcaseByUserIdRequest.fromDict = function (data) {
        return new GetShowcaseByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withUserId(data["userId"]);
    };
    GetShowcaseByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "userId": this.getUserId(),
        };
    };
    return GetShowcaseByUserIdRequest;
}());
export default GetShowcaseByUserIdRequest;
//# sourceMappingURL=GetShowcaseByUserIdRequest.js.map