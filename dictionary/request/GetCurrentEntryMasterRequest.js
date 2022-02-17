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
var GetCurrentEntryMasterRequest = /** @class */ (function () {
    function GetCurrentEntryMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetCurrentEntryMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCurrentEntryMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentEntryMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentEntryMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCurrentEntryMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentEntryMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentEntryMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCurrentEntryMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentEntryMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentEntryMasterRequest.fromDict = function (data) {
        return new GetCurrentEntryMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetCurrentEntryMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetCurrentEntryMasterRequest;
}());
export default GetCurrentEntryMasterRequest;
//# sourceMappingURL=GetCurrentEntryMasterRequest.js.map