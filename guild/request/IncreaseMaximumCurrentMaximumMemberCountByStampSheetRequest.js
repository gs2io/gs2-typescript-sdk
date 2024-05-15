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
var IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest = /** @class */ (function () {
    function IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest.fromDict = function (data) {
        return new IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest;
}());
exports.default = IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest;
//# sourceMappingURL=IncreaseMaximumCurrentMaximumMemberCountByStampSheetRequest.js.map