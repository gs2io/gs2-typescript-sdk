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
var MarkReleaseByStampSheetRequest = /** @class */ (function () {
    function MarkReleaseByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    MarkReleaseByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    MarkReleaseByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MarkReleaseByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MarkReleaseByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    MarkReleaseByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MarkReleaseByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MarkReleaseByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    MarkReleaseByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    MarkReleaseByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    MarkReleaseByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    MarkReleaseByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    MarkReleaseByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    MarkReleaseByStampSheetRequest.fromDict = function (data) {
        return new MarkReleaseByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    MarkReleaseByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return MarkReleaseByStampSheetRequest;
}());
exports.default = MarkReleaseByStampSheetRequest;
//# sourceMappingURL=MarkReleaseByStampSheetRequest.js.map