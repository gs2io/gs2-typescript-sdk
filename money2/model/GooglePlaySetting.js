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
var GooglePlaySetting = /** @class */ (function () {
    function GooglePlaySetting() {
        this.packageName = null;
        this.publicKey = null;
        this.credentialsJSON = null;
    }
    GooglePlaySetting.prototype.getPackageName = function () {
        return this.packageName;
    };
    GooglePlaySetting.prototype.setPackageName = function (packageName) {
        this.packageName = packageName;
        return this;
    };
    GooglePlaySetting.prototype.withPackageName = function (packageName) {
        this.packageName = packageName;
        return this;
    };
    GooglePlaySetting.prototype.getPublicKey = function () {
        return this.publicKey;
    };
    GooglePlaySetting.prototype.setPublicKey = function (publicKey) {
        this.publicKey = publicKey;
        return this;
    };
    GooglePlaySetting.prototype.withPublicKey = function (publicKey) {
        this.publicKey = publicKey;
        return this;
    };
    GooglePlaySetting.prototype.getCredentialsJSON = function () {
        return this.credentialsJSON;
    };
    GooglePlaySetting.prototype.setCredentialsJSON = function (credentialsJSON) {
        this.credentialsJSON = credentialsJSON;
        return this;
    };
    GooglePlaySetting.prototype.withCredentialsJSON = function (credentialsJSON) {
        this.credentialsJSON = credentialsJSON;
        return this;
    };
    GooglePlaySetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GooglePlaySetting()
            .withPackageName(data["packageName"])
            .withPublicKey(data["publicKey"])
            .withCredentialsJSON(data["credentialsJSON"]);
    };
    GooglePlaySetting.prototype.toDict = function () {
        return {
            "packageName": this.getPackageName(),
            "publicKey": this.getPublicKey(),
            "credentialsJSON": this.getCredentialsJSON(),
        };
    };
    return GooglePlaySetting;
}());
exports.default = GooglePlaySetting;
//# sourceMappingURL=GooglePlaySetting.js.map