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
var AcquireItemSetByStampSheetRequest = /** @class */ (function () {
    function AcquireItemSetByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    AcquireItemSetByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcquireItemSetByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireItemSetByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireItemSetByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcquireItemSetByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireItemSetByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireItemSetByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    AcquireItemSetByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AcquireItemSetByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AcquireItemSetByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    AcquireItemSetByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AcquireItemSetByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AcquireItemSetByStampSheetRequest.fromDict = function (data) {
        return new AcquireItemSetByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    AcquireItemSetByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return AcquireItemSetByStampSheetRequest;
}());
exports.default = AcquireItemSetByStampSheetRequest;
//# sourceMappingURL=AcquireItemSetByStampSheetRequest.js.map