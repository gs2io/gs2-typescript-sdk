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
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.type = null;
        this.gcpCredentialJson = null;
        this.bigQueryDatasetName = null;
        this.logExpireDays = null;
        this.awsRegion = null;
        this.awsAccessKeyId = null;
        this.awsSecretAccessKey = null;
        this.firehoseStreamName = null;
        this.firehoseCompressData = null;
    }
    CreateNamespaceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateNamespaceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateNamespaceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateNamespaceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateNamespaceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateNamespaceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateNamespaceRequest.prototype.getName = function () {
        return this.name;
    };
    CreateNamespaceRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateNamespaceRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateNamespaceRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateNamespaceRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateNamespaceRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateNamespaceRequest.prototype.getType = function () {
        return this.type;
    };
    CreateNamespaceRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    CreateNamespaceRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    CreateNamespaceRequest.prototype.getGcpCredentialJson = function () {
        return this.gcpCredentialJson;
    };
    CreateNamespaceRequest.prototype.setGcpCredentialJson = function (gcpCredentialJson) {
        this.gcpCredentialJson = gcpCredentialJson;
        return this;
    };
    CreateNamespaceRequest.prototype.withGcpCredentialJson = function (gcpCredentialJson) {
        this.gcpCredentialJson = gcpCredentialJson;
        return this;
    };
    CreateNamespaceRequest.prototype.getBigQueryDatasetName = function () {
        return this.bigQueryDatasetName;
    };
    CreateNamespaceRequest.prototype.setBigQueryDatasetName = function (bigQueryDatasetName) {
        this.bigQueryDatasetName = bigQueryDatasetName;
        return this;
    };
    CreateNamespaceRequest.prototype.withBigQueryDatasetName = function (bigQueryDatasetName) {
        this.bigQueryDatasetName = bigQueryDatasetName;
        return this;
    };
    CreateNamespaceRequest.prototype.getLogExpireDays = function () {
        return this.logExpireDays;
    };
    CreateNamespaceRequest.prototype.setLogExpireDays = function (logExpireDays) {
        this.logExpireDays = logExpireDays;
        return this;
    };
    CreateNamespaceRequest.prototype.withLogExpireDays = function (logExpireDays) {
        this.logExpireDays = logExpireDays;
        return this;
    };
    CreateNamespaceRequest.prototype.getAwsRegion = function () {
        return this.awsRegion;
    };
    CreateNamespaceRequest.prototype.setAwsRegion = function (awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    };
    CreateNamespaceRequest.prototype.withAwsRegion = function (awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    };
    CreateNamespaceRequest.prototype.getAwsAccessKeyId = function () {
        return this.awsAccessKeyId;
    };
    CreateNamespaceRequest.prototype.setAwsAccessKeyId = function (awsAccessKeyId) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    };
    CreateNamespaceRequest.prototype.withAwsAccessKeyId = function (awsAccessKeyId) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    };
    CreateNamespaceRequest.prototype.getAwsSecretAccessKey = function () {
        return this.awsSecretAccessKey;
    };
    CreateNamespaceRequest.prototype.setAwsSecretAccessKey = function (awsSecretAccessKey) {
        this.awsSecretAccessKey = awsSecretAccessKey;
        return this;
    };
    CreateNamespaceRequest.prototype.withAwsSecretAccessKey = function (awsSecretAccessKey) {
        this.awsSecretAccessKey = awsSecretAccessKey;
        return this;
    };
    CreateNamespaceRequest.prototype.getFirehoseStreamName = function () {
        return this.firehoseStreamName;
    };
    CreateNamespaceRequest.prototype.setFirehoseStreamName = function (firehoseStreamName) {
        this.firehoseStreamName = firehoseStreamName;
        return this;
    };
    CreateNamespaceRequest.prototype.withFirehoseStreamName = function (firehoseStreamName) {
        this.firehoseStreamName = firehoseStreamName;
        return this;
    };
    CreateNamespaceRequest.prototype.getFirehoseCompressData = function () {
        return this.firehoseCompressData;
    };
    CreateNamespaceRequest.prototype.setFirehoseCompressData = function (firehoseCompressData) {
        this.firehoseCompressData = firehoseCompressData;
        return this;
    };
    CreateNamespaceRequest.prototype.withFirehoseCompressData = function (firehoseCompressData) {
        this.firehoseCompressData = firehoseCompressData;
        return this;
    };
    CreateNamespaceRequest.fromDict = function (data) {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withType(data["type"])
            .withGcpCredentialJson(data["gcpCredentialJson"])
            .withBigQueryDatasetName(data["bigQueryDatasetName"])
            .withLogExpireDays(data["logExpireDays"])
            .withAwsRegion(data["awsRegion"])
            .withAwsAccessKeyId(data["awsAccessKeyId"])
            .withAwsSecretAccessKey(data["awsSecretAccessKey"])
            .withFirehoseStreamName(data["firehoseStreamName"])
            .withFirehoseCompressData(data["firehoseCompressData"]);
    };
    CreateNamespaceRequest.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "type": this.getType(),
            "gcpCredentialJson": this.getGcpCredentialJson(),
            "bigQueryDatasetName": this.getBigQueryDatasetName(),
            "logExpireDays": this.getLogExpireDays(),
            "awsRegion": this.getAwsRegion(),
            "awsAccessKeyId": this.getAwsAccessKeyId(),
            "awsSecretAccessKey": this.getAwsSecretAccessKey(),
            "firehoseStreamName": this.getFirehoseStreamName(),
            "firehoseCompressData": this.getFirehoseCompressData(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map