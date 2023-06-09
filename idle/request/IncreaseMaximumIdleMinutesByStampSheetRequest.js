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
var IncreaseMaximumIdleMinutesByStampSheetRequest = /** @class */ (function () {
    function IncreaseMaximumIdleMinutesByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    IncreaseMaximumIdleMinutesByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IncreaseMaximumIdleMinutesByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncreaseMaximumIdleMinutesByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncreaseMaximumIdleMinutesByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IncreaseMaximumIdleMinutesByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncreaseMaximumIdleMinutesByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncreaseMaximumIdleMinutesByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    IncreaseMaximumIdleMinutesByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    IncreaseMaximumIdleMinutesByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    IncreaseMaximumIdleMinutesByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    IncreaseMaximumIdleMinutesByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    IncreaseMaximumIdleMinutesByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    IncreaseMaximumIdleMinutesByStampSheetRequest.fromDict = function (data) {
        return new IncreaseMaximumIdleMinutesByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    IncreaseMaximumIdleMinutesByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return IncreaseMaximumIdleMinutesByStampSheetRequest;
}());
exports.default = IncreaseMaximumIdleMinutesByStampSheetRequest;
//# sourceMappingURL=IncreaseMaximumIdleMinutesByStampSheetRequest.js.map