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
var SetMaxValueByStampSheetRequest = /** @class */ (function () {
    function SetMaxValueByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    SetMaxValueByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetMaxValueByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMaxValueByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMaxValueByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetMaxValueByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMaxValueByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMaxValueByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    SetMaxValueByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    SetMaxValueByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    SetMaxValueByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    SetMaxValueByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetMaxValueByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetMaxValueByStampSheetRequest.fromDict = function (data) {
        return new SetMaxValueByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    SetMaxValueByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return SetMaxValueByStampSheetRequest;
}());
exports.default = SetMaxValueByStampSheetRequest;
//# sourceMappingURL=SetMaxValueByStampSheetRequest.js.map