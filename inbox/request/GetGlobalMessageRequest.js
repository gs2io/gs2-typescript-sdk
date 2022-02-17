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
var GetGlobalMessageRequest = /** @class */ (function () {
    function GetGlobalMessageRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.globalMessageName = null;
    }
    GetGlobalMessageRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetGlobalMessageRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGlobalMessageRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGlobalMessageRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetGlobalMessageRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGlobalMessageRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGlobalMessageRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetGlobalMessageRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGlobalMessageRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGlobalMessageRequest.prototype.getGlobalMessageName = function () {
        return this.globalMessageName;
    };
    GetGlobalMessageRequest.prototype.setGlobalMessageName = function (globalMessageName) {
        this.globalMessageName = globalMessageName;
        return this;
    };
    GetGlobalMessageRequest.prototype.withGlobalMessageName = function (globalMessageName) {
        this.globalMessageName = globalMessageName;
        return this;
    };
    GetGlobalMessageRequest.fromDict = function (data) {
        return new GetGlobalMessageRequest()
            .withNamespaceName(data["namespaceName"])
            .withGlobalMessageName(data["globalMessageName"]);
    };
    GetGlobalMessageRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "globalMessageName": this.getGlobalMessageName(),
        };
    };
    return GetGlobalMessageRequest;
}());
export default GetGlobalMessageRequest;
//# sourceMappingURL=GetGlobalMessageRequest.js.map