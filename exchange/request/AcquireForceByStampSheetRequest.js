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
var AcquireForceByStampSheetRequest = /** @class */ (function () {
    function AcquireForceByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    AcquireForceByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcquireForceByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireForceByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireForceByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcquireForceByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireForceByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireForceByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    AcquireForceByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AcquireForceByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AcquireForceByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    AcquireForceByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AcquireForceByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AcquireForceByStampSheetRequest.fromDict = function (data) {
        return new AcquireForceByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    AcquireForceByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return AcquireForceByStampSheetRequest;
}());
exports.default = AcquireForceByStampSheetRequest;
//# sourceMappingURL=AcquireForceByStampSheetRequest.js.map