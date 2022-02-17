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
var GetCurrentRateMasterRequest = /** @class */ (function () {
    function GetCurrentRateMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetCurrentRateMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCurrentRateMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentRateMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentRateMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCurrentRateMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentRateMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentRateMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCurrentRateMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentRateMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentRateMasterRequest.fromDict = function (data) {
        return new GetCurrentRateMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetCurrentRateMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetCurrentRateMasterRequest;
}());
export default GetCurrentRateMasterRequest;
//# sourceMappingURL=GetCurrentRateMasterRequest.js.map