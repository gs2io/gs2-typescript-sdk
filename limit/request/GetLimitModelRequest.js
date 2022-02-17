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
var GetLimitModelRequest = /** @class */ (function () {
    function GetLimitModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.limitName = null;
    }
    GetLimitModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetLimitModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLimitModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLimitModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetLimitModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLimitModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLimitModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetLimitModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLimitModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLimitModelRequest.prototype.getLimitName = function () {
        return this.limitName;
    };
    GetLimitModelRequest.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    GetLimitModelRequest.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    GetLimitModelRequest.fromDict = function (data) {
        return new GetLimitModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withLimitName(data["limitName"]);
    };
    GetLimitModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "limitName": this.getLimitName(),
        };
    };
    return GetLimitModelRequest;
}());
export default GetLimitModelRequest;
//# sourceMappingURL=GetLimitModelRequest.js.map