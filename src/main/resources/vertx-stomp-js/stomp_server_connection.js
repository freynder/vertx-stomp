/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-stomp-js/stomp_server_connection */
var utils = require('vertx-js/util/utils');
var StompServerHandler = require('vertx-stomp-js/stomp_server_handler');
var Buffer = require('vertx-js/buffer');
var StompServer = require('vertx-stomp-js/stomp_server');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JStompServerConnection = io.vertx.ext.stomp.StompServerConnection;
var Frame = io.vertx.ext.stomp.Frame;

/**
 Class representing a connection between a STOMP client a the server. It keeps a references on the client socket,
 so let write to this socket.

 @class
*/
var StompServerConnection = function(j_val) {

  var j_stompServerConnection = j_val;
  var that = this;

  /**
   Writes the given buffer to the socket. This is a low level API that should be used carefully.

   @public
   @param buffer {Buffer} the buffer 
   @return {StompServerConnection} the current {@link StompServerConnection}
   */
  this.write = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object') {
      j_stompServerConnection["write(io.vertx.ext.stomp.Frame)"](__args[0] != null ? new Frame(new JsonObject(JSON.stringify(__args[0]))) : null);
      return that;
    }  else if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_stompServerConnection["write(io.vertx.core.buffer.Buffer)"](__args[0]._jdel);
      return that;
    } else utils.invalidArgs();
  };

  /**
   @return the STOMP server serving this connection.

   @public

   @return {StompServer}
   */
  this.server = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(j_stompServerConnection["server()"](), StompServer);
    } else utils.invalidArgs();
  };

  /**
   @return the STOMP server handler dealing with this connection

   @public

   @return {StompServerHandler}
   */
  this.handler = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(j_stompServerConnection["handler()"](), StompServerHandler);
    } else utils.invalidArgs();
  };

  /**
   @return the STOMP session id computed when the client has established the connection to the server

   @public

   @return {string}
   */
  this.session = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_stompServerConnection["session()"]();
    } else utils.invalidArgs();
  };

  /**
   Closes the connection with the client.

   @public

   */
  this.close = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_stompServerConnection["close()"]();
    } else utils.invalidArgs();
  };

  /**
   Sends a `PING` frame to the client. A `PING` frame is a frame containing only <code>EOL</code>.

   @public

   */
  this.ping = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_stompServerConnection["ping()"]();
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_stompServerConnection;
};

// We export the Constructor function
module.exports = StompServerConnection;