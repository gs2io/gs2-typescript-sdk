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
import * as Gs2Dictionary from '../model';
var GetEntryWithSignatureResult = /** @class */ (function () {
    function GetEntryWithSignatureResult() {
        this.item = null;
        this.body = null;
        this.signature = null;
    }
    GetEntryWithSignatureResult.prototype.getItem = function () {
        return this.item;
    };
    GetEntryWithSignatureResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetEntryWithSignatureResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetEntryWithSignatureResult.prototype.getBody = function () {
        return this.body;
    };
    GetEntryWithSignatureResult.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    GetEntryWithSignatureResult.prototype.withBody = function (body) {
        this.body = body;
        return this;
    };
    GetEntryWithSignatureResult.prototype.getSignature = function () {
        return this.signature;
    };
    GetEntryWithSignatureResult.prototype.setSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    GetEntryWithSignatureResult.prototype.withSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    GetEntryWithSignatureResult.fromDict = function (data) {
        return new GetEntryWithSignatureResult()
            .withItem(Gs2Dictionary.Entry.fromDict(data["item"]))
            .withBody(data["body"])
            .withSignature(data["signature"]);
    };
    GetEntryWithSignatureResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "body": this.getBody(),
            "signature": this.getSignature(),
        };
    };
    return GetEntryWithSignatureResult;
}());
export default GetEntryWithSignatureResult;
//# sourceMappingURL=GetEntryWithSignatureResult.js.map