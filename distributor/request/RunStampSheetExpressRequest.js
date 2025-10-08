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
var RunStampSheetExpressRequest = /** @class */ (function () {
    function RunStampSheetExpressRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    RunStampSheetExpressRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RunStampSheetExpressRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunStampSheetExpressRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunStampSheetExpressRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RunStampSheetExpressRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunStampSheetExpressRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunStampSheetExpressRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RunStampSheetExpressRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RunStampSheetExpressRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RunStampSheetExpressRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    RunStampSheetExpressRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    RunStampSheetExpressRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    RunStampSheetExpressRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    RunStampSheetExpressRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RunStampSheetExpressRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RunStampSheetExpressRequest.fromDict = function (data) {
        return new RunStampSheetExpressRequest()
            .withNamespaceName(data["namespaceName"])
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    RunStampSheetExpressRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return RunStampSheetExpressRequest;
}());
exports.default = RunStampSheetExpressRequest;
//# sourceMappingURL=RunStampSheetExpressRequest.js.map