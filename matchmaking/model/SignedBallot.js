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
var SignedBallot = /** @class */ (function () {
    function SignedBallot() {
        this.body = null;
        this.signature = null;
    }
    SignedBallot.prototype.getBody = function () {
        return this.body;
    };
    SignedBallot.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    SignedBallot.prototype.withBody = function (body) {
        this.body = body;
        return this;
    };
    SignedBallot.prototype.getSignature = function () {
        return this.signature;
    };
    SignedBallot.prototype.setSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    SignedBallot.prototype.withSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    SignedBallot.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SignedBallot()
            .withBody(data["body"])
            .withSignature(data["signature"]);
    };
    SignedBallot.prototype.toDict = function () {
        return {
            "body": this.getBody(),
            "signature": this.getSignature(),
        };
    };
    return SignedBallot;
}());
export default SignedBallot;
//# sourceMappingURL=SignedBallot.js.map