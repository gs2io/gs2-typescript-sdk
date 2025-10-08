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
var AcquireSimpleItemsByStampSheetRequest = /** @class */ (function () {
    function AcquireSimpleItemsByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    AcquireSimpleItemsByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcquireSimpleItemsByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireSimpleItemsByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireSimpleItemsByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcquireSimpleItemsByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireSimpleItemsByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireSimpleItemsByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    AcquireSimpleItemsByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AcquireSimpleItemsByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AcquireSimpleItemsByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    AcquireSimpleItemsByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AcquireSimpleItemsByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AcquireSimpleItemsByStampSheetRequest.fromDict = function (data) {
        return new AcquireSimpleItemsByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    AcquireSimpleItemsByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return AcquireSimpleItemsByStampSheetRequest;
}());
exports.default = AcquireSimpleItemsByStampSheetRequest;
//# sourceMappingURL=AcquireSimpleItemsByStampSheetRequest.js.map