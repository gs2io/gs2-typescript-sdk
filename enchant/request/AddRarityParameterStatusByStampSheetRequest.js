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
var AddRarityParameterStatusByStampSheetRequest = /** @class */ (function () {
    function AddRarityParameterStatusByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    AddRarityParameterStatusByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddRarityParameterStatusByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddRarityParameterStatusByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddRarityParameterStatusByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddRarityParameterStatusByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddRarityParameterStatusByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddRarityParameterStatusByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    AddRarityParameterStatusByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AddRarityParameterStatusByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AddRarityParameterStatusByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    AddRarityParameterStatusByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AddRarityParameterStatusByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AddRarityParameterStatusByStampSheetRequest.fromDict = function (data) {
        return new AddRarityParameterStatusByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    AddRarityParameterStatusByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return AddRarityParameterStatusByStampSheetRequest;
}());
exports.default = AddRarityParameterStatusByStampSheetRequest;
//# sourceMappingURL=AddRarityParameterStatusByStampSheetRequest.js.map