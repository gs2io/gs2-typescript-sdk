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
var CreateAwaitByStampSheetRequest = /** @class */ (function () {
    function CreateAwaitByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    CreateAwaitByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateAwaitByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateAwaitByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateAwaitByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateAwaitByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateAwaitByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateAwaitByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    CreateAwaitByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    CreateAwaitByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    CreateAwaitByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    CreateAwaitByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    CreateAwaitByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    CreateAwaitByStampSheetRequest.fromDict = function (data) {
        return new CreateAwaitByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    CreateAwaitByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return CreateAwaitByStampSheetRequest;
}());
export default CreateAwaitByStampSheetRequest;
//# sourceMappingURL=CreateAwaitByStampSheetRequest.js.map