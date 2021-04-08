# vue-crm
> ### Authorization and registration is done with Firebase

## Realtime Database rules example:
```
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "auth != null && auth.uid == $uid",
        ".write": "auth != null && auth.uid == $uid || root.child('users').child(auth.uid).child('isAdmin').val() === true",
        "info": { ".validate": true },
        "$other": { ".validate": "data.parent().child('isAdmin').val() === true || root.child('users').child(auth.uid).child('isAdmin').val() === true" }
      }
    }
  }
}
```

## Project setup
```
npm i || npm ci
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
