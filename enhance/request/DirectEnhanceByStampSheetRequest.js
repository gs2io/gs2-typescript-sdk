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
var DirectEnhanceByStampSheetRequest = /** @class */ (function () {
    function DirectEnhanceByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    DirectEnhanceByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DirectEnhanceByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DirectEnhanceByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DirectEnhanceByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DirectEnhanceByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DirectEnhanceByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DirectEnhanceByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    DirectEnhanceByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DirectEnhanceByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DirectEnhanceByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    DirectEnhanceByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DirectEnhanceByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    DirectEnhanceByStampSheetRequest.fromDict = function (data) {
        return new DirectEnhanceByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    DirectEnhanceByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return DirectEnhanceByStampSheetRequest;
}());
export default DirectEnhanceByStampSheetRequest;
//# sourceMappingURL=DirectEnhanceByStampSheetRequest.js.map