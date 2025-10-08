"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var RunStampSheetExpressWithoutNamespaceRequest = /** @class */ (function () {
    function RunStampSheetExpressWithoutNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    RunStampSheetExpressWithoutNamespaceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RunStampSheetExpressWithoutNamespaceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RunStampSheetExpressWithoutNamespaceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    RunStampSheetExpressWithoutNamespaceRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    RunStampSheetExpressWithoutNamespaceRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceRequest.fromDict = function (data) {
        return new RunStampSheetExpressWithoutNamespaceRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    RunStampSheetExpressWithoutNamespaceRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return RunStampSheetExpressWithoutNamespaceRequest;
}());
exports.default = RunStampSheetExpressWithoutNamespaceRequest;
//# sourceMappingURL=RunStampSheetExpressWithoutNamespaceRequest.js.map