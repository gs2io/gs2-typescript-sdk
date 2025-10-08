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
var AcquireItemSetWithGradeByStampSheetRequest = /** @class */ (function () {
    function AcquireItemSetWithGradeByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    AcquireItemSetWithGradeByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcquireItemSetWithGradeByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcquireItemSetWithGradeByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    AcquireItemSetWithGradeByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    AcquireItemSetWithGradeByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AcquireItemSetWithGradeByStampSheetRequest.fromDict = function (data) {
        return new AcquireItemSetWithGradeByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    AcquireItemSetWithGradeByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return AcquireItemSetWithGradeByStampSheetRequest;
}());
exports.default = AcquireItemSetWithGradeByStampSheetRequest;
//# sourceMappingURL=AcquireItemSetWithGradeByStampSheetRequest.js.map