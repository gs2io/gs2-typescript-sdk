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
var DecrementPurchaseCountByStampSheetRequest = /** @class */ (function () {
    function DecrementPurchaseCountByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    DecrementPurchaseCountByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DecrementPurchaseCountByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecrementPurchaseCountByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecrementPurchaseCountByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DecrementPurchaseCountByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecrementPurchaseCountByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecrementPurchaseCountByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    DecrementPurchaseCountByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DecrementPurchaseCountByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DecrementPurchaseCountByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    DecrementPurchaseCountByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DecrementPurchaseCountByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DecrementPurchaseCountByStampSheetRequest.fromDict = function (data) {
        return new DecrementPurchaseCountByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    DecrementPurchaseCountByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return DecrementPurchaseCountByStampSheetRequest;
}());
exports.default = DecrementPurchaseCountByStampSheetRequest;
//# sourceMappingURL=DecrementPurchaseCountByStampSheetRequest.js.map