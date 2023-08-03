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
var SetRarityParameterStatusByStampSheetRequest = /** @class */ (function () {
    function SetRarityParameterStatusByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    SetRarityParameterStatusByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetRarityParameterStatusByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetRarityParameterStatusByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetRarityParameterStatusByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetRarityParameterStatusByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetRarityParameterStatusByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetRarityParameterStatusByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    SetRarityParameterStatusByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    SetRarityParameterStatusByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    SetRarityParameterStatusByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    SetRarityParameterStatusByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetRarityParameterStatusByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetRarityParameterStatusByStampSheetRequest.fromDict = function (data) {
        return new SetRarityParameterStatusByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    SetRarityParameterStatusByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return SetRarityParameterStatusByStampSheetRequest;
}());
exports.default = SetRarityParameterStatusByStampSheetRequest;
//# sourceMappingURL=SetRarityParameterStatusByStampSheetRequest.js.map