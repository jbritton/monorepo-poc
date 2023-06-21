# nx-npm-mono

## Example Commands

Run build script:
``` 
npx nx build is-even
```

Define `build` task dependencies:
```json 
{
  // ...
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"]
    }
  }
}
```

Run `build` task for all packages:
``` 
npx nx run-many -t build
```

Run `build` task, skipping cache:
``` 
npx nx run-many -t build --skip-nx-cache
```

Run `build` task only on tasks that have been changed:
``` 
npx nx affected -t build
```
