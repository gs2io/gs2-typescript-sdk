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
var RecoverStaminaByStampSheetRequest = /** @class */ (function () {
    function RecoverStaminaByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    RecoverStaminaByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RecoverStaminaByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RecoverStaminaByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RecoverStaminaByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RecoverStaminaByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RecoverStaminaByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RecoverStaminaByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    RecoverStaminaByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    RecoverStaminaByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    RecoverStaminaByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    RecoverStaminaByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RecoverStaminaByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    RecoverStaminaByStampSheetRequest.fromDict = function (data) {
        return new RecoverStaminaByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    RecoverStaminaByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return RecoverStaminaByStampSheetRequest;
}());
export default RecoverStaminaByStampSheetRequest;
//# sourceMappingURL=RecoverStaminaByStampSheetRequest.js.map