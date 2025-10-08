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
var BatchResultPayload = /** @class */ (function () {
    function BatchResultPayload() {
        this.requestId = null;
        this.statusCode = null;
        this.resultPayload = null;
    }
    BatchResultPayload.prototype.getRequestId = function () {
        return this.requestId;
    };
    BatchResultPayload.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchResultPayload.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchResultPayload.prototype.getStatusCode = function () {
        return this.statusCode;
    };
    BatchResultPayload.prototype.setStatusCode = function (statusCode) {
        this.statusCode = statusCode;
        return this;
    };
    BatchResultPayload.prototype.withStatusCode = function (statusCode) {
        this.statusCode = statusCode;
        return this;
    };
    BatchResultPayload.prototype.getResultPayload = function () {
        return this.resultPayload;
    };
    BatchResultPayload.prototype.setResultPayload = function (resultPayload) {
        this.resultPayload = resultPayload;
        return this;
    };
    BatchResultPayload.prototype.withResultPayload = function (resultPayload) {
        this.resultPayload = resultPayload;
        return this;
    };
    BatchResultPayload.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BatchResultPayload()
            .withRequestId(data["requestId"])
            .withStatusCode(data["statusCode"])
            .withResultPayload(data["resultPayload"]);
    };
    BatchResultPayload.prototype.toDict = function () {
        return {
            "requestId": this.getRequestId(),
            "statusCode": this.getStatusCode(),
            "resultPayload": this.getResultPayload(),
        };
    };
    return BatchResultPayload;
}());
exports.default = BatchResultPayload;
//# sourceMappingURL=BatchResultPayload.js.map