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
var UpdateProfileByStampSheetRequest = /** @class */ (function () {
    function UpdateProfileByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    UpdateProfileByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateProfileByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateProfileByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateProfileByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateProfileByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateProfileByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateProfileByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    UpdateProfileByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    UpdateProfileByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    UpdateProfileByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    UpdateProfileByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    UpdateProfileByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    UpdateProfileByStampSheetRequest.fromDict = function (data) {
        return new UpdateProfileByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    UpdateProfileByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return UpdateProfileByStampSheetRequest;
}());
exports.default = UpdateProfileByStampSheetRequest;
//# sourceMappingURL=UpdateProfileByStampSheetRequest.js.map