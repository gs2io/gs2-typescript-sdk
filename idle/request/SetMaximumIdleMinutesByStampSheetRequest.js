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
var SetMaximumIdleMinutesByStampSheetRequest = /** @class */ (function () {
    function SetMaximumIdleMinutesByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    SetMaximumIdleMinutesByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetMaximumIdleMinutesByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMaximumIdleMinutesByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMaximumIdleMinutesByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetMaximumIdleMinutesByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMaximumIdleMinutesByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMaximumIdleMinutesByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    SetMaximumIdleMinutesByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    SetMaximumIdleMinutesByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    SetMaximumIdleMinutesByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    SetMaximumIdleMinutesByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetMaximumIdleMinutesByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetMaximumIdleMinutesByStampSheetRequest.fromDict = function (data) {
        return new SetMaximumIdleMinutesByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    SetMaximumIdleMinutesByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return SetMaximumIdleMinutesByStampSheetRequest;
}());
exports.default = SetMaximumIdleMinutesByStampSheetRequest;
//# sourceMappingURL=SetMaximumIdleMinutesByStampSheetRequest.js.map