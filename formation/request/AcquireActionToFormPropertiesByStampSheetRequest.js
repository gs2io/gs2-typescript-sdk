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
var AcquireActionToFormPropertiesByStampSheetRequest = /** @class */ (function () {
    function AcquireActionToFormPropertiesByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    AcquireActionToFormPropertiesByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcquireActionToFormPropertiesByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcquireActionToFormPropertiesByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    AcquireActionToFormPropertiesByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    AcquireActionToFormPropertiesByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetRequest.fromDict = function (data) {
        return new AcquireActionToFormPropertiesByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    AcquireActionToFormPropertiesByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return AcquireActionToFormPropertiesByStampSheetRequest;
}());
exports.default = AcquireActionToFormPropertiesByStampSheetRequest;
//# sourceMappingURL=AcquireActionToFormPropertiesByStampSheetRequest.js.map