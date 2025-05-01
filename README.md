The Comment Store - Tech Test

## Deployment

Deployed at https://dsrxkaxh.vercel.app/

## Getting Started

To run the app, build and then start it with:

```bash
yarn build
yarn start
```

To run the Cypress tests, run:

```bash
yarn e2e
```

...then select E2E testing on the pop up window, select Chrome, and then click on the spec test to run.

To run the component tests, run:

```bash
yarn test
```

## Decisions

- I did consider using RxDB but I think it would be overkill for the tech test and I haven't used it in anger before, so it would take up more of the test time
- Given the brief, I decided that I would only account for a single level of replies
- I've used Tailwind to help accelarate the UI design without having to write a lot of CSS
- Pagination not necessary at the moment given the scope of the test, so I've not included it
- Due to the time constraints, I decided to add a few tests of the more important pieces as an example
- I've added a status of deleted to the comments that are deleted so they could be retrieved if it was a mistake

## Further developments

- Sync to an external DB
- Set the comments to deleted if the parent is deleted
- UI updates for better accessibility
- Do something useful with the console.log errors, I'd feed it into something like Sentry
- Limit the number of returned values / consider pagination
- Add a confirmation to the delete button to ensure they really want to delete the comment

## Todo

- Clean up package.json (done)
- Cypress + Jest (done)
- Fix bug where it shows children if no parents (done)
