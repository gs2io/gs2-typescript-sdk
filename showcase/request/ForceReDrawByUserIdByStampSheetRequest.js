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
var ForceReDrawByUserIdByStampSheetRequest = /** @class */ (function () {
    function ForceReDrawByUserIdByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    ForceReDrawByUserIdByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ForceReDrawByUserIdByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ForceReDrawByUserIdByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ForceReDrawByUserIdByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ForceReDrawByUserIdByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ForceReDrawByUserIdByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ForceReDrawByUserIdByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    ForceReDrawByUserIdByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ForceReDrawByUserIdByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ForceReDrawByUserIdByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    ForceReDrawByUserIdByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    ForceReDrawByUserIdByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    ForceReDrawByUserIdByStampSheetRequest.fromDict = function (data) {
        return new ForceReDrawByUserIdByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    ForceReDrawByUserIdByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return ForceReDrawByUserIdByStampSheetRequest;
}());
exports.default = ForceReDrawByUserIdByStampSheetRequest;
//# sourceMappingURL=ForceReDrawByUserIdByStampSheetRequest.js.map