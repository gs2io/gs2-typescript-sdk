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
var StartStateMachineByStampSheetRequest = /** @class */ (function () {
    function StartStateMachineByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    StartStateMachineByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    StartStateMachineByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    StartStateMachineByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    StartStateMachineByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    StartStateMachineByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    StartStateMachineByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    StartStateMachineByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    StartStateMachineByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    StartStateMachineByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    StartStateMachineByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    StartStateMachineByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    StartStateMachineByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    StartStateMachineByStampSheetRequest.fromDict = function (data) {
        return new StartStateMachineByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    StartStateMachineByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return StartStateMachineByStampSheetRequest;
}());
exports.default = StartStateMachineByStampSheetRequest;
//# sourceMappingURL=StartStateMachineByStampSheetRequest.js.map