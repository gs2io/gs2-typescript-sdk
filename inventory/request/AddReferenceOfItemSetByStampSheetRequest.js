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
var AddReferenceOfItemSetByStampSheetRequest = /** @class */ (function () {
    function AddReferenceOfItemSetByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    AddReferenceOfItemSetByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddReferenceOfItemSetByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddReferenceOfItemSetByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddReferenceOfItemSetByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddReferenceOfItemSetByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddReferenceOfItemSetByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddReferenceOfItemSetByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    AddReferenceOfItemSetByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AddReferenceOfItemSetByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AddReferenceOfItemSetByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    AddReferenceOfItemSetByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AddReferenceOfItemSetByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AddReferenceOfItemSetByStampSheetRequest.fromDict = function (data) {
        return new AddReferenceOfItemSetByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    AddReferenceOfItemSetByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return AddReferenceOfItemSetByStampSheetRequest;
}());
export default AddReferenceOfItemSetByStampSheetRequest;
//# sourceMappingURL=AddReferenceOfItemSetByStampSheetRequest.js.map