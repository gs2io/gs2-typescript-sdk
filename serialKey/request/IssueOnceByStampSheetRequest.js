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
var IssueOnceByStampSheetRequest = /** @class */ (function () {
    function IssueOnceByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    IssueOnceByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IssueOnceByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IssueOnceByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IssueOnceByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IssueOnceByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IssueOnceByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IssueOnceByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    IssueOnceByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    IssueOnceByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    IssueOnceByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    IssueOnceByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    IssueOnceByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    IssueOnceByStampSheetRequest.fromDict = function (data) {
        return new IssueOnceByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    IssueOnceByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return IssueOnceByStampSheetRequest;
}());
exports.default = IssueOnceByStampSheetRequest;
//# sourceMappingURL=IssueOnceByStampSheetRequest.js.map