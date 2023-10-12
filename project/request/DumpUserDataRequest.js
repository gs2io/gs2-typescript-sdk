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
var DumpUserDataRequest = /** @class */ (function () {
    function DumpUserDataRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userId = null;
        this.duplicationAvoider = null;
    }
    DumpUserDataRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DumpUserDataRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DumpUserDataRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DumpUserDataRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DumpUserDataRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DumpUserDataRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DumpUserDataRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DumpUserDataRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DumpUserDataRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DumpUserDataRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DumpUserDataRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DumpUserDataRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DumpUserDataRequest.fromDict = function (data) {
        return new DumpUserDataRequest()
            .withUserId(data["userId"]);
    };
    DumpUserDataRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
        };
    };
    return DumpUserDataRequest;
}());
exports.default = DumpUserDataRequest;
//# sourceMappingURL=DumpUserDataRequest.js.map