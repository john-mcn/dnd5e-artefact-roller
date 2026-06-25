This uses my Cloudfare API, which has the format:
```
https://dnd-item-prop.ablx799.workers.dev/?minorBeneficial=2&majorBeneficial=1&minorDetrimental=1
```
It has the URL parameters
- `minorBeneficial`, `majorBeneficial`, `minorDetrimental`, `majorDetrimental` which take a positive integer and control how many of the eponymous properties are returned

[Netlify deployed site](https://dnd5e-artifact-roller.netlify.app/)
