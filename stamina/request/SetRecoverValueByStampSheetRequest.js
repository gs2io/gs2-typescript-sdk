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
var SetRecoverValueByStampSheetRequest = /** @class */ (function () {
    function SetRecoverValueByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    SetRecoverValueByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetRecoverValueByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetRecoverValueByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetRecoverValueByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetRecoverValueByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetRecoverValueByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetRecoverValueByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    SetRecoverValueByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    SetRecoverValueByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    SetRecoverValueByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    SetRecoverValueByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetRecoverValueByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetRecoverValueByStampSheetRequest.fromDict = function (data) {
        return new SetRecoverValueByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    SetRecoverValueByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return SetRecoverValueByStampSheetRequest;
}());
exports.default = SetRecoverValueByStampSheetRequest;
//# sourceMappingURL=SetRecoverValueByStampSheetRequest.js.map