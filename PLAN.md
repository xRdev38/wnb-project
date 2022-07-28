
###Découpage

/core
  /components
  /services
    index.ts
    interceptors
  /models
    index.ts
  /directives
/features
  /volunteers
    /components
      /list-volunteers
      /identity-volunteer
          identity-volunteer.component.ts
          /info-volunteer
          /avatar-volunteer
    /container
      volunteer-container.component.ts
    /services
      volunteer.resolver.services.ts
      volunteer-facade.service.ts (optional)
    /pages
      volunteer-page.component.ts
    volunteers.module.ts
    volunteers-routing.enum.ts
  
/shared
  /components
    /base
    /card
    /progress-bar
  /directives
  /services


note: use moduleResolution =>
```
    "moduleResolution": "node",
    "paths": {
      "@domains/*": ["domains/*"],
      "@adapters/*": ["adapters/*"],
    }
```

TU =>
Components
- card
- progress-bar
- identity-volunteer
- info-volunteer
- avatar-volunteer

Services
- interceptors
- 
