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
var RaiseMaxValueByStampSheetRequest = /** @class */ (function () {
    function RaiseMaxValueByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    RaiseMaxValueByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RaiseMaxValueByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RaiseMaxValueByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RaiseMaxValueByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RaiseMaxValueByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RaiseMaxValueByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RaiseMaxValueByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    RaiseMaxValueByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    RaiseMaxValueByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    RaiseMaxValueByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    RaiseMaxValueByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RaiseMaxValueByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RaiseMaxValueByStampSheetRequest.fromDict = function (data) {
        return new RaiseMaxValueByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    RaiseMaxValueByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return RaiseMaxValueByStampSheetRequest;
}());
exports.default = RaiseMaxValueByStampSheetRequest;
//# sourceMappingURL=RaiseMaxValueByStampSheetRequest.js.map