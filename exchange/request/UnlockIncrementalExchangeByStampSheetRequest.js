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
var UnlockIncrementalExchangeByStampSheetRequest = /** @class */ (function () {
    function UnlockIncrementalExchangeByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    UnlockIncrementalExchangeByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UnlockIncrementalExchangeByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnlockIncrementalExchangeByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnlockIncrementalExchangeByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UnlockIncrementalExchangeByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnlockIncrementalExchangeByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnlockIncrementalExchangeByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    UnlockIncrementalExchangeByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    UnlockIncrementalExchangeByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    UnlockIncrementalExchangeByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    UnlockIncrementalExchangeByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    UnlockIncrementalExchangeByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    UnlockIncrementalExchangeByStampSheetRequest.fromDict = function (data) {
        return new UnlockIncrementalExchangeByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    UnlockIncrementalExchangeByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return UnlockIncrementalExchangeByStampSheetRequest;
}());
exports.default = UnlockIncrementalExchangeByStampSheetRequest;
//# sourceMappingURL=UnlockIncrementalExchangeByStampSheetRequest.js.map