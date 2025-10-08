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
var SignFreezeMasterDataTimestampResult = /** @class */ (function () {
    function SignFreezeMasterDataTimestampResult() {
        this.body = null;
        this.signature = null;
    }
    SignFreezeMasterDataTimestampResult.prototype.getBody = function () {
        return this.body;
    };
    SignFreezeMasterDataTimestampResult.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    SignFreezeMasterDataTimestampResult.prototype.withBody = function (body) {
        this.body = body;
        return this;
    };
    SignFreezeMasterDataTimestampResult.prototype.getSignature = function () {
        return this.signature;
    };
    SignFreezeMasterDataTimestampResult.prototype.setSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    SignFreezeMasterDataTimestampResult.prototype.withSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    SignFreezeMasterDataTimestampResult.fromDict = function (data) {
        return new SignFreezeMasterDataTimestampResult()
            .withBody(data["body"])
            .withSignature(data["signature"]);
    };
    SignFreezeMasterDataTimestampResult.prototype.toDict = function () {
        return {
            "body": this.getBody(),
            "signature": this.getSignature(),
        };
    };
    return SignFreezeMasterDataTimestampResult;
}());
exports.default = SignFreezeMasterDataTimestampResult;
//# sourceMappingURL=SignFreezeMasterDataTimestampResult.js.map