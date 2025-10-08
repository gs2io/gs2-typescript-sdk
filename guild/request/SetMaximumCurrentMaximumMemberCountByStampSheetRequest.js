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
var SetMaximumCurrentMaximumMemberCountByStampSheetRequest = /** @class */ (function () {
    function SetMaximumCurrentMaximumMemberCountByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    SetMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    SetMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    SetMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetMaximumCurrentMaximumMemberCountByStampSheetRequest.fromDict = function (data) {
        return new SetMaximumCurrentMaximumMemberCountByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    SetMaximumCurrentMaximumMemberCountByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return SetMaximumCurrentMaximumMemberCountByStampSheetRequest;
}());
exports.default = SetMaximumCurrentMaximumMemberCountByStampSheetRequest;
//# sourceMappingURL=SetMaximumCurrentMaximumMemberCountByStampSheetRequest.js.map