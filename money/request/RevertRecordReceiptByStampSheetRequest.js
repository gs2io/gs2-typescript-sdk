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
var RevertRecordReceiptByStampSheetRequest = /** @class */ (function () {
    function RevertRecordReceiptByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    RevertRecordReceiptByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RevertRecordReceiptByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RevertRecordReceiptByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RevertRecordReceiptByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RevertRecordReceiptByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RevertRecordReceiptByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RevertRecordReceiptByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    RevertRecordReceiptByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    RevertRecordReceiptByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    RevertRecordReceiptByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    RevertRecordReceiptByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RevertRecordReceiptByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RevertRecordReceiptByStampSheetRequest.fromDict = function (data) {
        return new RevertRecordReceiptByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    RevertRecordReceiptByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return RevertRecordReceiptByStampSheetRequest;
}());
exports.default = RevertRecordReceiptByStampSheetRequest;
//# sourceMappingURL=RevertRecordReceiptByStampSheetRequest.js.map