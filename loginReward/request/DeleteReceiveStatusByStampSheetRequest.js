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
var DeleteReceiveStatusByStampSheetRequest = /** @class */ (function () {
    function DeleteReceiveStatusByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    DeleteReceiveStatusByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteReceiveStatusByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteReceiveStatusByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteReceiveStatusByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteReceiveStatusByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteReceiveStatusByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteReceiveStatusByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    DeleteReceiveStatusByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DeleteReceiveStatusByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DeleteReceiveStatusByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    DeleteReceiveStatusByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DeleteReceiveStatusByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DeleteReceiveStatusByStampSheetRequest.fromDict = function (data) {
        return new DeleteReceiveStatusByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    DeleteReceiveStatusByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return DeleteReceiveStatusByStampSheetRequest;
}());
exports.default = DeleteReceiveStatusByStampSheetRequest;
//# sourceMappingURL=DeleteReceiveStatusByStampSheetRequest.js.map