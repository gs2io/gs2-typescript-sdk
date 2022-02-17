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
var AddRankCapByStampSheetRequest = /** @class */ (function () {
    function AddRankCapByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    AddRankCapByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddRankCapByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddRankCapByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddRankCapByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddRankCapByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddRankCapByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddRankCapByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    AddRankCapByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AddRankCapByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AddRankCapByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    AddRankCapByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AddRankCapByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AddRankCapByStampSheetRequest.fromDict = function (data) {
        return new AddRankCapByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    AddRankCapByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return AddRankCapByStampSheetRequest;
}());
export default AddRankCapByStampSheetRequest;
//# sourceMappingURL=AddRankCapByStampSheetRequest.js.map