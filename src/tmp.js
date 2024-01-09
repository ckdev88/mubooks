{
  "currentRoute": {
    "fullPath": "/routeinfo",
    "path": "/routeinfo",
    "query": {},
    "hash": "",
    "name": "routeinfo",
    "params": {},
    "matched": [
      {
        "path": "/",
        "meta": {},
        "props": {},
        "children": [
          {
            "path": "/",
            "name": "home",
            "component": {
              "__name": "HomePage",
              "props": {
                "title": {
                  "required": false
                }
              },
              "__hmrId": "9b48b94e",
              "__scopeId": "data-v-9b48b94e",
              "__file": "/home/fernando/Documents/Coding/ckdev88/mubooks/src/views/HomePage.vue"
            }
          },
          {
            "path": "/routeinfo",
            "name": "routeinfo"
          },
          {
            "path": "/quotes",
            "name": "quotes"
          },
          {
            "path": "/states",
            "name": "states"
          },
          {
            "path": "/boekzoek",
            "name": "boekzoek"
          },
          {
            "path": "/books",
            "name": "books"
          },
          {
            "path": "/mubooks",
            "name": "mubooks"
          },
          {
            "path": "/bookstore",
            "name": "bookstore"
          },
          {
            "path": "/series",
            "name": "series"
          }
        ],
        "instances": {},
        "leaveGuards": {
          "Set(0)": []
        },
        "updateGuards": {
          "Set(0)": []
        },
        "enterCallbacks": {}
      },
      {
        "path": "/routeinfo",
        "name": "routeinfo",
        "meta": {},
        "props": {
          "default": false
        },
        "children": [],
        "instances": {
          "default": {}
        },
        "leaveGuards": {
          "Set(0)": []
        },
        "updateGuards": {
          "Set(0)": []
        },
        "enterCallbacks": {},
        "components": {
          "default": {
            "__name": "RouteinfoPage",
            "props": {
              "userid": {
                "required": false
              },
              "username": {
                "required": true
              }
            },
            "__hmrId": "ec2e28f4",
            "__file": "/home/fernando/Documents/Coding/ckdev88/mubooks/src/views/RouteinfoPage.vue"
          }
        }
      }
    ],
    "meta": {},
    "href": "#/routeinfo"
  },
  "listening": true,
  "options": {
    "history": {
      "location": "/routeinfo",
      "base": "/#",
      "state": {
        "back": "/states",
        "current": "/routeinfo",
        "forward": null,
        "replaced": true,
        "position": 15,
        "scroll": {
          "left": 0,
          "top": 0
        }
      }
    },
    "routes": [
      {
        "path": "/",
        "children": [
          {
            "path": "/",
            "name": "home",
            "component": {
              "__name": "HomePage",
              "props": {
                "title": {
                  "required": false
                }
              },
              "__hmrId": "9b48b94e",
              "__scopeId": "data-v-9b48b94e",
              "__file": "/home/fernando/Documents/Coding/ckdev88/mubooks/src/views/HomePage.vue"
            }
          },
          {
            "path": "/routeinfo",
            "name": "routeinfo"
          },
          {
            "path": "/quotes",
            "name": "quotes"
          },
          {
            "path": "/states",
            "name": "states"
          },
          {
            "path": "/boekzoek",
            "name": "boekzoek"
          },
          {
            "path": "/books",
            "name": "books"
          },
          {
            "path": "/mubooks",
            "name": "mubooks"
          },
          {
            "path": "/bookstore",
            "name": "bookstore"
          },
          {
            "path": "/series",
            "name": "series"
          }
        ]
      },
      {
        "path": "/login",
        "children": [
          {
            "path": "/login",
            "name": "login",
            "meta": {
              "requiresAuth": false,
              "requiresNoAuth": true
            }
          },
          {
            "path": "/profile-create",
            "name": "profile-create",
            "meta": {
              "requiresAuth": false,
              "requiresNoAuth": true
            }
          },
          {
            "path": "/profile-preferences",
            "name": "profile-preferences",
            "meta": {
              "requiresAuth": true,
              "requiresNoAuth": false
            }
          },
          {
            "path": "/profile-secret",
            "name": "profile-secret",
            "meta": {
              "requiresAuth": true,
              "requiresNoAuth": false
            }
          },
          {
            "path": "/logout",
            "name": "logout",
            "meta": {
              "requiresAuth": true,
              "requiresNoAuth": false
            }
          },
          {
            "path": "/profile-unauthorized",
            "name": "profile-unauthorized",
            "meta": {
              "requiresAuth": false,
              "requiresNoAuth": false
            }
          },
          {
            "path": "/loginpage",
            "name": "loginpage",
            "meta": {
              "requiresAuth": false,
              "requiresNoAuth": true
            }
          },
          {
            "path": "/users",
            "name": "users",
            "meta": {
              "requiresAuth": true,
              "requiresNoAuth": false
            }
          },
          {
            "path": "/users/:id",
            "meta": {
              "requiresAuth": true,
              "requiresNoAuth": false
            }
          }
        ]
      },
      null,
      {
        "path": "/misc",
        "name": "misc",
        "children": [
          {
            "path": "comments",
            "name": "comments"
          },
          {
            "path": "/counter",
            "name": "counter"
          },
          {
            "path": "/posts",
            "name": "posts"
          },
          {
            "path": "/supabase-test",
            "name": "supabase-test"
          },
          {
            "path": "/compo",
            "name": "compo"
          }
        ]
      },
      {},
      {
        "path": "/:catchAll(.*)",
        "name": "404"
      }
    ]
  },
  "__hasDevtools": true
}
