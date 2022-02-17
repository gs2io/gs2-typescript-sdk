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
var RunStampSheetWithoutNamespaceRequest = /** @class */ (function () {
    function RunStampSheetWithoutNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    RunStampSheetWithoutNamespaceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RunStampSheetWithoutNamespaceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunStampSheetWithoutNamespaceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunStampSheetWithoutNamespaceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RunStampSheetWithoutNamespaceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunStampSheetWithoutNamespaceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunStampSheetWithoutNamespaceRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    RunStampSheetWithoutNamespaceRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    RunStampSheetWithoutNamespaceRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    RunStampSheetWithoutNamespaceRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    RunStampSheetWithoutNamespaceRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RunStampSheetWithoutNamespaceRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RunStampSheetWithoutNamespaceRequest.fromDict = function (data) {
        return new RunStampSheetWithoutNamespaceRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    RunStampSheetWithoutNamespaceRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return RunStampSheetWithoutNamespaceRequest;
}());
export default RunStampSheetWithoutNamespaceRequest;
//# sourceMappingURL=RunStampSheetWithoutNamespaceRequest.js.map