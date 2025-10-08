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
var DeleteReferenceOfItemSetByStampSheetRequest = /** @class */ (function () {
    function DeleteReferenceOfItemSetByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    DeleteReferenceOfItemSetByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteReferenceOfItemSetByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteReferenceOfItemSetByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteReferenceOfItemSetByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteReferenceOfItemSetByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteReferenceOfItemSetByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteReferenceOfItemSetByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    DeleteReferenceOfItemSetByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DeleteReferenceOfItemSetByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DeleteReferenceOfItemSetByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    DeleteReferenceOfItemSetByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DeleteReferenceOfItemSetByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DeleteReferenceOfItemSetByStampSheetRequest.fromDict = function (data) {
        return new DeleteReferenceOfItemSetByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    DeleteReferenceOfItemSetByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return DeleteReferenceOfItemSetByStampSheetRequest;
}());
exports.default = DeleteReferenceOfItemSetByStampSheetRequest;
//# sourceMappingURL=DeleteReferenceOfItemSetByStampSheetRequest.js.map