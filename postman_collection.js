window.collectionJSON = {
  info: {
    _postman_id: '6f65f8ab-c635-46fb-9265-72614c509848',
    name: 'ElasticSearch',
    schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
  },
  item: [
    {
      name: 'Test Installation',
      description: '',
      item: [
        {
          name: 'Home URL',
          request: {
            method: 'GET',
            header: [],
            body: {},
            url: {
              raw: '{{Host-Protocol}}',
              host: ['{{Host-Protocol}}']
            },
            description: '\t'
          },
          response: [
            {
              id: 'b40e50b5-edf4-4a18-bad7-ec6eb4efaca8',
              name: 'Home URL',
              originalRequest: {
                method: 'GET',
                header: [],
                body: {},
                url: {
                  raw: '{{Host-Protocol}}',
                  host: ['{{Host-Protocol}}']
                }
              },
              status: 'OK',
              code: 200,
              _postman_previewlanguage: 'json',
              header: [
                {
                  key: 'content-encoding',
                  value: 'gzip',
                  name: 'content-encoding',
                  description: 'The type of encoding used on the data.'
                },
                {
                  key: 'content-length',
                  value: '288',
                  name: 'content-length',
                  description: 'The length of the response body in octets (8-bit bytes)'
                },
                {
                  key: 'content-type',
                  value: 'application/json; charset=UTF-8',
                  name: 'content-type',
                  description: 'The mime type of this content'
                }
              ],
              cookie: [],
              body:
                '{\n  "name" : "fllYWii",\n  "cluster_name" : "elasticsearch_sripasum",\n  "cluster_uuid" : "lRZiOOqHST6qyASJYzVB_g",\n  "version" : {\n    "number" : "6.2.4",\n    "build_hash" : "ccec39f",\n    "build_date" : "2018-04-12T20:37:28.497551Z",\n    "build_snapshot" : false,\n    "lucene_version" : "7.2.1",\n    "minimum_wire_compatibility_version" : "5.6.0",\n    "minimum_index_compatibility_version" : "5.0.0"\n  },\n  "tagline" : "You Know, for Search"\n}\n'
            }
          ]
        },
        {
          name: 'Cluster Health',
          request: {
            method: 'GET',
            header: [],
            body: {},
            url: {
              raw: '{{Host-Protocol}}/_cat/health?v',
              host: ['{{Host-Protocol}}'],
              path: ['_cat', 'health'],
              query: [
                {
                  key: 'v',
                  value: null
                }
              ]
            }
          },
          response: [
            {
              id: '881e46b6-7528-47a3-81b1-47ac400e3839',
              name: 'Cluster Health',
              originalRequest: {
                method: 'GET',
                header: [],
                body: {},
                url: {
                  raw: '{{Host-Protocol}}/_cat/health?v',
                  host: ['{{Host-Protocol}}'],
                  path: ['_cat', 'health'],
                  query: [
                    {
                      key: 'v',
                      value: null
                    }
                  ]
                }
              },
              status: 'OK',
              code: 200,
              _postman_previewlanguage: 'plain',
              header: [
                {
                  key: 'content-encoding',
                  value: 'gzip',
                  name: 'content-encoding',
                  description: 'The type of encoding used on the data.'
                },
                {
                  key: 'content-length',
                  value: '197',
                  name: 'content-length',
                  description: 'The length of the response body in octets (8-bit bytes)'
                },
                {
                  key: 'content-type',
                  value: 'text/plain; charset=UTF-8',
                  name: 'content-type',
                  description: 'The mime type of this content'
                }
              ],
              cookie: [],
              body:
                'epoch      timestamp cluster                status node.total node.data shards pri relo init unassign pending_tasks max_task_wait_time active_shards_percent\n1529142301 15:15:01  elasticsearch_sripasum yellow          1         1     10  10    0    0       10             0                  -                 50.0%\n'
            }
          ]
        },
        {
          name: 'List Nodes',
          request: {
            method: 'GET',
            header: [],
            body: {},
            url: {
              raw: '{{Host-Protocol}}/_cat/nodes?v',
              host: ['{{Host-Protocol}}'],
              path: ['_cat', 'nodes'],
              query: [
                {
                  key: 'v',
                  value: null
                }
              ]
            }
          },
          response: [
            {
              id: 'ff708952-d144-4113-9085-301b120ef6a9',
              name: 'List Nodes',
              originalRequest: {
                method: 'GET',
                header: [],
                body: {},
                url: {
                  raw: '{{Host-Protocol}}/_cat/nodes?v',
                  host: ['{{Host-Protocol}}'],
                  path: ['_cat', 'nodes'],
                  query: [
                    {
                      key: 'v',
                      value: null
                    }
                  ]
                }
              },
              status: 'OK',
              code: 200,
              _postman_previewlanguage: 'plain',
              header: [
                {
                  key: 'content-encoding',
                  value: 'gzip',
                  name: 'content-encoding',
                  description: 'The type of encoding used on the data.'
                },
                {
                  key: 'content-length',
                  value: '133',
                  name: 'content-length',
                  description: 'The length of the response body in octets (8-bit bytes)'
                },
                {
                  key: 'content-type',
                  value: 'text/plain; charset=UTF-8',
                  name: 'content-type',
                  description: 'The mime type of this content'
                }
              ],
              cookie: [],
              body:
                'ip        heap.percent ram.percent cpu load_1m load_5m load_15m node.role master name\n127.0.0.1           24          93   6    2.39                  mdi       *      fllYWii\n'
            }
          ]
        }
      ]
    },
    {
      name: 'Indices',
      description: '',
      item: [
        {
          name: 'List Indices',
          request: {
            method: 'GET',
            header: [],
            body: {},
            url: {
              raw: '{{Host-Protocol}}/_cat/indices?v',
              host: ['{{Host-Protocol}}'],
              path: ['_cat', 'indices'],
              query: [
                {
                  key: 'v',
                  value: null
                }
              ]
            }
          },
          response: [
            {
              id: 'c8d80682-c800-4ec4-ad21-b70d14b0b8da',
              name: 'List Indices',
              originalRequest: {
                method: 'GET',
                header: [],
                body: {},
                url: {
                  raw: '{{Host-Protocol}}/_cat/indices?v',
                  host: ['{{Host-Protocol}}'],
                  path: ['_cat', 'indices'],
                  query: [
                    {
                      key: 'v',
                      value: null
                    }
                  ]
                }
              },
              status: 'OK',
              code: 200,
              _postman_previewlanguage: 'plain',
              header: [
                {
                  key: 'content-encoding',
                  value: 'gzip',
                  name: 'content-encoding',
                  description: 'The type of encoding used on the data.'
                },
                {
                  key: 'content-length',
                  value: '191',
                  name: 'content-length',
                  description: 'The length of the response body in octets (8-bit bytes)'
                },
                {
                  key: 'content-type',
                  value: 'text/plain; charset=UTF-8',
                  name: 'content-type',
                  description: 'The mime type of this content'
                }
              ],
              cookie: [],
              body:
                'health status index    uuid                   pri rep docs.count docs.deleted store.size pri.store.size\nyellow open   vendor   5NPZlKgHTx2wdNnIcbgbsA   5   1          0            0      1.1kb          1.1kb\nyellow open   customer JHEWZdL3TEyq7aXRkbKmVA   5   1          0            0      1.1kb          1.1kb\n'
            }
          ]
        },
        {
          name: 'Create Index',
          request: {
            method: 'PUT',
            header: [],
            body: {},
            url: {
              raw: '{{Host-Protocol}}/vendor?pretty',
              host: ['{{Host-Protocol}}'],
              path: ['vendor'],
              query: [
                {
                  key: 'pretty',
                  value: null
                }
              ]
            }
          },
          response: [
            {
              id: '5eda2524-31f6-496d-9eb3-b454ec9b6214',
              name: 'Create Index Success',
              originalRequest: {
                method: 'PUT',
                header: [],
                body: {},
                url: {
                  raw: '{{Host-Protocol}}/vendor?pretty',
                  host: ['{{Host-Protocol}}'],
                  path: ['vendor'],
                  query: [
                    {
                      key: 'pretty',
                      value: null
                    }
                  ]
                }
              },
              status: 'OK',
              code: 200,
              _postman_previewlanguage: 'json',
              header: [
                {
                  key: 'content-encoding',
                  value: 'gzip',
                  name: 'content-encoding',
                  description: 'The type of encoding used on the data.'
                },
                {
                  key: 'content-length',
                  value: '81',
                  name: 'content-length',
                  description: 'The length of the response body in octets (8-bit bytes)'
                },
                {
                  key: 'content-type',
                  value: 'application/json; charset=UTF-8',
                  name: 'content-type',
                  description: 'The mime type of this content'
                }
              ],
              cookie: [],
              body:
                '{\n  "acknowledged" : true,\n  "shards_acknowledged" : true,\n  "index" : "vendor"\n}\n'
            },
            {
              id: 'affb8f11-65fb-48f3-b727-10915e701bc1',
              name: 'Create Index Failure',
              originalRequest: {
                method: 'PUT',
                header: [],
                body: {},
                url: {
                  raw: '{{Host-Protocol}}/customer?pretty',
                  host: ['{{Host-Protocol}}'],
                  path: ['customer'],
                  query: [
                    {
                      key: 'pretty',
                      value: null
                    }
                  ]
                }
              },
              status: 'Bad Request',
              code: 400,
              _postman_previewlanguage: 'json',
              header: [
                {
                  key: 'content-encoding',
                  value: 'gzip',
                  name: 'content-encoding',
                  description: 'The type of encoding used on the data.'
                },
                {
                  key: 'content-length',
                  value: '217',
                  name: 'content-length',
                  description: 'The length of the response body in octets (8-bit bytes)'
                },
                {
                  key: 'content-type',
                  value: 'application/json; charset=UTF-8',
                  name: 'content-type',
                  description: 'The mime type of this content'
                }
              ],
              cookie: [],
              body:
                '{\n  "error" : {\n    "root_cause" : [\n      {\n        "type" : "resource_already_exists_exception",\n        "reason" : "index [customer/JHEWZdL3TEyq7aXRkbKmVA] already exists",\n        "index_uuid" : "JHEWZdL3TEyq7aXRkbKmVA",\n        "index" : "customer"\n      }\n    ],\n    "type" : "resource_already_exists_exception",\n    "reason" : "index [customer/JHEWZdL3TEyq7aXRkbKmVA] already exists",\n    "index_uuid" : "JHEWZdL3TEyq7aXRkbKmVA",\n    "index" : "customer"\n  },\n  "status" : 400\n}\n'
            }
          ]
        },
        {
          name: 'Index Document',
          request: {
            method: 'PUT',
            header: [
              {
                key: 'Content-Type',
                value: 'application/json'
              }
            ],
            body: {
              mode: 'raw',
              raw: '{\n  "name": "John Doe"\n}'
            },
            url: {
              raw: '{{Host-Protocol}}/customer/_doc/1?pretty',
              host: ['{{Host-Protocol}}'],
              path: ['customer', '_doc', '1'],
              query: [
                {
                  key: 'pretty',
                  value: null
                }
              ]
            }
          },
          response: [
            {
              id: '60ea4d4a-2c6e-4e0d-90ad-15b095f5b6f3',
              name: 'Index Document',
              originalRequest: {
                method: 'PUT',
                header: [
                  {
                    key: 'Content-Type',
                    value: 'application/json',
                    disabled: false
                  }
                ],
                body: {
                  mode: 'raw',
                  raw: '{\n  "name": "John Doe"\n}'
                },
                url: {
                  raw: '{{Host-Protocol}}/customer/_doc/1?pretty',
                  host: ['{{Host-Protocol}}'],
                  path: ['customer', '_doc', '1'],
                  query: [
                    {
                      key: 'pretty',
                      value: null
                    }
                  ]
                }
              },
              status: 'Created',
              code: 201,
              _postman_previewlanguage: 'json',
              header: [
                {
                  key: 'Location',
                  value: '/customer/_doc/1',
                  name: 'Location',
                  description: 'Used in redirection, or when a new resource has been created.'
                },
                {
                  key: 'content-encoding',
                  value: 'gzip',
                  name: 'content-encoding',
                  description: 'The type of encoding used on the data.'
                },
                {
                  key: 'content-length',
                  value: '161',
                  name: 'content-length',
                  description: 'The length of the response body in octets (8-bit bytes)'
                },
                {
                  key: 'content-type',
                  value: 'application/json; charset=UTF-8',
                  name: 'content-type',
                  description: 'The mime type of this content'
                }
              ],
              cookie: [],
              body:
                '{\n  "_index" : "customer",\n  "_type" : "_doc",\n  "_id" : "1",\n  "_version" : 1,\n  "result" : "created",\n  "_shards" : {\n    "total" : 2,\n    "successful" : 1,\n    "failed" : 0\n  },\n  "_seq_no" : 0,\n  "_primary_term" : 1\n}\n'
            }
          ]
        },
        {
          name: 'Query Document',
          request: {
            method: 'GET',
            header: [],
            body: {},
            url: {
              raw: '{{Host-Protocol}}/customer/_doc/1?pretty',
              host: ['{{Host-Protocol}}'],
              path: ['customer', '_doc', '1'],
              query: [
                {
                  key: 'pretty',
                  value: null
                }
              ]
            }
          },
          response: [
            {
              id: 'b410e1a0-33fa-4ef0-b900-744c6ce25e8c',
              name: 'Query Document',
              originalRequest: {
                method: 'GET',
                header: [],
                body: {},
                url: {
                  raw: '{{Host-Protocol}}/customer/_doc/1?pretty',
                  host: ['{{Host-Protocol}}'],
                  path: ['customer', '_doc', '1'],
                  query: [
                    {
                      key: 'pretty',
                      value: null
                    }
                  ]
                }
              },
              status: 'OK',
              code: 200,
              _postman_previewlanguage: 'json',
              header: [
                {
                  key: 'content-encoding',
                  value: 'gzip',
                  name: 'content-encoding',
                  description: 'The type of encoding used on the data.'
                },
                {
                  key: 'content-length',
                  value: '125',
                  name: 'content-length',
                  description: 'The length of the response body in octets (8-bit bytes)'
                },
                {
                  key: 'content-type',
                  value: 'application/json; charset=UTF-8',
                  name: 'content-type',
                  description: 'The mime type of this content'
                }
              ],
              cookie: [],
              body:
                '{\n  "_index" : "customer",\n  "_type" : "_doc",\n  "_id" : "1",\n  "_version" : 1,\n  "found" : true,\n  "_source" : {\n    "name" : "John Doe"\n  }\n}\n'
            }
          ]
        }
      ]
    }
  ]
};
