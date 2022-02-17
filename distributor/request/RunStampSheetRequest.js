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
var RunStampSheetRequest = /** @class */ (function () {
    function RunStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    RunStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RunStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RunStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunStampSheetRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RunStampSheetRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RunStampSheetRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RunStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    RunStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    RunStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    RunStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    RunStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RunStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RunStampSheetRequest.fromDict = function (data) {
        return new RunStampSheetRequest()
            .withNamespaceName(data["namespaceName"])
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    RunStampSheetRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return RunStampSheetRequest;
}());
exports.default = RunStampSheetRequest;
//# sourceMappingURL=RunStampSheetRequest.js.map