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
var UnmarkReceivedByStampSheetRequest = /** @class */ (function () {
    function UnmarkReceivedByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    UnmarkReceivedByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UnmarkReceivedByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnmarkReceivedByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnmarkReceivedByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UnmarkReceivedByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnmarkReceivedByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnmarkReceivedByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    UnmarkReceivedByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    UnmarkReceivedByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    UnmarkReceivedByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    UnmarkReceivedByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    UnmarkReceivedByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    UnmarkReceivedByStampSheetRequest.fromDict = function (data) {
        return new UnmarkReceivedByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    UnmarkReceivedByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return UnmarkReceivedByStampSheetRequest;
}());
exports.default = UnmarkReceivedByStampSheetRequest;
//# sourceMappingURL=UnmarkReceivedByStampSheetRequest.js.map