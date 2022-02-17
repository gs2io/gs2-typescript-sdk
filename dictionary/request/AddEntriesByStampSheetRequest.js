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
var AddEntriesByStampSheetRequest = /** @class */ (function () {
    function AddEntriesByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    AddEntriesByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddEntriesByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddEntriesByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddEntriesByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddEntriesByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddEntriesByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddEntriesByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    AddEntriesByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AddEntriesByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AddEntriesByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    AddEntriesByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AddEntriesByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AddEntriesByStampSheetRequest.fromDict = function (data) {
        return new AddEntriesByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    AddEntriesByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return AddEntriesByStampSheetRequest;
}());
export default AddEntriesByStampSheetRequest;
//# sourceMappingURL=AddEntriesByStampSheetRequest.js.map