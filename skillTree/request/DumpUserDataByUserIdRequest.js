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
var DumpUserDataByUserIdRequest = /** @class */ (function () {
    function DumpUserDataByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userId = null;
        this.duplicationAvoider = null;
    }
    DumpUserDataByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DumpUserDataByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DumpUserDataByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DumpUserDataByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DumpUserDataByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DumpUserDataByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DumpUserDataByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DumpUserDataByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DumpUserDataByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DumpUserDataByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DumpUserDataByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DumpUserDataByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DumpUserDataByUserIdRequest.fromDict = function (data) {
        return new DumpUserDataByUserIdRequest()
            .withUserId(data["userId"]);
    };
    DumpUserDataByUserIdRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
        };
    };
    return DumpUserDataByUserIdRequest;
}());
exports.default = DumpUserDataByUserIdRequest;
//# sourceMappingURL=DumpUserDataByUserIdRequest.js.map