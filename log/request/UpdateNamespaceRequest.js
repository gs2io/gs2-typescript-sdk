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
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.description = null;
        this.type = null;
        this.gcpCredentialJson = null;
        this.bigQueryDatasetName = null;
        this.logExpireDays = null;
        this.awsRegion = null;
        this.awsAccessKeyId = null;
        this.awsSecretAccessKey = null;
        this.firehoseStreamName = null;
    }
    UpdateNamespaceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateNamespaceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNamespaceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateNamespaceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNamespaceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNamespaceRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateNamespaceRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNamespaceRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNamespaceRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateNamespaceRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateNamespaceRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateNamespaceRequest.prototype.getType = function () {
        return this.type;
    };
    UpdateNamespaceRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    UpdateNamespaceRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    UpdateNamespaceRequest.prototype.getGcpCredentialJson = function () {
        return this.gcpCredentialJson;
    };
    UpdateNamespaceRequest.prototype.setGcpCredentialJson = function (gcpCredentialJson) {
        this.gcpCredentialJson = gcpCredentialJson;
        return this;
    };
    UpdateNamespaceRequest.prototype.withGcpCredentialJson = function (gcpCredentialJson) {
        this.gcpCredentialJson = gcpCredentialJson;
        return this;
    };
    UpdateNamespaceRequest.prototype.getBigQueryDatasetName = function () {
        return this.bigQueryDatasetName;
    };
    UpdateNamespaceRequest.prototype.setBigQueryDatasetName = function (bigQueryDatasetName) {
        this.bigQueryDatasetName = bigQueryDatasetName;
        return this;
    };
    UpdateNamespaceRequest.prototype.withBigQueryDatasetName = function (bigQueryDatasetName) {
        this.bigQueryDatasetName = bigQueryDatasetName;
        return this;
    };
    UpdateNamespaceRequest.prototype.getLogExpireDays = function () {
        return this.logExpireDays;
    };
    UpdateNamespaceRequest.prototype.setLogExpireDays = function (logExpireDays) {
        this.logExpireDays = logExpireDays;
        return this;
    };
    UpdateNamespaceRequest.prototype.withLogExpireDays = function (logExpireDays) {
        this.logExpireDays = logExpireDays;
        return this;
    };
    UpdateNamespaceRequest.prototype.getAwsRegion = function () {
        return this.awsRegion;
    };
    UpdateNamespaceRequest.prototype.setAwsRegion = function (awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    };
    UpdateNamespaceRequest.prototype.withAwsRegion = function (awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    };
    UpdateNamespaceRequest.prototype.getAwsAccessKeyId = function () {
        return this.awsAccessKeyId;
    };
    UpdateNamespaceRequest.prototype.setAwsAccessKeyId = function (awsAccessKeyId) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withAwsAccessKeyId = function (awsAccessKeyId) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    };
    UpdateNamespaceRequest.prototype.getAwsSecretAccessKey = function () {
        return this.awsSecretAccessKey;
    };
    UpdateNamespaceRequest.prototype.setAwsSecretAccessKey = function (awsSecretAccessKey) {
        this.awsSecretAccessKey = awsSecretAccessKey;
        return this;
    };
    UpdateNamespaceRequest.prototype.withAwsSecretAccessKey = function (awsSecretAccessKey) {
        this.awsSecretAccessKey = awsSecretAccessKey;
        return this;
    };
    UpdateNamespaceRequest.prototype.getFirehoseStreamName = function () {
        return this.firehoseStreamName;
    };
    UpdateNamespaceRequest.prototype.setFirehoseStreamName = function (firehoseStreamName) {
        this.firehoseStreamName = firehoseStreamName;
        return this;
    };
    UpdateNamespaceRequest.prototype.withFirehoseStreamName = function (firehoseStreamName) {
        this.firehoseStreamName = firehoseStreamName;
        return this;
    };
    UpdateNamespaceRequest.fromDict = function (data) {
        return new UpdateNamespaceRequest()
            .withNamespaceName(data["namespaceName"])
            .withDescription(data["description"])
            .withType(data["type"])
            .withGcpCredentialJson(data["gcpCredentialJson"])
            .withBigQueryDatasetName(data["bigQueryDatasetName"])
            .withLogExpireDays(data["logExpireDays"])
            .withAwsRegion(data["awsRegion"])
            .withAwsAccessKeyId(data["awsAccessKeyId"])
            .withAwsSecretAccessKey(data["awsSecretAccessKey"])
            .withFirehoseStreamName(data["firehoseStreamName"]);
    };
    UpdateNamespaceRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "type": this.getType(),
            "gcpCredentialJson": this.getGcpCredentialJson(),
            "bigQueryDatasetName": this.getBigQueryDatasetName(),
            "logExpireDays": this.getLogExpireDays(),
            "awsRegion": this.getAwsRegion(),
            "awsAccessKeyId": this.getAwsAccessKeyId(),
            "awsSecretAccessKey": this.getAwsSecretAccessKey(),
            "firehoseStreamName": this.getFirehoseStreamName(),
        };
    };
    return UpdateNamespaceRequest;
}());
exports.default = UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map