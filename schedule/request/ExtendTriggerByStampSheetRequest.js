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
var ExtendTriggerByStampSheetRequest = /** @class */ (function () {
    function ExtendTriggerByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    ExtendTriggerByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ExtendTriggerByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ExtendTriggerByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ExtendTriggerByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ExtendTriggerByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ExtendTriggerByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ExtendTriggerByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    ExtendTriggerByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ExtendTriggerByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ExtendTriggerByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    ExtendTriggerByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    ExtendTriggerByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    ExtendTriggerByStampSheetRequest.fromDict = function (data) {
        return new ExtendTriggerByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    ExtendTriggerByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return ExtendTriggerByStampSheetRequest;
}());
exports.default = ExtendTriggerByStampSheetRequest;
//# sourceMappingURL=ExtendTriggerByStampSheetRequest.js.map