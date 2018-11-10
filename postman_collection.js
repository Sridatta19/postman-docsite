window.collectionJSON = {
	"info": {
		"_postman_id": "f695cab7-6878-eb55-7943-ad88e1ccfd65",
		"name": "Postman Echo",
		"description": "Postman Echo is service you can use to test your REST clients and make sample API calls. It provides endpoints for `GET`, `POST`, `PUT`, various auth mechanisms and other utility endpoints.\n\nThe documentation for the endpoints as well as example responses can be found at [https://postman-echo.com](https://postman-echo.com/?source=echo-collection-app-onboarding)",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Auth: Digest",
			"item": [
				{
					"name": "DigestAuth Request",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/digest-auth",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"digest-auth"
							]
						},
						"description": "Performing a simple `GET` request to this endpoint returns status code `401 Unauthorized` with `WWW-Authenticate` header containing information to successfully authenticate subsequent requests.\nThe `WWW-Authenticate` header must be processed to extract `realm` and `nonce` values to hash subsequent requests.\n\nWhen this request is executed within Postman, the script attached with this request does the hard work of extracting realm and nonce from the header and set it as [global variables](https://www.getpostman.com/docs/environments#global-variables?source=echo-collection-app-onboarding) named `echo_digest_nonce` and `echo_digest_realm`.\nThese variables are re-used in subsequent request for seamless integration of the two requests."
					},
					"response": []
				},
				{
					"name": "DigestAuth Success",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Digest username=\"postman\", realm=\"Users\", nonce=\"ni1LiL0O37PRRhofWdCLmwFsnEtH1lew\", uri=\"/digest-auth\", response=\"254679099562cf07df9b6f5d8d15db44\", opaque=\"\""
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/digest-auth",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"digest-auth"
							]
						},
						"description": "This endpoint sends a hashed Digest Authorization header to gain access to a valid `200 Ok` response code. In Postman, it uses the stored [global variables](https://www.getpostman.com/docs/environments#gloval-variables?source=echo-collection-app-onboarding), `echo_digest_realm` and `echo_digest_nonce`, to generate the hashed authorisation header.\n\nWithin Postman, for this request to successfully authenticate, running the previous request \"DigestAuth Request\" stores the relevant information within the global variables."
					},
					"response": [
						{
							"name": "200",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Digest username=\"postman\", realm=\"Users\", nonce=\"ni1LiL0O37PRRhofWdCLmwFsnEtH1lew\", uri=\"/digest-auth\", response=\"254679099562cf07df9b6f5d8d15db44\", opaque=\"\""
									}
								],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "https://postman-echo.com/digest-auth",
									"protocol": "https",
									"host": [
										"postman-echo",
										"com"
									],
									"path": [
										"digest-auth"
									]
								},
								"description": "This endpoint sends a hashed Digest Authorization header to gain access to a valid `200 Ok` response code. In Postman, it uses the stored [global variables](https://www.getpostman.com/docs/environments#gloval-variables?source=echo-collection-app-onboarding), `echo_digest_realm` and `echo_digest_nonce`, to generate the hashed authorisation header.\n\nWithin Postman, for this request to successfully authenticate, running the previous request \"DigestAuth Request\" stores the relevant information within the global variables."
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "javascript",
							"header": [
								{
									"key": "Access-Control-Allow-Credentials",
									"value": "",
									"name": "Access-Control-Allow-Credentials",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Headers",
									"value": "",
									"name": "Access-Control-Allow-Headers",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Methods",
									"value": "",
									"name": "Access-Control-Allow-Methods",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "",
									"name": "Access-Control-Allow-Origin",
									"description": ""
								},
								{
									"key": "Connection",
									"value": "keep-alive",
									"name": "Connection",
									"description": ""
								},
								{
									"key": "Content-Encoding",
									"value": "gzip",
									"name": "Content-Encoding",
									"description": ""
								},
								{
									"key": "Content-Length",
									"value": "42",
									"name": "Content-Length",
									"description": ""
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8",
									"name": "Content-Type",
									"description": ""
								},
								{
									"key": "Date",
									"value": "Thu, 29 Oct 2015 06:17:51 GMT",
									"name": "Date",
									"description": ""
								},
								{
									"key": "Server",
									"value": "nginx/1.6.2",
									"name": "Server",
									"description": ""
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding",
									"name": "Vary",
									"description": ""
								},
								{
									"key": "X-Powered-By",
									"value": "Sails <sailsjs.org>",
									"name": "X-Powered-By",
									"description": ""
								}
							],
							"cookie": [],
							"body": "{\"authenticated\":true}"
						}
					]
				}
			],
			"description": "Digest authentication protects an endpoint with a username and password without actually transmitting the password over network.\nOne has to apply a hash function (like MD5, etc) to the username and password before sending them over the network.\n\n> Username: `postman`\n>\n> Password: `password`\n\nUnlike Basic-Auth, authentication happens using two consecutive requests where the first request returns `401 Unauthorised` along with `WWW-Authenticate` header containing information that needs to be used to authenticate subsequent calls.\n\nTo know more about digest authentication, refer to the [Digest Access Authentication](https://en.wikipedia.org/wiki/Digest_access_authentication) wikipedia article.\nThe article on [authentication helpers](https://www.getpostman.com/docs/helpers#digest-auth) elaborates how to use the same within the Postman app."
		},
		{
			"name": "Auth: Others",
			"item": [
				{
					"name": "Basic Auth",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Basic cG9zdG1hbjpwYXNzd29yZA=="
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/basic-auth",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"basic-auth"
							]
						},
						"description": "This endpoint simulates a **basic-auth** protected endpoint. \nThe endpoint accepts a default username and password and returns a status code of `200 ok` only if the same is provided. \nOtherwise it will return a status code `401 unauthorized`.\n\n> Username: `postman`\n> \n> Password: `password`\n\nTo use this endpoint, send a request with the header `Authorization: Basic cG9zdG1hbjpwYXNzd29yZA==`. \nThe cryptic latter half of the header value is a base64 encoded concatenation of the default username and password. \nUsing Postman, to send this request, you can simply fill in the username and password in the \"Authorization\" tab and Postman will do the rest for you.\n\nTo know more about basic authentication, refer to the [Basic Access Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) wikipedia article.\nThe article on [authentication helpers](https://www.getpostman.com/docs/helpers#basic-auth?source=echo-collection-app-onboarding) elaborates how to use the same within the Postman app."
					},
					"response": [
						{
							"name": "200",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"value": "Basic cG9zdG1hbjpwYXNzd29yZA=="
									}
								],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "https://postman-echo.com/basic-auth",
									"protocol": "https",
									"host": [
										"postman-echo",
										"com"
									],
									"path": [
										"basic-auth"
									]
								},
								"description": "This endpoint simulates a **basic-auth** protected endpoint. \nThe endpoint accepts a default username and password and returns a status code of `200 ok` only if the same is provided. \nOtherwise it will return a status code `401 unauthorized`.\n\n> Username: `postman`\n> \n> Password: `password`\n\nTo use this endpoint, send a request with the header `Authorization: Basic cG9zdG1hbjpwYXNzd29yZA==`. \nThe cryptic latter half of the header value is a base64 encoded concatenation of the default username and password. \nUsing Postman, to send this request, you can simply fill in the username and password in the \"Authorization\" tab and Postman will do the rest for you.\n\nTo know more about basic authentication, refer to the [Basic Access Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) wikipedia article.\nThe article on [authentication helpers](https://www.getpostman.com/docs/helpers#basic-auth?source=echo-collection-app-onboarding) elaborates how to use the same within the Postman app."
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "javascript",
							"header": [
								{
									"key": "Access-Control-Allow-Credentials",
									"value": "",
									"name": "Access-Control-Allow-Credentials",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Headers",
									"value": "",
									"name": "Access-Control-Allow-Headers",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Methods",
									"value": "",
									"name": "Access-Control-Allow-Methods",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "",
									"name": "Access-Control-Allow-Origin",
									"description": ""
								},
								{
									"key": "Connection",
									"value": "keep-alive",
									"name": "Connection",
									"description": ""
								},
								{
									"key": "Content-Encoding",
									"value": "gzip",
									"name": "Content-Encoding",
									"description": ""
								},
								{
									"key": "Content-Length",
									"value": "42",
									"name": "Content-Length",
									"description": ""
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8",
									"name": "Content-Type",
									"description": ""
								},
								{
									"key": "Date",
									"value": "Sat, 31 Oct 2015 06:38:25 GMT",
									"name": "Date",
									"description": ""
								},
								{
									"key": "Server",
									"value": "nginx/1.6.2",
									"name": "Server",
									"description": ""
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding",
									"name": "Vary",
									"description": ""
								},
								{
									"key": "X-Powered-By",
									"value": "Sails <sailsjs.org>",
									"name": "X-Powered-By",
									"description": ""
								}
							],
							"cookie": [],
							"body": "{\"authenticated\":true}"
						}
					]
				},
				{
					"name": "OAuth1.0 Verify Signature",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/oauth1",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"oauth1"
							]
						},
						"description": "OAuth1.0a is a specification that defines a protocol that can be used by one\nservice to access \"protected\" resources (endpoints) on another service. A\nmajor part of OAuth1.0 is HTTP Request Signing. This endpoint allows you to \ncheck whether the request calculation works properly in the client. \n\nThe endpoint supports the HTTP ``Authorization`` header. In case the signature\nverification fails, the endpoint provides the four debug values,\n\n* ``base_uri``\n* ``normalized_param_string``\n* ``base_string``\n* ``signing_key``\n\nFor more details about these parameters, check the [OAuth1.0a Specification](http://oauth.net/core/1.0a/)\n\nIn order to use this endpoint, you can set the following values:\n\n> Consumer Key: ``RKCGzna7bv9YD57c``\n>\n> Consumer Secret: ``D+EdQ-gs$-%@2Nu7``\n\nIf you are using Postman, also check the \"Add params to header\" and \n\"Auto add parameters\" boxes."
					},
					"response": [
						{
							"name": "200",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"name": "Authorization",
										"value": "OAuth oauth_consumer_key=\"RKCGzna7bv9YD57c\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1472121261\",oauth_nonce=\"ki0RQW\",oauth_version=\"1.0\",oauth_signature=\"s0rK92Myxx7ceUBVzlMaxiiXU00%3D\""
									}
								],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "https://echo.getpostman.com/oauth1",
									"protocol": "https",
									"host": [
										"echo",
										"getpostman",
										"com"
									],
									"path": [
										"oauth1"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "javascript",
							"header": [
								{
									"key": "Access-Control-Allow-Credentials",
									"value": "",
									"name": "Access-Control-Allow-Credentials",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Headers",
									"value": "",
									"name": "Access-Control-Allow-Headers",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Methods",
									"value": "",
									"name": "Access-Control-Allow-Methods",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "",
									"name": "Access-Control-Allow-Origin",
									"description": ""
								},
								{
									"key": "Access-Control-Expose-Headers",
									"value": "",
									"name": "Access-Control-Expose-Headers",
									"description": ""
								},
								{
									"key": "Connection",
									"value": "keep-alive",
									"name": "Connection",
									"description": ""
								},
								{
									"key": "Content-Encoding",
									"value": "gzip",
									"name": "Content-Encoding",
									"description": ""
								},
								{
									"key": "Content-Length",
									"value": "95",
									"name": "Content-Length",
									"description": ""
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8",
									"name": "Content-Type",
									"description": ""
								},
								{
									"key": "Date",
									"value": "Thu, 25 Aug 2016 10:34:23 GMT",
									"name": "Date",
									"description": ""
								},
								{
									"key": "ETag",
									"value": "W/\"4e-Cq3UhvpVSyl6R6204lPVIA\"",
									"name": "ETag",
									"description": ""
								},
								{
									"key": "Server",
									"value": "nginx/1.8.1",
									"name": "Server",
									"description": ""
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding",
									"name": "Vary",
									"description": ""
								}
							],
							"cookie": [],
							"body": "{\"status\":\"pass\",\"message\":\"OAuth-1.0a signature verification was successful\"}"
						},
						{
							"name": "401",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"type": "text",
										"name": "Authorization",
										"value": "OAuth oauth_consumer_key=\"RKCGzna7bv9YD57c_wrong\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1472121295\",oauth_nonce=\"8LTsU2\",oauth_version=\"1.0\",oauth_signature=\"tSUexpY%2B7EhSY7cFXiFN5EMx2zw%3D\""
									}
								],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "https://echo.getpostman.com/oauth1",
									"protocol": "https",
									"host": [
										"echo",
										"getpostman",
										"com"
									],
									"path": [
										"oauth1"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "javascript",
							"header": [
								{
									"key": "Access-Control-Allow-Credentials",
									"value": "",
									"name": "Access-Control-Allow-Credentials",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Headers",
									"value": "",
									"name": "Access-Control-Allow-Headers",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Methods",
									"value": "",
									"name": "Access-Control-Allow-Methods",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "",
									"name": "Access-Control-Allow-Origin",
									"description": ""
								},
								{
									"key": "Access-Control-Expose-Headers",
									"value": "",
									"name": "Access-Control-Expose-Headers",
									"description": ""
								},
								{
									"key": "Connection",
									"value": "keep-alive",
									"name": "Connection",
									"description": ""
								},
								{
									"key": "Content-Length",
									"value": "536",
									"name": "Content-Length",
									"description": ""
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8",
									"name": "Content-Type",
									"description": ""
								},
								{
									"key": "Date",
									"value": "Thu, 25 Aug 2016 10:34:55 GMT",
									"name": "Date",
									"description": ""
								},
								{
									"key": "ETag",
									"value": "W/\"218-SGnurnTsu5qV5cCYWxsJlg\"",
									"name": "ETag",
									"description": ""
								},
								{
									"key": "Server",
									"value": "nginx/1.8.1",
									"name": "Server",
									"description": ""
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding",
									"name": "Vary",
									"description": ""
								}
							],
							"cookie": [],
							"body": "{\"status\":\"fail\",\"message\":\"HMAC-SHA1 verification failed\",\"base_uri\":\"https://echo.getpostman.com/oauth1\",\"normalized_param_string\":\"oauth_consumer_key=RKCGzna7bv9YD57c_wrong&oauth_nonce=8LTsU2&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1472121295&oauth_version=1.0\",\"base_string\":\"GET&https%3A%2F%2Fecho.getpostman.com%2Foauth1&oauth_consumer_key%3DRKCGzna7bv9YD57c_wrong%26oauth_nonce%3D8LTsU2%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D1472121295%26oauth_version%3D1.0\",\"signing_key\":\"D%2BEdQ-gs%24-%25%402Nu7&\"}"
						}
					]
				},
				{
					"name": "Hawk Auth",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/auth/hawk",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"auth",
								"hawk"
							]
						},
						"description": "This endpoint is a Hawk Authentication protected endpoint. [Hawk authentication](https://github.com/hueniverse/hawk) is a widely used protocol for protecting API endpoints. One of Hawk's main goals is to enable HTTP authentication for services that do not use TLS (although it can be used in conjunction with TLS as well).\n\nIn order to use this endpoint, select the \"Hawk Auth\" helper inside Postman, and set the following values:\n\nHawk Auth ID: `dh37fgj492je`\n\nHawk Auth Key: `werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn`\n\nAlgorithm: `sha256`\n\nThe rest of the values are optional, and can be left blank. Hitting send should give you a response with a status code of 200 OK."
					},
					"response": [
						{
							"name": "Success",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Authorization",
										"type": "text",
										"name": "Authorization",
										"value": "Hawk id=\"dh37fgj492je\", ts=\"1459422734\", nonce=\"XiwiCU\", mac=\"KzMHk67BYCC9zZqRy5hRdWFEFLHX5bNlRWGdmOAWKp0=\""
									}
								],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "https://echo.getpostman.com/auth/hawk",
									"protocol": "https",
									"host": [
										"echo",
										"getpostman",
										"com"
									],
									"path": [
										"auth",
										"hawk"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "javascript",
							"header": [
								{
									"key": "Access-Control-Allow-Credentials",
									"value": "",
									"name": "Access-Control-Allow-Credentials",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Headers",
									"value": "",
									"name": "Access-Control-Allow-Headers",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Methods",
									"value": "",
									"name": "Access-Control-Allow-Methods",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "",
									"name": "Access-Control-Allow-Origin",
									"description": ""
								},
								{
									"key": "Connection",
									"value": "keep-alive",
									"name": "Connection",
									"description": ""
								},
								{
									"key": "Content-Encoding",
									"value": "gzip",
									"name": "Content-Encoding",
									"description": ""
								},
								{
									"key": "Content-Type",
									"value": "application/json",
									"name": "Content-Type",
									"description": ""
								},
								{
									"key": "Date",
									"value": "Thu, 31 Mar 2016 11:12:16 GMT",
									"name": "Date",
									"description": ""
								},
								{
									"key": "Server",
									"value": "nginx/1.6.2",
									"name": "Server",
									"description": ""
								},
								{
									"key": "Server-Authorization",
									"value": "Hawk mac=\"vRrUzDdcHu2NaNts/r4zg2xmXMdX8wPiTGTM398BDRg=\", hash=\"qmtflETMybaZiOQ2dLT17yiRunFT5OCIxZRZ0boQaiE=\"",
									"name": "Server-Authorization",
									"description": ""
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding",
									"name": "Vary",
									"description": ""
								},
								{
									"key": "X-Powered-By",
									"value": "Sails <sailsjs.org>",
									"name": "X-Powered-By",
									"description": ""
								},
								{
									"key": "transfer-encoding",
									"value": "chunked",
									"name": "transfer-encoding",
									"description": ""
								}
							],
							"cookie": [
								{
									"expires": "Fri Apr 15 2016 16:24:28 GMT+0530 (IST)",
									"hostOnly": false,
									"httpOnly": false,
									"domain": ".getpostman.com",
									"path": "/",
									"secure": false,
									"session": false,
									"value": "yes",
									"key": "getpostmanlogin"
								},
								{
									"expires": "Fri Apr 15 2016 16:24:28 GMT+0530 (IST)",
									"hostOnly": false,
									"httpOnly": false,
									"domain": ".getpostman.com",
									"path": "/",
									"secure": false,
									"session": false,
									"value": "9f887f3b7f14b8c29ac4dc4109381b0b89a76e785c7b34251d6c8025b41b24013d2aa49f40e2deac19cbf0594dd984169455534d91ff98d4d1868d67ac857017629f137926e3a04a616bb83a2fb5ab9e6cbea9579ed5d5c1155d47545d72aad5be99f4abd0a7130805b3807d70cd507171dbe9d950d8e35a853f9ec075f5a767c95df4d57f7d521b66605b3bda3801700e26e651d1129c798b729ee3b91702d43ae64ab226c3f426893753def772c15442a7552dc84a3c773d6099a50b0a6af940b64c8176fedfcecd5fc31ccfc3bbc0124bfdaa0d62e4252d4aafb46a3c10963d12391e1fa97a1c0f19a636f57a3ac8cc35567d1cb6cb53b77f8adde3f6754a765596d7d00bdeb9acb5cc8d115e7c3f50ec3228e34d3e6c7464e9039b01868e03d10e9f87772397602453e9e91205de7b86021fad06eb26e69298e99ff1597a670faeb310f8c092041d544851de84f2bee89a92123da6eea286210524035c85361e2af42166a6",
									"key": "postman.sid"
								},
								{
									"expires": "Invalid Date",
									"hostOnly": true,
									"httpOnly": true,
									"domain": "echo.getpostman.com",
									"path": "/",
									"secure": false,
									"session": true,
									"value": "s%3AryJV7v-PE4PuTjBK6nH5XOynQ4atuATV.n17KcaLhVmV8TBHNLwdwXgGR7lmqs3i478WPlTbRgZ4",
									"key": "sails.sid"
								}
							],
							"body": "{\"status\":\"pass\",\"message\":\"Hawk Authentication successful\"}"
						}
					]
				}
			]
		},
		{
			"name": "Cookies",
			"item": [
				{
					"name": "Set Cookies",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/cookies/set?foo1=bar1&foo2=bar2",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"cookies",
								"set"
							],
							"query": [
								{
									"key": "foo1",
									"value": "bar1"
								},
								{
									"key": "foo2",
									"value": "bar2"
								}
							]
						},
						"description": "The cookie setter endpoint accepts a list of cookies and their values as part of URL parameters of a `GET` request. These cookies are saved and can be subsequently retrieved or deleted. The response of this request returns a JSON with all cookies listed.\n\nTo set your own set of cookies, simply replace the URL parameters \"foo1=bar1&foo2=bar2\" with your own set of key-value pairs."
					},
					"response": [
						{
							"name": "Cookies",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "https://postman-echo.com/cookies/set?foo1=bar1&foo2=bar2",
									"protocol": "https",
									"host": [
										"postman-echo",
										"com"
									],
									"path": [
										"cookies",
										"set"
									],
									"query": [
										{
											"key": "foo1",
											"value": "bar1"
										},
										{
											"key": "foo2",
											"value": "bar2"
										}
									]
								},
								"description": "The cookie setter endpoint accepts a list of cookies and their values as part of URL parameters of a `GET` request. These cookies are saved and can be subsequently retrieved or deleted. The response of this request returns a JSON with all cookies listed.\n\nTo set your own set of cookies, simply replace the URL parameters \"foo1=bar1&foo2=bar2\" with your own set of key-value pairs."
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "javascript",
							"header": [
								{
									"key": "Access-Control-Allow-Credentials",
									"value": "",
									"name": "Access-Control-Allow-Credentials",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Headers",
									"value": "",
									"name": "Access-Control-Allow-Headers",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Methods",
									"value": "",
									"name": "Access-Control-Allow-Methods",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "",
									"name": "Access-Control-Allow-Origin",
									"description": ""
								},
								{
									"key": "Connection",
									"value": "keep-alive",
									"name": "Connection",
									"description": ""
								},
								{
									"key": "Content-Encoding",
									"value": "gzip",
									"name": "Content-Encoding",
									"description": ""
								},
								{
									"key": "Content-Length",
									"value": "51",
									"name": "Content-Length",
									"description": ""
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8",
									"name": "Content-Type",
									"description": ""
								},
								{
									"key": "Date",
									"value": "Thu, 29 Oct 2015 06:15:28 GMT",
									"name": "Date",
									"description": ""
								},
								{
									"key": "Server",
									"value": "nginx/1.6.2",
									"name": "Server",
									"description": ""
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding",
									"name": "Vary",
									"description": ""
								},
								{
									"key": "X-Powered-By",
									"value": "Sails <sailsjs.org>",
									"name": "X-Powered-By",
									"description": ""
								}
							],
							"cookie": [],
							"body": "{\"cookies\":{\"foo1\":\"bar\",\"foo2\":\"bar\"}}"
						}
					]
				},
				{
					"name": "Get Cookies",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/cookies",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"cookies"
							]
						},
						"description": "Use this endpoint to get a list of all cookies that are stored with respect to this domain. Whatever key-value pairs that has been previously set by calling the \"Set Cookies\" endpoint, will be returned as response JSON."
					},
					"response": [
						{
							"name": "Cookies",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "https://postman-echo.com/cookies",
									"protocol": "https",
									"host": [
										"postman-echo",
										"com"
									],
									"path": [
										"cookies"
									]
								},
								"description": "Use this endpoint to get a list of all cookies that are stored with respect to this domain. Whatever key-value pairs that has been previously set by calling the \"Set Cookies\" endpoint, will be returned as response JSON."
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "javascript",
							"header": [
								{
									"key": "Access-Control-Allow-Credentials",
									"value": "",
									"name": "Access-Control-Allow-Credentials",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Headers",
									"value": "",
									"name": "Access-Control-Allow-Headers",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Methods",
									"value": "",
									"name": "Access-Control-Allow-Methods",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "",
									"name": "Access-Control-Allow-Origin",
									"description": ""
								},
								{
									"key": "Connection",
									"value": "keep-alive",
									"name": "Connection",
									"description": ""
								},
								{
									"key": "Content-Encoding",
									"value": "gzip",
									"name": "Content-Encoding",
									"description": ""
								},
								{
									"key": "Content-Length",
									"value": "46",
									"name": "Content-Length",
									"description": ""
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8",
									"name": "Content-Type",
									"description": ""
								},
								{
									"key": "Date",
									"value": "Thu, 29 Oct 2015 06:16:29 GMT",
									"name": "Date",
									"description": ""
								},
								{
									"key": "Server",
									"value": "nginx/1.6.2",
									"name": "Server",
									"description": ""
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding",
									"name": "Vary",
									"description": ""
								},
								{
									"key": "X-Powered-By",
									"value": "Sails <sailsjs.org>",
									"name": "X-Powered-By",
									"description": ""
								}
							],
							"cookie": [],
							"body": "{\"cookies\":{\"foo2\":\"bar\"}}"
						}
					]
				},
				{
					"name": "Delete Cookies",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/cookies/delete?foo1&foo2",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"cookies",
								"delete"
							],
							"query": [
								{
									"key": "foo1",
									"value": null
								},
								{
									"key": "foo2",
									"value": null
								}
							]
						},
						"description": "One or more cookies that has been set for this domain can be deleted by providing the cookie names as part of the URL parameter. The response of this request is a JSON containing the list of currently set cookies."
					},
					"response": [
						{
							"name": "Cookies Response",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "https://postman-echo.com/cookies/delete?foo1&foo2",
									"protocol": "https",
									"host": [
										"postman-echo",
										"com"
									],
									"path": [
										"cookies",
										"delete"
									],
									"query": [
										{
											"key": "foo1",
											"value": null
										},
										{
											"key": "foo2",
											"value": null
										}
									]
								},
								"description": "One or more cookies that has been set for this domain can be deleted by providing the cookie names as part of the URL parameter. The response of this request is a JSON containing the list of currently set cookies."
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "javascript",
							"header": [
								{
									"key": "Access-Control-Allow-Credentials",
									"value": "",
									"name": "Access-Control-Allow-Credentials",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Headers",
									"value": "",
									"name": "Access-Control-Allow-Headers",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Methods",
									"value": "",
									"name": "Access-Control-Allow-Methods",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "",
									"name": "Access-Control-Allow-Origin",
									"description": ""
								},
								{
									"key": "Connection",
									"value": "keep-alive",
									"name": "Connection",
									"description": ""
								},
								{
									"key": "Content-Encoding",
									"value": "gzip",
									"name": "Content-Encoding",
									"description": ""
								},
								{
									"key": "Content-Length",
									"value": "46",
									"name": "Content-Length",
									"description": ""
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8",
									"name": "Content-Type",
									"description": ""
								},
								{
									"key": "Date",
									"value": "Thu, 29 Oct 2015 06:16:00 GMT",
									"name": "Date",
									"description": ""
								},
								{
									"key": "Server",
									"value": "nginx/1.6.2",
									"name": "Server",
									"description": ""
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding",
									"name": "Vary",
									"description": ""
								},
								{
									"key": "X-Powered-By",
									"value": "Sails <sailsjs.org>",
									"name": "X-Powered-By",
									"description": ""
								}
							],
							"cookie": [],
							"body": "{\"cookies\":{\"foo2\":\"bar\"}}"
						}
					]
				}
			],
			"description": "The cookie related endpoints allow one to get, set and delete simple cookies.\n\nCookies are small snippets of information that is stored in the browser and sent back to the server with every subsequent requests in order to store useful information between requests.\nIf you want to know more about cookies, read the [HTTP Cookie](https://en.wikipedia.org/wiki/HTTP_cookie) article on wikipedia."
		},
		{
			"name": "Headers",
			"item": [
				{
					"name": "Request Headers",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "my-sample-header",
								"value": "Lorem ipsum dolor sit amet"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/headers",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"headers"
							]
						},
						"description": "A `GET` request to this endpoint returns the list of all request headers as part of the response JSON.\nIn Postman, sending your own set of headers through the [Headers tab](https://www.getpostman.com/docs/requests#headers?source=echo-collection-app-onboarding) will reveal the headers as part of the response."
					},
					"response": [
						{
							"name": "my-sample-header",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "my-sample-header",
										"value": "Lorem ipsum dolor sit amet",
										"enabled": true
									}
								],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "https://echo.getpostman.com/headers",
									"protocol": "https",
									"host": [
										"echo",
										"getpostman",
										"com"
									],
									"path": [
										"headers"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "javascript",
							"header": [
								{
									"key": "Access-Control-Allow-Credentials",
									"value": "",
									"name": "Access-Control-Allow-Credentials",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Headers",
									"value": "",
									"name": "Access-Control-Allow-Headers",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Methods",
									"value": "",
									"name": "Access-Control-Allow-Methods",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "",
									"name": "Access-Control-Allow-Origin",
									"description": ""
								},
								{
									"key": "Connection",
									"value": "keep-alive",
									"name": "Connection",
									"description": ""
								},
								{
									"key": "Content-Encoding",
									"value": "gzip",
									"name": "Content-Encoding",
									"description": ""
								},
								{
									"key": "Content-Length",
									"value": "342",
									"name": "Content-Length",
									"description": ""
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8",
									"name": "Content-Type",
									"description": ""
								},
								{
									"key": "Date",
									"value": "Thu, 31 Mar 2016 11:14:00 GMT",
									"name": "Date",
									"description": ""
								},
								{
									"key": "Server",
									"value": "nginx/1.6.2",
									"name": "Server",
									"description": ""
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding",
									"name": "Vary",
									"description": ""
								},
								{
									"key": "X-Powered-By",
									"value": "Sails <sailsjs.org>",
									"name": "X-Powered-By",
									"description": ""
								}
							],
							"cookie": [
								{
									"expires": "Invalid Date",
									"hostOnly": true,
									"httpOnly": true,
									"domain": "echo.getpostman.com",
									"path": "/",
									"secure": false,
									"session": true,
									"value": "s%3A9stja5zKmIILxq9Jvtha7Lp9LIz1VIdK.Vp8MHC%2BEUJe4ICZPXn2JAoXaV2bTgtoQd%2B3XJLNr51Y",
									"key": "sails.sid"
								}
							],
							"body": "{\"headers\":{\"host\":\"echo.getpostman.com\",\"accept\":\"*/*\",\"accept-encoding\":\"gzip, deflate, sdch\",\"accept-language\":\"en-US,en;q=0.8\",\"cache-control\":\"no-cache\",\"my-sample-header\":\"Lorem ipsum dolor sit amet\",\"postman-token\":\"3c8ea80b-f599-fba6-e0b4-a0910440e7b6\",\"user-agent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36\",\"x-forwarded-port\":\"443\",\"x-forwarded-proto\":\"https\"}}"
						}
					]
				},
				{
					"name": "Response Headers",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/response-headers?Content-Type=text/html&test=response_headers",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"response-headers"
							],
							"query": [
								{
									"key": "Content-Type",
									"value": "text/html"
								},
								{
									"key": "test",
									"value": "response_headers"
								}
							]
						},
						"description": "This endpoint causes the server to send custom set of response headers. Providing header values as part of the URL parameters of a `GET` request to this endpoint returns the same as part of response header.\n\nTo send your own set of headers, simply add or replace the the URL parameters with your own set."
					},
					"response": [
						{
							"name": "Response headers",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "https://echo.getpostman.com/response-headers?Content-Type=text/html&test=response_headers",
									"protocol": "https",
									"host": [
										"echo",
										"getpostman",
										"com"
									],
									"path": [
										"response-headers"
									],
									"query": [
										{
											"key": "Content-Type",
											"value": "text/html"
										},
										{
											"key": "test",
											"value": "response_headers"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "html",
							"header": [
								{
									"key": "Access-Control-Allow-Credentials",
									"value": "",
									"name": "Access-Control-Allow-Credentials",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Headers",
									"value": "",
									"name": "Access-Control-Allow-Headers",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Methods",
									"value": "",
									"name": "Access-Control-Allow-Methods",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "",
									"name": "Access-Control-Allow-Origin",
									"description": ""
								},
								{
									"key": "Connection",
									"value": "keep-alive",
									"name": "Connection",
									"description": ""
								},
								{
									"key": "Content-Encoding",
									"value": "gzip",
									"name": "Content-Encoding",
									"description": ""
								},
								{
									"key": "Content-Length",
									"value": "71",
									"name": "Content-Length",
									"description": ""
								},
								{
									"key": "Content-Type",
									"value": "text/html; charset=utf-8",
									"name": "Content-Type",
									"description": ""
								},
								{
									"key": "Date",
									"value": "Thu, 31 Mar 2016 11:14:18 GMT",
									"name": "Date",
									"description": ""
								},
								{
									"key": "Server",
									"value": "nginx/1.6.2",
									"name": "Server",
									"description": ""
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding",
									"name": "Vary",
									"description": ""
								},
								{
									"key": "X-Powered-By",
									"value": "Sails <sailsjs.org>",
									"name": "X-Powered-By",
									"description": ""
								},
								{
									"key": "test",
									"value": "response_headers",
									"name": "test",
									"description": ""
								}
							],
							"cookie": [
								{
									"expires": "Invalid Date",
									"hostOnly": true,
									"httpOnly": true,
									"domain": "echo.getpostman.com",
									"path": "/",
									"secure": false,
									"session": true,
									"value": "s%3A9stja5zKmIILxq9Jvtha7Lp9LIz1VIdK.Vp8MHC%2BEUJe4ICZPXn2JAoXaV2bTgtoQd%2B3XJLNr51Y",
									"key": "sails.sid"
								}
							],
							"body": "{\"Content-Type\":\"text/html\",\"test\":\"response_headers\"}"
						}
					]
				}
			],
			"description": "The following set of endpoints allow one to see the headers being sent as part of a request and to get a custom set of headers as part of response.\n\nHTTP header fields provide required information about the request or response, or about the object sent in the message body. Both request headers and response headers can be controlled using these endpoints."
		},
		{
			"name": "Request Methods",
			"item": [
				{
					"name": "GET Request",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/get?test=123",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"get"
							],
							"query": [
								{
									"key": "test",
									"value": "123"
								}
							]
						},
						"description": "The HTTP `GET` request method is meant to retrieve data from a server. The data\nis identified by a unique URI (Uniform Resource Identifier). \n\nA `GET` request can pass parameters to the server using \"Query String \nParameters\". For example, in the following request,\n\n> http://example.com/hi/there?hand=wave\n\nThe parameter \"hand\" has the value \"wave\".\n\nThis endpoint echoes the HTTP headers, request parameters and the complete\nURI requested."
					},
					"response": []
				},
				{
					"name": "POST Raw Text",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "text/plain"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium. Praesent neque quam, tincidunt nec leo eget, rutrum vehicula magna.\nMaecenas consequat elementum elit, id semper sem tristique et. Integer pulvinar enim quis consectetur interdum volutpat."
						},
						"url": {
							"raw": "https://postman-echo.com/post",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"post"
							]
						},
						"description": "The HTTP `POST` request method is meant to transfer data to a server \n(and elicit a response). What data is returned depends on the implementation\nof the server.\n\nA `POST` request can pass parameters to the server using \"Query String \nParameters\", as well as the Request Body. For example, in the following request,\n\n> POST /hi/there?hand=wave\n>\n> <request-body>\n\nThe parameter \"hand\" has the value \"wave\". The request body can be in multiple\nformats. These formats are defined by the MIME type of the request. The MIME \nType can be set using the ``Content-Type`` HTTP header. The most commonly used \nMIME types are:\n\n* `multipart/form-data`\n* `application/x-www-form-urlencoded`\n* `application/json`\n\nThis endpoint echoes the HTTP headers, request parameters, the contents of\nthe request body and the complete URI requested."
					},
					"response": []
				},
				{
					"name": "POST Form Data",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "strange",
									"value": "boom",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "https://postman-echo.com/post",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"post"
							]
						},
						"description": "The HTTP `POST` request method is meant to transfer data to a server \n(and elicit a response). What data is returned depends on the implementation\nof the server.\n\nA `POST` request can pass parameters to the server using \"Query String \nParameters\", as well as the Request Body. For example, in the following request,\n\n> POST /hi/there?hand=wave\n>\n> <request-body>\n\nThe parameter \"hand\" has the value \"wave\". The request body can be in multiple\nformats. These formats are defined by the MIME type of the request. The MIME \nType can be set using the ``Content-Type`` HTTP header. The most commonly used \nMIME types are:\n\n* `multipart/form-data`\n* `application/x-www-form-urlencoded`\n* `application/json`\n\nThis endpoint echoes the HTTP headers, request parameters, the contents of\nthe request body and the complete URI requested when data is sent as a form parameter."
					},
					"response": []
				},
				{
					"name": "PUT Request",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "Etiam mi lacus, cursus vitae felis et, blandit pellentesque neque. Vestibulum eget nisi a tortor commodo dignissim.\nQuisque ipsum ligula, faucibus a felis a, commodo elementum nisl. Mauris vulputate sapien et tincidunt viverra. Donec vitae velit nec metus."
						},
						"url": {
							"raw": "https://postman-echo.com/put",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"put"
							]
						},
						"description": "The HTTP `PUT` request method is similar to HTTP `POST`. It too is meant to \ntransfer data to a server (and elicit a response). What data is returned depends on the implementation\nof the server.\n\nA `PUT` request can pass parameters to the server using \"Query String \nParameters\", as well as the Request Body. For example, in the following \nraw HTTP request,\n\n> PUT /hi/there?hand=wave\n>\n> <request-body>\n\n\n"
					},
					"response": []
				},
				{
					"name": "PATCH Request",
					"request": {
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "Curabitur auctor, elit nec pulvinar porttitor, ex augue condimentum enim, eget suscipit urna felis quis neque.\nSuspendisse sit amet luctus massa, nec venenatis mi. Suspendisse tincidunt massa at nibh efficitur fringilla. Nam quis congue mi. Etiam volutpat."
						},
						"url": {
							"raw": "https://postman-echo.com/patch",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"patch"
							]
						},
						"description": "The HTTP `PATCH` method is used to update resources on a server. The exact\nuse of `PATCH` requests depends on the server in question. There are a number\nof server implementations which handle `PATCH` differently. Technically, \n`PATCH` supports both Query String parameters and a Request Body.\n\nThis endpoint accepts an HTTP `PATCH` request and provides debug information\nsuch as the HTTP headers, Query String arguments, and the Request Body."
					},
					"response": []
				},
				{
					"name": "DELETE Request",
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "Donec fermentum, nisi sed cursus eleifend, nulla tortor ultricies tellus, ut vehicula orci arcu ut velit. In volutpat egestas dapibus.\nMorbi condimentum vestibulum sapien. Etiam dignissim diam quis eros lobortis gravida vel lobortis est. Etiam gravida sed."
						},
						"url": {
							"raw": "https://postman-echo.com/delete",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"delete"
							]
						},
						"description": "The HTTP `DELETE` method is used to delete resources on a server. The exact\nuse of `DELETE` requests depends on the server implementation. In general, \n`DELETE` requests support both, Query String parameters as well as a Request \nBody.\n\nThis endpoint accepts an HTTP `DELETE` request and provides debug information\nsuch as the HTTP headers, Query String arguments, and the Request Body."
					},
					"response": []
				}
			],
			"description": "HTTP has multiple request \"verbs\", such as `GET`, `PUT`, `POST`, `DELETE`,\n`PATCH`, `HEAD`, etc. \n\nAn HTTP Method (verb) defines how a request should be interpreted by a server. \nThe endpoints in this section demonstrate various HTTP Verbs. Postman supports \nall the HTTP Verbs, including some rarely used ones, such as `PROPFIND`, `UNLINK`, \netc.\n\nFor details about HTTP Verbs, refer to [RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9)\n"
		},
		{
			"name": "Utilities",
			"item": [
				{
					"name": "Response Status Code",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/status/200",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"status",
								"200"
							]
						},
						"description": "This endpoint allows one to instruct the server which status code to respond with.\n\nEvery response is accompanied by a status code. The status code provides a summary of the nature of response sent by the server. For example, a status code of `200` means everything is okay with the response and a code of `404` implies that the requested URL does not exist on server. \nA list of all valid HTTP status code can be found at the [List of Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) wikipedia article. When using Postman, the response status code is described for easy reference.\n\nNote that if an invalid status code is requested to be sent, the server returns a status code of `400 Bad Request`."
					},
					"response": [
						{
							"name": "200",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "https://echo.getpostman.com/status/200",
									"protocol": "https",
									"host": [
										"echo",
										"getpostman",
										"com"
									],
									"path": [
										"status",
										"200"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "javascript",
							"header": [
								{
									"key": "Access-Control-Allow-Credentials",
									"value": "",
									"name": "Access-Control-Allow-Credentials",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Headers",
									"value": "",
									"name": "Access-Control-Allow-Headers",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Methods",
									"value": "",
									"name": "Access-Control-Allow-Methods",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "",
									"name": "Access-Control-Allow-Origin",
									"description": ""
								},
								{
									"key": "Connection",
									"value": "keep-alive",
									"name": "Connection",
									"description": ""
								},
								{
									"key": "Content-Length",
									"value": "14",
									"name": "Content-Length",
									"description": ""
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8",
									"name": "Content-Type",
									"description": ""
								},
								{
									"key": "Date",
									"value": "Thu, 31 Mar 2016 11:58:47 GMT",
									"name": "Date",
									"description": ""
								},
								{
									"key": "ETag",
									"value": "W/\"e-1056260003\"",
									"name": "ETag",
									"description": ""
								},
								{
									"key": "Server",
									"value": "nginx/1.6.2",
									"name": "Server",
									"description": ""
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding",
									"name": "Vary",
									"description": ""
								},
								{
									"key": "X-Powered-By",
									"value": "Sails <sailsjs.org>",
									"name": "X-Powered-By",
									"description": ""
								}
							],
							"cookie": [
								{
									"expires": "Fri Apr 15 2016 16:44:58 GMT+0530 (IST)",
									"hostOnly": false,
									"httpOnly": false,
									"domain": ".getpostman.com",
									"path": "/",
									"secure": false,
									"session": false,
									"value": "yes",
									"key": "getpostmanlogin"
								},
								{
									"expires": "Fri Apr 15 2016 16:44:58 GMT+0530 (IST)",
									"hostOnly": false,
									"httpOnly": false,
									"domain": ".getpostman.com",
									"path": "/",
									"secure": false,
									"session": false,
									"value": "df0c0256028d7ec4d641f766104a9571a8e249685bbc667d7cee030bbf44d3209495c70c03248e31e678a93812591d5e12187a8e99bf6bc5e80c40903f6ff6226938f24e413c0ffa613a7372064ec44a8594e8d3ede6945e34394f369573feeebc4a73a3e24b8c9ac18a53704addb5fd3f71f1ede488ff551feb059e9c1fb208164814e45e0312c4df8ea6e83c26702f42ae634c6afbe82d57c857bbf5598b5527961c1c28688dc2580070a4389f0cf4ec0a179b5b9c11b2ecbaa5460d374065bf5c7a3add9505df0fa89acb9f227f05ed2d4c6b58c39d6d728bd49f6f323ae67d4a75882aa7682f5d6fc5b981ba411d94aa93970bfaefa1953a73e440d50d012b5f288975c888e2345ee7777e746fb5aed3a7b2dbc087c6456621aa78c24a3c17c5f96cf59844933249a352f631e2008cffac6faf06d0e253dcc01cf0067bf56c1fbc5ed61fec1861b60c5accf35ffc2e56154a113004fa1db9d7171c3af8fc063918554092f5",
									"key": "postman.sid"
								},
								{
									"expires": "Sat Mar 31 2018 16:46:21 GMT+0530 (IST)",
									"hostOnly": false,
									"httpOnly": false,
									"domain": ".echo.getpostman.com",
									"path": "/",
									"secure": false,
									"session": false,
									"value": "GA1.3.1703443399.1459422978",
									"key": "_ga"
								},
								{
									"expires": "Invalid Date",
									"hostOnly": true,
									"httpOnly": true,
									"domain": "echo.getpostman.com",
									"path": "/",
									"secure": false,
									"session": true,
									"value": "s%3AvuHU0EKeDbyNjVrEc7U30dMPzVu8CRaD.GOV1H9olcVzXqrwqP%2BC%2B6MVj2UczXivcN00jgPoDYfs",
									"key": "sails.sid"
								}
							],
							"body": "{\"status\":200}"
						}
					]
				},
				{
					"name": "Streamed Response",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/stream/10",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"stream",
								"10"
							]
						},
						"description": "This endpoint allows one to recieve streaming http response using [chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding) of a configurable length.\n\nA streaming response does not wait for the entire response to be generated on server before flushing it out. This implies that for a fairly large response, parts of it can be streamed to the requestee as and when it is generated on server. The client can then take actions of processing this partially received data."
					},
					"response": []
				},
				{
					"name": "Delay Response",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/delay/3",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"delay",
								"3"
							]
						},
						"description": "Using this endpoint one can configure how long it takes for the server to come back with a response. Appending a number to the URL defines the time (in seconds) the server will wait before responding.\n\nNote that a maximum delay of 10 seconds is accepted by the server."
					},
					"response": [
						{
							"name": "success-response",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "https://echo.getpostman.com/delay/3",
									"protocol": "https",
									"host": [
										"echo",
										"getpostman",
										"com"
									],
									"path": [
										"delay",
										"3"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Access-Control-Allow-Credentials",
									"value": "",
									"name": "Access-Control-Allow-Credentials",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Headers",
									"value": "",
									"name": "Access-Control-Allow-Headers",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Methods",
									"value": "",
									"name": "Access-Control-Allow-Methods",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "",
									"name": "Access-Control-Allow-Origin",
									"description": ""
								},
								{
									"key": "Access-Control-Expose-Headers",
									"value": "",
									"name": "Access-Control-Expose-Headers",
									"description": ""
								},
								{
									"key": "Connection",
									"value": "keep-alive",
									"name": "Connection",
									"description": ""
								},
								{
									"key": "Content-Length",
									"value": "13",
									"name": "Content-Length",
									"description": ""
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8",
									"name": "Content-Type",
									"description": ""
								},
								{
									"key": "Date",
									"value": "Mon, 02 Jan 2017 09:19:03 GMT",
									"name": "Date",
									"description": ""
								},
								{
									"key": "ETag",
									"value": "W/\"d-t/L/D5c0SDl+MoXtKdSVOg\"",
									"name": "ETag",
									"description": ""
								},
								{
									"key": "Server",
									"value": "nginx/1.10.1",
									"name": "Server",
									"description": ""
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding",
									"name": "Vary",
									"description": ""
								}
							],
							"cookie": [
								{
									"expires": "Tue Jan 19 2038 03:14:07 GMT+0530 (IST)",
									"httpOnly": true,
									"domain": "echo.getpostman.com",
									"path": "/",
									"secure": false,
									"value": "s%3AYjUiFBtGiJVL2a-qzZQZ1DFlAMhgXN9O.WaAjRUV0OteZxwmhbNibuB7VKse068JJIh6PwLQUKmQ",
									"key": "sails.sid"
								}
							],
							"body": "{\"delay\":\"3\"}"
						}
					]
				},
				{
					"name": "Get UTF8 Encoded Response",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/encoding/utf8",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"encoding",
								"utf8"
							]
						},
						"description": "If a response of an endpoint requires to send data beyond the basic English / ASCII character set, the `charset` parameter in the `Content-Type` response header defines the character encoding policy.\n\nThis endpoint returns an `UTF8` character encoded response body with text in various languages such as Greek, Latin, East Asian, etc. Postman can interpret the character encoding and use appropriate methods to display the character set in responses."
					},
					"response": []
				},
				{
					"name": "GZip Compressed Response",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/gzip",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"gzip"
							]
						},
						"description": "This endpoint returns the response using [gzip compression algoritm](https://en.wikipedia.org/wiki/Gzip).\nThe uncompressed response is a JSON string containing the details of the request sent by the client. For this endpoint to work, one should request with `Accept-encoding` header containing `gzip` as part of its value. Postman supports gzip, deflate and SDCH decoding and automatically sends them as part of the request.\n\nHTTP Compression allows the server to send responses in a compressed format, which is uncompressed by the client before processing. This reduces network bandwidth consumption at the cost of increase in CPU usage.\nTo know more about this, refer the [HTTP Compression](https://en.wikipedia.org/wiki/HTTP_compression) wikipedia article."
					},
					"response": []
				},
				{
					"name": "Deflate Compressed Response",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/deflate",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"deflate"
							]
						},
						"description": "This endpoint returns the response using [deflate compression algoritm](https://en.wikipedia.org/wiki/DEFLATE). \nThe uncompressed response is a JSON string containing the details of the request sent by the client. For this endpoint to work, one should request with `Accept-encoding` header containing `deflate` as part of its value. Postman supports gzip, deflate and SDCH decoding and automatically sends them as part of the request.\n\nHTTP Compression allows the server to send responses in a compressed format, which is uncompressed by the client before processing. This reduces network bandwidth consumption at the cost of increase in CPU usage.\nTo know more about this, refer the [HTTP Compression](https://en.wikipedia.org/wiki/HTTP_compression) wikipedia article."
					},
					"response": []
				},
				{
					"name": "IP address in JSON format",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/ip",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"ip"
							]
						},
						"description": "A simple `GET` request to return the IP address of the source request in the following `JSON` format:\n\n```json\n{\n  ip: \"request-ip-address\"\n}\n```"
					},
					"response": []
				}
			]
		},
		{
			"name": "Utilities / Date and Time",
			"item": [
				{
					"name": "Current UTC time",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/time/now",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"time",
								"now"
							]
						},
						"description": "A simple `GET` request to `/time/now` to return the current timestamp as a UTC string.\n\n```\nFri, 04 Nov 2016 09:00:46 GMT\n```"
					},
					"response": [
						{
							"name": "time as text",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "https://postman-echo.com/time/now",
									"protocol": "https",
									"host": [
										"postman-echo",
										"com"
									],
									"path": [
										"time",
										"now"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "html",
							"header": [
								{
									"key": "Access-Control-Allow-Credentials",
									"value": "",
									"name": "Access-Control-Allow-Credentials",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Headers",
									"value": "",
									"name": "Access-Control-Allow-Headers",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Methods",
									"value": "",
									"name": "Access-Control-Allow-Methods",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "",
									"name": "Access-Control-Allow-Origin",
									"description": ""
								},
								{
									"key": "Access-Control-Expose-Headers",
									"value": "",
									"name": "Access-Control-Expose-Headers",
									"description": ""
								},
								{
									"key": "Connection",
									"value": "keep-alive",
									"name": "Connection",
									"description": ""
								},
								{
									"key": "Content-Encoding",
									"value": "gzip",
									"name": "Content-Encoding",
									"description": ""
								},
								{
									"key": "Content-Length",
									"value": "49",
									"name": "Content-Length",
									"description": ""
								},
								{
									"key": "Content-Type",
									"value": "text/html; charset=utf-8",
									"name": "Content-Type",
									"description": ""
								},
								{
									"key": "Date",
									"value": "Wed, 11 Jan 2017 10:27:12 GMT",
									"name": "Date",
									"description": ""
								},
								{
									"key": "ETag",
									"value": "W/\"1d-2jJhkzratfVX9VZ0+raHbw\"",
									"name": "ETag",
									"description": ""
								},
								{
									"key": "Server",
									"value": "nginx/1.10.1",
									"name": "Server",
									"description": ""
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding",
									"name": "Vary",
									"description": ""
								},
								{
									"key": "set-cookie",
									"value": "sails.sid=s%3A2lT3TO7qS1tadeSAp4axl-NcXG9CV6Rf.HGqLY%2FlKEKY4fgCLePaAZs3tCHp%2Bglf7ZOJYlonGeig; Path=/; HttpOnly",
									"name": "set-cookie",
									"description": ""
								}
							],
							"cookie": [
								{
									"expires": "Tue Jan 19 2038 03:14:07 GMT+0530 (IST)",
									"httpOnly": true,
									"domain": "postman-echo.com",
									"path": "/",
									"secure": false,
									"value": "s%3A2lT3TO7qS1tadeSAp4axl-NcXG9CV6Rf.HGqLY%2FlKEKY4fgCLePaAZs3tCHp%2Bglf7ZOJYlonGeig",
									"key": "sails.sid"
								}
							],
							"body": "Wed, 11 Jan 2017 10:27:12 GMT"
						}
					]
				},
				{
					"name": "Timestamp validity",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/time/valid?timestamp=2016-10-10",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"time",
								"valid"
							],
							"query": [
								{
									"key": "timestamp",
									"value": "2016-10-10"
								}
							]
						},
						"description": "A simple `GET` request to `/time/valid` to determine the validity of the timestamp, (current by default).\nThis endpoint accepts `timestamp`, `locale`, `format`, and `strict` query parameters to construct the date time instance to check against.\n\nResponses are provided in JSON format, with a valid key to indicate the result. The response code is `200`.\n\n```\n{\n  valid: true/false\n}\n```"
					},
					"response": [
						{
							"name": "Invalid Timestamp",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "https://postman-echo.com/time/valid?timestamp=2016-10-10",
									"protocol": "https",
									"host": [
										"postman-echo",
										"com"
									],
									"path": [
										"time",
										"valid"
									],
									"query": [
										{
											"key": "timestamp",
											"value": "2016-10-10"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Access-Control-Allow-Credentials",
									"value": "",
									"name": "Access-Control-Allow-Credentials",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Headers",
									"value": "",
									"name": "Access-Control-Allow-Headers",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Methods",
									"value": "",
									"name": "Access-Control-Allow-Methods",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "",
									"name": "Access-Control-Allow-Origin",
									"description": ""
								},
								{
									"key": "Access-Control-Expose-Headers",
									"value": "",
									"name": "Access-Control-Expose-Headers",
									"description": ""
								},
								{
									"key": "Connection",
									"value": "keep-alive",
									"name": "Connection",
									"description": ""
								},
								{
									"key": "Content-Length",
									"value": "15",
									"name": "Content-Length",
									"description": ""
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8",
									"name": "Content-Type",
									"description": ""
								},
								{
									"key": "Date",
									"value": "Wed, 11 Jan 2017 10:27:53 GMT",
									"name": "Date",
									"description": ""
								},
								{
									"key": "ETag",
									"value": "W/\"f-/i9mO/upK91ZtL0BkKFGtw\"",
									"name": "ETag",
									"description": ""
								},
								{
									"key": "Server",
									"value": "nginx/1.10.1",
									"name": "Server",
									"description": ""
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding",
									"name": "Vary",
									"description": ""
								},
								{
									"key": "set-cookie",
									"value": "sails.sid=s%3ATNJaNxi2QCv4RPBb64sIZxQGN1h6IP3g.9sQVAijlsLsh0r7LgffxXa9k2we6UumPEVv%2Bsk4woLI; Path=/; HttpOnly",
									"name": "set-cookie",
									"description": ""
								}
							],
							"cookie": [
								{
									"expires": "Tue Jan 19 2038 03:14:07 GMT+0530 (IST)",
									"httpOnly": true,
									"domain": "postman-echo.com",
									"path": "/",
									"secure": false,
									"value": "s%3ATNJaNxi2QCv4RPBb64sIZxQGN1h6IP3g.9sQVAijlsLsh0r7LgffxXa9k2we6UumPEVv%2Bsk4woLI",
									"key": "sails.sid"
								}
							],
							"body": "{\"valid\":false}"
						},
						{
							"name": "Valid Timestamp",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "https://postman-echo.com/time/valid?timestamp=2016-10-10",
									"protocol": "https",
									"host": [
										"postman-echo",
										"com"
									],
									"path": [
										"time",
										"valid"
									],
									"query": [
										{
											"key": "timestamp",
											"value": "2016-10-10"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Access-Control-Allow-Credentials",
									"value": "",
									"name": "Access-Control-Allow-Credentials",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Headers",
									"value": "",
									"name": "Access-Control-Allow-Headers",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Methods",
									"value": "",
									"name": "Access-Control-Allow-Methods",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "",
									"name": "Access-Control-Allow-Origin",
									"description": ""
								},
								{
									"key": "Access-Control-Expose-Headers",
									"value": "",
									"name": "Access-Control-Expose-Headers",
									"description": ""
								},
								{
									"key": "Connection",
									"value": "keep-alive",
									"name": "Connection",
									"description": ""
								},
								{
									"key": "Content-Length",
									"value": "14",
									"name": "Content-Length",
									"description": ""
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8",
									"name": "Content-Type",
									"description": ""
								},
								{
									"key": "Date",
									"value": "Wed, 11 Jan 2017 10:27:33 GMT",
									"name": "Date",
									"description": ""
								},
								{
									"key": "ETag",
									"value": "W/\"e-OYN7L87J1Ba9oy5mJE2kcA\"",
									"name": "ETag",
									"description": ""
								},
								{
									"key": "Server",
									"value": "nginx/1.10.1",
									"name": "Server",
									"description": ""
								},
								{
									"key": "Vary",
									"value": "Accept-Encoding",
									"name": "Vary",
									"description": ""
								},
								{
									"key": "set-cookie",
									"value": "sails.sid=s%3AdDGZPe1CZw4mAxGVCHr6RfCADCAwquXa.F5MEm5LJad30JHrSwGGoyWLn2OAAGdvUM7kDtzNfdFI; Path=/; HttpOnly",
									"name": "set-cookie",
									"description": ""
								}
							],
							"cookie": [
								{
									"expires": "Tue Jan 19 2038 03:14:07 GMT+0530 (IST)",
									"httpOnly": true,
									"domain": "postman-echo.com",
									"path": "/",
									"secure": false,
									"value": "s%3AdDGZPe1CZw4mAxGVCHr6RfCADCAwquXa.F5MEm5LJad30JHrSwGGoyWLn2OAAGdvUM7kDtzNfdFI",
									"key": "sails.sid"
								}
							],
							"body": "{\"valid\":true}"
						}
					]
				},
				{
					"name": "Format timestamp",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/time/format?timestamp=2016-10-10&format=mm",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"time",
								"format"
							],
							"query": [
								{
									"key": "timestamp",
									"value": "2016-10-10"
								},
								{
									"key": "format",
									"value": "mm"
								}
							]
						},
						"description": "A simple `GET` request to `/time/format` to convert the timestamp to any desired valid format.\n\nThis endpoint accepts `timestamp`, `locale`, `format`, and `strict` query parameters to construct the date time instance to check against.\n\nResponses are provided in JSON format, with a `format` key to indicate the result. The response code is `200` for valid query parameters, and `400` otherwise.\n\n```\n{\n  format: \"formatted-timestamp\"\n}\n```"
					},
					"response": []
				},
				{
					"name": "Extract timestamp unit",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/time/unit?timestamp=2016-10-10&unit=day",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"time",
								"unit"
							],
							"query": [
								{
									"key": "timestamp",
									"value": "2016-10-10"
								},
								{
									"key": "unit",
									"value": "day"
								}
							]
						},
						"description": "A simple `GET` request to `/time/unit` to extract the specified timestamp unit (as provided in the `unit` query parameter). The default unit returned is the `year`.\n\nThis endpoint accepts `timestamp`, `locale`, `format`, and `strict` query parameters to construct the date time instance to check against.\n\nResponses are provided in JSON format, with a `unit` key to indicate the result. The response code is `200` for valid query parameters, and `400` otherwise.\n\n```\n{\n  unit: \"extracted-timestamp-unit\"\n}\n```"
					},
					"response": []
				},
				{
					"name": "Time addition",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/time/add?timestamp=2016-10-10&years=100",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"time",
								"add"
							],
							"query": [
								{
									"key": "timestamp",
									"value": "2016-10-10"
								},
								{
									"key": "years",
									"value": "100"
								}
							]
						},
						"description": "A simple `GET` request to `/time/add` to add units of time to the specified / current timestamp (as provided in the `years`, `months`, `days`, `hours`, `minutes`, `seconds`, and `milliseconds` query parameters).\n\nThis endpoint accepts `timestamp`, `locale`, `format`, and `strict` query parameters to construct the date time instance to check against.\n\nResponses are provided in JSON format, with a `sum` key to indicate the result. The response code is `200` for valid query parameters, and `400` otherwise.\n\n```\n{\n  sum: \"sum of (provided / current) and provided timestamps\"\n}\n```"
					},
					"response": []
				},
				{
					"name": "Time subtraction",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/time/subtract?timestamp=2016-10-10&years=100",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"time",
								"subtract"
							],
							"query": [
								{
									"key": "timestamp",
									"value": "2016-10-10"
								},
								{
									"key": "years",
									"value": "100"
								}
							]
						},
						"description": "A simple `GET` request to `/time/subtract` to subtract units of time from the specified / current timestamp (as provided in the `years`, `months`, `days`, `hours`, `minutes`, `seconds`, and `milliseconds` query parameters).\n\nThis endpoint accepts `timestamp`, `locale`, `format`, and `strict` query parameters to construct the date time instance to check against.\n\nResponses are provided in JSON format, with a `difference` key to indicate the result. The response code is `200` for valid query parameters, and `400` otherwise.\n\n```\n{\n  difference: \"difference between (provided / current) and provided timestamps\"\n}\n```"
					},
					"response": []
				},
				{
					"name": "Start of time",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/time/start?timestamp=2016-10-10&unit=month",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"time",
								"start"
							],
							"query": [
								{
									"key": "timestamp",
									"value": "2016-10-10"
								},
								{
									"key": "unit",
									"value": "month"
								}
							]
						},
						"description": "A simple `GET` request to `/time/start` to return a relative timstamp in the past from the specified / current timestamp (as provided in the `unit` query parameter).\n\nFor instance, if the `unit` has been specified as `month`, the returned timestamp would indicate the beginning of the current month. Similar results are returned for other units of time, like: `years`, `months`, `days`, `hours`, `minutes`, `seconds`, and `milliseconds`\n\nThis endpoint accepts `timestamp`, `locale`, `format`, and `strict` query parameters to construct the date time instance to check against.\n\nResponses are provided in JSON format, with a `start` key to indicate the result. The response code is `200` for valid query parameters, and `400` otherwise.\n\n```\n{\n  start: \"A timestamp from the past, depending on the `unit` specified\"\n}\n```"
					},
					"response": []
				},
				{
					"name": "Object representation",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/time/start?timestamp=2016-10-10&unit=month",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"time",
								"start"
							],
							"query": [
								{
									"key": "timestamp",
									"value": "2016-10-10"
								},
								{
									"key": "unit",
									"value": "month"
								}
							]
						},
						"description": "A simple `GET` request to `/time/object` to return the current / provided timestamp as a JSON object.\n\nFor instance, if the `unit` has been specified as `month`, the returned timestamp would indicate the beginning of the current month. Similar results are returned for other units of time, like: `years`, `months`, `days`, `hours`, `minutes`, `seconds`, and `milliseconds`\n\nThis endpoint accepts `timestamp`, `locale`, `format`, and `strict` query parameters to construct the date time instance to check against.\n\nResponses are provided in JSON format. The response code is `200` for valid query parameters, and `400` otherwise.\n\n```\n{\n  years: 2016,\n  months: 10,\n  days: 10,\n  hours: 23,\n  minutes: 34,\n  seconds: 20,\n  milliseconds: 980\n}\n```"
					},
					"response": []
				},
				{
					"name": "Before comparisons",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/time/before?timestamp=2016-10-10&target=2017-10-10",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"time",
								"before"
							],
							"query": [
								{
									"key": "timestamp",
									"value": "2016-10-10"
								},
								{
									"key": "target",
									"value": "2017-10-10"
								}
							]
						},
						"description": "A simple `GET` request to `/time/before` to check if the provided timestamps is before a comparison `target` (query parameter).\n\nThis endpoint accepts `timestamp`, `locale`, `format`, `strict`, and `target` query parameters to construct the date time instance to check against.\n\nResponses are provided in JSON format, with a `before` key to indicate the result. The response code is `200` for valid query parameters, and `400` otherwise.\n\n```\n{\n  before: true/false\n}\n```"
					},
					"response": []
				},
				{
					"name": "After comparisons",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/time/after?timestamp=2016-10-10&target=2017-10-10",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"time",
								"after"
							],
							"query": [
								{
									"key": "timestamp",
									"value": "2016-10-10"
								},
								{
									"key": "target",
									"value": "2017-10-10"
								}
							]
						},
						"description": "A simple `GET` request to `/time/after` to check if the provided timestamps is after a comparison `target` (query parameter).\n\nThis endpoint accepts `timestamp`, `locale`, `format`, `strict`, and `target` query parameters to construct the date time instance to check against.\n\nResponses are provided in JSON format, with a `after` key to indicate the result. The response code is `200` for valid query parameters, and `400` otherwise.\n\n```\n{\n  after: true/false\n}\n```"
					},
					"response": []
				},
				{
					"name": "Between timestamps",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/time/between?timestamp=2016-10-10&start=2017-10-10&end=2019-10-10",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"time",
								"between"
							],
							"query": [
								{
									"key": "timestamp",
									"value": "2016-10-10"
								},
								{
									"key": "start",
									"value": "2017-10-10"
								},
								{
									"key": "end",
									"value": "2019-10-10"
								}
							]
						},
						"description": "A simple `GET` request to `/time/between` to check if the provided timestamp is between a range specified by the `start` and `end` query parameters. A resolution limit can also be specified by the `unit` query parameter.\n\nFor instance, for a resolution `unit` of `month`,\n`2016-10-05` does lie between `2016-11-02` and `2016-09-01`.\n\nThis endpoint also accepts `timestamp`, `locale`, `format`, `strict`, and `target` query parameters to construct the date time instance to check against.\n\nResponses are provided in JSON format, with a `between` key to indicate the result. The response code is `200` for valid query parameters, and `400` otherwise.\n\n```\n{\n  between: true/false\n}\n```"
					},
					"response": []
				},
				{
					"name": "Leap year check",
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://postman-echo.com/time/leap?timestamp=2016-10-10",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"time",
								"leap"
							],
							"query": [
								{
									"key": "timestamp",
									"value": "2016-10-10"
								}
							]
						},
						"description": "A simple `GET` request to `/time/leap` to check if the provided/current timestamp belongs to a leap year.\n\nThis endpoint also accepts `timestamp`, `locale`, `format`, `strict`, and `target` query parameters to construct the date time instance to check against.\n\nResponses are provided in JSON format, with a `leap` key to indicate the result. The response code is `200` for valid query parameters, and `400` otherwise.\n\n```\n{\n  leap: true/false\n}\n```"
					},
					"response": []
				}
			],
			"description": "A set of `/time/*` mounted requests to perform date-time manipulations, among other operations.\n"
		},
		{
			"name": "Utilities / Postman Collection",
			"item": [
				{
					"name": "Transform collection from format v1 to v2",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"id\": \"7875be4b-917d-4aff-8cc4-5606c36bf418\",\n  \"name\": \"Sample Postman Collection\",\n  \"description\": \"A sample collection to demonstrate collections as a set of related requests\",\n  \"order\": [\n    \"4d9134be-e8bf-4693-9cd7-1c0fc66ae739\",\n    \"141ba274-cc50-4377-a59c-e080066f375e\",\n    \"4511ca8b-0bc7-430f-b894-a7ec1036f322\"\n  ],\n  \"folders\": [],\n  \"requests\": [\n    {\n      \"id\": \"4d9134be-e8bf-4693-9cd7-1c0fc66ae739\",\n      \"name\": \"A simple GET request\",\n      \"collectionId\": \"877b9dae-a50e-4152-9b89-870c37216f78\",\n      \"method\": \"GET\",\n      \"headers\": \"\",\n      \"data\": [],\n      \"rawModeData\": \"\",\n      \"tests\": \"tests['response code is 200'] = (responseCode.code === 200);\",\n      \"preRequestScript\": \"\",\n      \"url\": \"https://postman-echo.com/get?source=newman-sample-github-collection\"\n    },\n    {\n      \"id\": \"141ba274-cc50-4377-a59c-e080066f375e\",\n      \"name\": \"A simple POST request\",\n      \"collectionId\": \"877b9dae-a50e-4152-9b89-870c37216f78\",\n      \"method\": \"POST\",\n      \"headers\": \"Content-Type: text/plain\",\n      \"dataMode\": \"raw\",\n      \"data\": [],\n      \"rawModeData\": \"Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium...\",\n      \"url\": \"https://postman-echo.com/post\"\n    },\n    {\n      \"id\": \"4511ca8b-0bc7-430f-b894-a7ec1036f322\",\n      \"name\": \"A simple POST request with JSON body\",\n      \"collectionId\": \"877b9dae-a50e-4152-9b89-870c37216f78\",\n      \"method\": \"POST\",\n      \"headers\": \"Content-Type: application/json\",\n      \"dataMode\": \"raw\",\n      \"data\": [],\n      \"rawModeData\": \"{\\\"text\\\":\\\"Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium...\\\"}\",\n      \"url\": \"https://postman-echo.com/post\"\n    }\n  ]\n}"
						},
						"url": {
							"raw": "https://postman-echo.com/transform/collection?from=1&to=2",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"transform",
								"collection"
							],
							"query": [
								{
									"key": "from",
									"value": "1"
								},
								{
									"key": "to",
									"value": "2"
								}
							]
						}
					},
					"response": [
						{
							"name": "Sample v2 Response",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json",
										"enabled": true,
										"description": "The mime type of this content",
										"disabled": false
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n  \"id\": \"7875be4b-917d-4aff-8cc4-5606c36bf418\",\n  \"name\": \"Sample Postman Collection\",\n  \"description\": \"A sample collection to demonstrate collections as a set of related requests\",\n  \"order\": [\n    \"4d9134be-e8bf-4693-9cd7-1c0fc66ae739\",\n    \"141ba274-cc50-4377-a59c-e080066f375e\",\n    \"4511ca8b-0bc7-430f-b894-a7ec1036f322\"\n  ],\n  \"folders\": [],\n  \"requests\": [\n    {\n      \"id\": \"4d9134be-e8bf-4693-9cd7-1c0fc66ae739\",\n      \"name\": \"A simple GET request\",\n      \"collectionId\": \"877b9dae-a50e-4152-9b89-870c37216f78\",\n      \"method\": \"GET\",\n      \"headers\": \"\",\n      \"data\": [],\n      \"rawModeData\": \"\",\n      \"tests\": \"tests['response code is 200'] = (responseCode.code === 200);\",\n      \"preRequestScript\": \"\",\n      \"url\": \"https://postman-echo.com/get?source=newman-sample-github-collection\"\n    },\n    {\n      \"id\": \"141ba274-cc50-4377-a59c-e080066f375e\",\n      \"name\": \"A simple POST request\",\n      \"collectionId\": \"877b9dae-a50e-4152-9b89-870c37216f78\",\n      \"method\": \"POST\",\n      \"headers\": \"Content-Type: text/plain\",\n      \"dataMode\": \"raw\",\n      \"data\": [],\n      \"rawModeData\": \"Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium...\",\n      \"url\": \"https://postman-echo.com/post\"\n    },\n    {\n      \"id\": \"4511ca8b-0bc7-430f-b894-a7ec1036f322\",\n      \"name\": \"A simple POST request with JSON body\",\n      \"collectionId\": \"877b9dae-a50e-4152-9b89-870c37216f78\",\n      \"method\": \"POST\",\n      \"headers\": \"Content-Type: application/json\",\n      \"dataMode\": \"raw\",\n      \"data\": [],\n      \"rawModeData\": \"{\\\"text\\\":\\\"Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium...\\\"}\",\n      \"url\": \"https://postman-echo.com/post\"\n    }\n  ]\n}"
								},
								"url": {
									"raw": "https://postman-echo.com/transform/collection?from=1&to=2",
									"protocol": "https",
									"host": [
										"postman-echo",
										"com"
									],
									"path": [
										"transform",
										"collection"
									],
									"query": [
										{
											"key": "from",
											"value": "1"
										},
										{
											"key": "to",
											"value": "2"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Access-Control-Allow-Credentials",
									"value": "",
									"name": "Access-Control-Allow-Credentials",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Headers",
									"value": "",
									"name": "Access-Control-Allow-Headers",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Methods",
									"value": "",
									"name": "Access-Control-Allow-Methods",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "",
									"name": "Access-Control-Allow-Origin",
									"description": ""
								},
								{
									"key": "Access-Control-Expose-Headers",
									"value": "",
									"name": "Access-Control-Expose-Headers",
									"description": ""
								},
								{
									"key": "Connection",
									"value": "keep-alive",
									"name": "Connection",
									"description": ""
								},
								{
									"key": "Content-Encoding",
									"value": "gzip",
									"name": "Content-Encoding",
									"description": ""
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8",
									"name": "Content-Type",
									"description": ""
								},
								{
									"key": "Date",
									"value": "Wed, 11 Jan 2017 10:41:32 GMT",
									"name": "Date",
									"description": ""
								},
								{
									"key": "ETag",
									"value": "W/\"4cc-7P727Clhlrl9+b1/vneniw\"",
									"name": "ETag",
									"description": ""
								},
								{
									"key": "Server",
									"value": "nginx/1.10.1",
									"name": "Server",
									"description": ""
								},
								{
									"key": "Vary",
									"value": "X-HTTP-Method-Override, Accept-Encoding",
									"name": "Vary",
									"description": ""
								},
								{
									"key": "set-cookie",
									"value": "sails.sid=s%3AHtnQ1hlPxoj7wZahoNkcjN-aw9nQL0fc.KSyfLbEKhv1Lt3LvH13Ogjv9ENZgsBBSM6V8Y7TqVOU; Path=/; HttpOnly",
									"name": "set-cookie",
									"description": ""
								},
								{
									"key": "transfer-encoding",
									"value": "chunked",
									"name": "transfer-encoding",
									"description": ""
								}
							],
							"cookie": [
								{
									"expires": "Tue Jan 19 2038 03:14:07 GMT+0530 (IST)",
									"httpOnly": true,
									"domain": "postman-echo.com",
									"path": "/",
									"secure": false,
									"value": "s%3AHtnQ1hlPxoj7wZahoNkcjN-aw9nQL0fc.KSyfLbEKhv1Lt3LvH13Ogjv9ENZgsBBSM6V8Y7TqVOU",
									"key": "sails.sid"
								}
							],
							"body": "{\"variables\":[],\"info\":{\"name\":\"Sample Postman Collection\",\"_postman_id\":\"7875be4b-917d-4aff-8cc4-5606c36bf418\",\"description\":\"A sample collection to demonstrate collections as a set of related requests\",\"schema\":\"https://schema.getpostman.com/json/collection/v2.0.0/collection.json\"},\"item\":[{\"name\":\"A simple GET request\",\"event\":[{\"listen\":\"test\",\"script\":{\"type\":\"text/javascript\",\"exec\":[\"tests['response code is 200'] = (responseCode.code === 200);\"]}}],\"request\":{\"url\":\"https://postman-echo.com/get?source=newman-sample-github-collection\",\"method\":\"GET\",\"header\":[],\"body\":{\"mode\":\"raw\",\"raw\":\"\"}},\"response\":[]},{\"name\":\"A simple POST request\",\"request\":{\"url\":\"https://postman-echo.com/post\",\"method\":\"POST\",\"header\":[{\"key\":\"Content-Type\",\"value\":\"text/plain\",\"description\":\"\"}],\"body\":{\"mode\":\"raw\",\"raw\":\"Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium...\"}},\"response\":[]},{\"name\":\"A simple POST request with JSON body\",\"request\":{\"url\":\"https://postman-echo.com/post\",\"method\":\"POST\",\"header\":[{\"key\":\"Content-Type\",\"value\":\"application/json\",\"description\":\"\"}],\"body\":{\"mode\":\"raw\",\"raw\":\"{\\\"text\\\":\\\"Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium...\\\"}\"}},\"response\":[]}]}"
						}
					]
				},
				{
					"name": "Transform collection from format v2 to v1",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"info\": {\n    \"name\": \"Sample Postman Collection\",\n    \"schema\": \"https://schema.getpostman.com/json/collection/v2.0.0/collection.json\",\n    \"description\": \"A sample collection to demonstrate collections as a set of related requests\"\n  },\n\n  \"item\": [{\n    \"name\": \"A simple GET request\",\n    \"event\": [{\n      \"listen\": \"test\",\n      \"script\": {\n        \"type\": \"text/javascript\",\n        \"exec\": [\"tests['response code is 200'] = (responseCode.code === 200);\"]\n      }\n    }],\n    \"request\": {\n      \"url\": \"https://postman-echo.com/get?source=newman-sample-github-collection\",\n      \"method\": \"GET\"\n    }\n  }, {\n    \"name\": \"A simple POST request\",\n    \"request\": {\n      \"url\": \"https://postman-echo.com/post\",\n      \"method\": \"POST\",\n      \"header\": [{\n        \"key\": \"Content-Type\",\n        \"value\": \"text/plain\"\n      }],\n      \"body\": {\n        \"mode\": \"raw\",\n        \"raw\": \"Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium...\"\n      }\n    }\n  }, {\n    \"name\": \"A simple POST request with JSON body\",\n    \"request\": {\n      \"url\": \"https://postman-echo.com/post\",\n      \"method\": \"POST\",\n      \"header\": [{\n        \"key\": \"Content-Type\",\n        \"value\": \"application/json\"\n      }],\n      \"body\": {\n        \"mode\": \"raw\",\n        \"raw\": \"{\\\"text\\\":\\\"Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium...\\\"}\"\n      }\n    }\n  }]\n}"
						},
						"url": {
							"raw": "https://postman-echo.com/transform/collection?from=2&to=1",
							"protocol": "https",
							"host": [
								"postman-echo",
								"com"
							],
							"path": [
								"transform",
								"collection"
							],
							"query": [
								{
									"key": "from",
									"value": "2"
								},
								{
									"key": "to",
									"value": "1"
								}
							]
						}
					},
					"response": [
						{
							"name": "Sample v1 Response",
							"originalRequest": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json",
										"enabled": true,
										"description": "The mime type of this content",
										"disabled": false
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n  \"info\": {\n    \"name\": \"Sample Postman Collection\",\n    \"schema\": \"https://schema.getpostman.com/json/collection/v2.0.0/collection.json\",\n    \"description\": \"A sample collection to demonstrate collections as a set of related requests\"\n  },\n\n  \"item\": [{\n    \"name\": \"A simple GET request\",\n    \"event\": [{\n      \"listen\": \"test\",\n      \"script\": {\n        \"type\": \"text/javascript\",\n        \"exec\": [\"tests['response code is 200'] = (responseCode.code === 200);\"]\n      }\n    }],\n    \"request\": {\n      \"url\": \"https://postman-echo.com/get?source=newman-sample-github-collection\",\n      \"method\": \"GET\"\n    }\n  }, {\n    \"name\": \"A simple POST request\",\n    \"request\": {\n      \"url\": \"https://postman-echo.com/post\",\n      \"method\": \"POST\",\n      \"header\": [{\n        \"key\": \"Content-Type\",\n        \"value\": \"text/plain\"\n      }],\n      \"body\": {\n        \"mode\": \"raw\",\n        \"raw\": \"Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium...\"\n      }\n    }\n  }, {\n    \"name\": \"A simple POST request with JSON body\",\n    \"request\": {\n      \"url\": \"https://postman-echo.com/post\",\n      \"method\": \"POST\",\n      \"header\": [{\n        \"key\": \"Content-Type\",\n        \"value\": \"application/json\"\n      }],\n      \"body\": {\n        \"mode\": \"raw\",\n        \"raw\": \"{\\\"text\\\":\\\"Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium...\\\"}\"\n      }\n    }\n  }]\n}"
								},
								"url": {
									"raw": "https://postman-echo.com/transform/collection?from=2&to=1",
									"protocol": "https",
									"host": [
										"postman-echo",
										"com"
									],
									"path": [
										"transform",
										"collection"
									],
									"query": [
										{
											"key": "from",
											"value": "2"
										},
										{
											"key": "to",
											"value": "1"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Access-Control-Allow-Credentials",
									"value": "",
									"name": "Access-Control-Allow-Credentials",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Headers",
									"value": "",
									"name": "Access-Control-Allow-Headers",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Methods",
									"value": "",
									"name": "Access-Control-Allow-Methods",
									"description": ""
								},
								{
									"key": "Access-Control-Allow-Origin",
									"value": "",
									"name": "Access-Control-Allow-Origin",
									"description": ""
								},
								{
									"key": "Access-Control-Expose-Headers",
									"value": "",
									"name": "Access-Control-Expose-Headers",
									"description": ""
								},
								{
									"key": "Connection",
									"value": "keep-alive",
									"name": "Connection",
									"description": ""
								},
								{
									"key": "Content-Encoding",
									"value": "gzip",
									"name": "Content-Encoding",
									"description": ""
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8",
									"name": "Content-Type",
									"description": ""
								},
								{
									"key": "Date",
									"value": "Wed, 11 Jan 2017 10:38:42 GMT",
									"name": "Date",
									"description": ""
								},
								{
									"key": "ETag",
									"value": "W/\"569-P9uLZEIyoPfMmQ+U0mTO1A\"",
									"name": "ETag",
									"description": ""
								},
								{
									"key": "Server",
									"value": "nginx/1.10.1",
									"name": "Server",
									"description": ""
								},
								{
									"key": "Vary",
									"value": "X-HTTP-Method-Override, Accept-Encoding",
									"name": "Vary",
									"description": ""
								},
								{
									"key": "set-cookie",
									"value": "sails.sid=s%3A55y5Ll7HpTzt_hKuw6N54k4N04ilmMdn.uCPCHttP5DmI%2BdBw2I9NZL55lFFOzz4XxS4qAHv47gI; Path=/; HttpOnly",
									"name": "set-cookie",
									"description": ""
								},
								{
									"key": "transfer-encoding",
									"value": "chunked",
									"name": "transfer-encoding",
									"description": ""
								}
							],
							"cookie": [
								{
									"expires": "Tue Jan 19 2038 03:14:07 GMT+0530 (IST)",
									"httpOnly": true,
									"domain": "postman-echo.com",
									"path": "/",
									"secure": false,
									"value": "s%3A55y5Ll7HpTzt_hKuw6N54k4N04ilmMdn.uCPCHttP5DmI%2BdBw2I9NZL55lFFOzz4XxS4qAHv47gI",
									"key": "sails.sid"
								}
							],
							"body": "{\"id\":\"0c42230c-c8e4-4ca0-a4aa-d393971de8b8\",\"name\":\"Sample Postman Collection\",\"description\":\"A sample collection to demonstrate collections as a set of related requests\",\"order\":[\"3d04ed83-dc1e-40ec-923c-16aa92509e50\",\"e02f8160-fb41-4633-be80-cc7d701e85b4\",\"77bd6d4d-1060-4927-aa5c-dcdba7f750cf\"],\"folders\":[],\"requests\":[{\"id\":\"3d04ed83-dc1e-40ec-923c-16aa92509e50\",\"name\":\"A simple GET request\",\"collectionId\":\"1dd68aff-a3fa-4f52-904f-5b75053bc9d9\",\"method\":\"GET\",\"headers\":\"\",\"data\":[],\"rawModeData\":\"\",\"tests\":\"tests['response code is 200'] = (responseCode.code === 200);\",\"preRequestScript\":\"\",\"url\":\"https://postman-echo.com/get?source=newman-sample-github-collection\"},{\"id\":\"e02f8160-fb41-4633-be80-cc7d701e85b4\",\"name\":\"A simple POST request\",\"collectionId\":\"1dd68aff-a3fa-4f52-904f-5b75053bc9d9\",\"method\":\"POST\",\"headers\":\"Content-Type: text/plain\",\"dataMode\":\"raw\",\"data\":[],\"rawModeData\":\"Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium...\",\"url\":\"https://postman-echo.com/post\"},{\"id\":\"77bd6d4d-1060-4927-aa5c-dcdba7f750cf\",\"name\":\"A simple POST request with JSON body\",\"collectionId\":\"1dd68aff-a3fa-4f52-904f-5b75053bc9d9\",\"method\":\"POST\",\"headers\":\"Content-Type: application/json\",\"dataMode\":\"raw\",\"data\":[],\"rawModeData\":\"{\\\"text\\\":\\\"Duis posuere augue vel cursus pharetra. In luctus a ex nec pretium...\\\"}\",\"url\":\"https://postman-echo.com/post\"}]}"
						}
					]
				}
			]
		}
	]
}