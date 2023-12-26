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
var MultiplyAcquireActionsByStampSheetRequest = /** @class */ (function () {
    function MultiplyAcquireActionsByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    MultiplyAcquireActionsByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    MultiplyAcquireActionsByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MultiplyAcquireActionsByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MultiplyAcquireActionsByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    MultiplyAcquireActionsByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MultiplyAcquireActionsByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MultiplyAcquireActionsByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    MultiplyAcquireActionsByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    MultiplyAcquireActionsByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    MultiplyAcquireActionsByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    MultiplyAcquireActionsByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    MultiplyAcquireActionsByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    MultiplyAcquireActionsByStampSheetRequest.fromDict = function (data) {
        return new MultiplyAcquireActionsByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    MultiplyAcquireActionsByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return MultiplyAcquireActionsByStampSheetRequest;
}());
exports.default = MultiplyAcquireActionsByStampSheetRequest;
//# sourceMappingURL=MultiplyAcquireActionsByStampSheetRequest.js.map