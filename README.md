# Auth Sprint — Auth Boilerplate Scaffolding CLI

Auth Sprint is a lightweight Node.js CLI that scaffolds authentication boilerplate for projects (starter templates, controllers, routes and middlewares). It aims to accelerate adding common auth patterns (JWT, OAuth) to frameworks such as Express.

## Features

- Generate authentication boilerplate for supported frameworks (currently: Express).
- Interactive prompts for choosing framework and strategy when options are omitted.
- Adds controllers, routes, and middleware files to your project structure.

## Install

You can use the CLI via npx (recommended for one-off use) or install it globally:

Using npx:

```bash
npx auth-sprint
```

Global install:

```bash
npm install -g auth-sprint
auth-sprint
```

Or run locally from the project root:

```bash
node index.js
```

## Usage

Run the CLI and provide options either via flags or interactively:

- -f, --framework <type> Specify the framework (e.g., `express.js`)
- -s, --strategy <type> Specify the authentication strategy (e.g., `JWT`, `OAuth`)

Examples:

```bash
# Generate auth boilerplate for an Express app using JWT
auth-sprint -f express.js -s JWT

# Run interactively (prompts will ask for framework/strategy)
auth-sprint
```

Notes:

- The generator expects to be run inside an existing project directory containing a `package.json`. If `package.json` is not found it will print an error message.
- For Express, generated files are placed under `auth-templates/express.js` handlers and applied via the generator logic.

## Project Structure (high level)

Key files and folders in this repo:

- `index.js` — CLI entrypoint and option parsing.
- `commands/create-auth.js` — generation logic and prompts.
- `auth-templates/` — framework-specific template code (e.g., Express controllers, middlewares, routes).
- `frameworks/` — framework handlers (how templates are applied).

## Running tests

This project uses Jest for tests. To run tests locally:

```bash
npm test
```

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository.
2. Create a branch for your feature or fix.
3. Open a pull request describing the change and include tests when applicable.

Please follow repository coding style and add unit tests for new behavior.

## License

This project is published under the ISC license. See the `package.json` for details.

## Author

Olude Fiyinfoluwa
