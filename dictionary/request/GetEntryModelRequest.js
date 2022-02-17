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
var GetEntryModelRequest = /** @class */ (function () {
    function GetEntryModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.entryName = null;
    }
    GetEntryModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetEntryModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEntryModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEntryModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetEntryModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEntryModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEntryModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetEntryModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetEntryModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetEntryModelRequest.prototype.getEntryName = function () {
        return this.entryName;
    };
    GetEntryModelRequest.prototype.setEntryName = function (entryName) {
        this.entryName = entryName;
        return this;
    };
    GetEntryModelRequest.prototype.withEntryName = function (entryName) {
        this.entryName = entryName;
        return this;
    };
    GetEntryModelRequest.fromDict = function (data) {
        return new GetEntryModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withEntryName(data["entryName"]);
    };
    GetEntryModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "entryName": this.getEntryName(),
        };
    };
    return GetEntryModelRequest;
}());
export default GetEntryModelRequest;
//# sourceMappingURL=GetEntryModelRequest.js.map