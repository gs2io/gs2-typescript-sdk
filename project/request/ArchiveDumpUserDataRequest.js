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
var ArchiveDumpUserDataRequest = /** @class */ (function () {
    function ArchiveDumpUserDataRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.ownerId = null;
        this.transactionId = null;
    }
    ArchiveDumpUserDataRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ArchiveDumpUserDataRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ArchiveDumpUserDataRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ArchiveDumpUserDataRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ArchiveDumpUserDataRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ArchiveDumpUserDataRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ArchiveDumpUserDataRequest.prototype.getOwnerId = function () {
        return this.ownerId;
    };
    ArchiveDumpUserDataRequest.prototype.setOwnerId = function (ownerId) {
        this.ownerId = ownerId;
        return this;
    };
    ArchiveDumpUserDataRequest.prototype.withOwnerId = function (ownerId) {
        this.ownerId = ownerId;
        return this;
    };
    ArchiveDumpUserDataRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    ArchiveDumpUserDataRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ArchiveDumpUserDataRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ArchiveDumpUserDataRequest.fromDict = function (data) {
        return new ArchiveDumpUserDataRequest()
            .withOwnerId(data["ownerId"])
            .withTransactionId(data["transactionId"]);
    };
    ArchiveDumpUserDataRequest.prototype.toDict = function () {
        return {
            "ownerId": this.getOwnerId(),
            "transactionId": this.getTransactionId(),
        };
    };
    return ArchiveDumpUserDataRequest;
}());
exports.default = ArchiveDumpUserDataRequest;
//# sourceMappingURL=ArchiveDumpUserDataRequest.js.map