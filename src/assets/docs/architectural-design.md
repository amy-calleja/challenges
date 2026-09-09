**Architectural design**

More imprtantly, 'Where shoud this code live and why?'.
Introducing the project structure and explaining why you've put those boundries.

Important questions to walk through with any given architecture question:

        1. What are the domains/features?
                    ↓
        2. What is server state?
                    ↓
        3. What is local UI state?
                    ↓
        4. What needs to be shared globally?
                    ↓
        5. Where does API logic live?
                    ↓
        6. What components should be reusable?
                    ↓
        7. How do we test the important behaviour?

- then add whre relevant:
  -authentication
  -routing
  -error handling

1. API Calls
   Create services seperately defined so each component doesn't need to know how the api works

i.e. always messy with
URLs
HTTP methods
headers
error responses
authentication
JSON

2. Keep React logic split
   -API/state logic custom hooks - already defined loading, error, fetching states

3. State locations
   -Keep state as close to where it's used, and lift it when multiple components need it
   -state local by default, lift or globalise only if real sharing requirement

4. Server State
   -Consider using libraries like TanStack Query, handles caching, stale data, refetching and mutations
   -Easy to handle than doing it all manually

-when dealing with issues around handling numerous:
fetching
caching
refetching
stale data
loading
errors
mutations
retrying
deduplication

5. Domain Types
   -We don't want the same typing repeatted everywhere.
   -Create type files with exported types etc, for clean and readible code, not making dirty the main code.

6. Reusable Components & Domain Specific
   -like a general input or button vs TaskForm or TaskFilters

7. Authentication
   -Don't scatter Auth around components. something like:
   auth/
   ├── authService.ts
   ├── AuthProvider.tsx
   ├── useAuth.ts
   └── types.ts
   -custom hook exposing e.g.:
   const {
   user,
   isAuthenticated,
   login,
   logout,
   } = useAuth();

- then with routing e.g.:
  User
  ↓
  Authenticated?
  ↓
  ┌───────────────┐
  NO YES
  ↓ ↓
  Login App

-set protected routes/pages like:
/login

    /app
        /tasks
        /tasks/:id
        /settings

8. Testing

- Test important behaviour & user-facing outcomes
  -Unit testing and edge cases i'd cover min 80% global coverage of each file/folder/branch etc
  -e.g. form testing:
  invalid input
  validation messages
  submit
  successful submission
  server error
  -e.g. TaskItem testing:
  renders task title
  renders completed state
  calls onDelete when delete clicked
  calls onToggle when checkbox clicked

9.  Structuring Example
    -think in terms of features/domains

            Shared UI
            ↓
            components/

            Shared utilities
            ↓
            utils/

            API infrastructure
            ↓
            services/

            Domain-specific functionality
            ↓
            features/

Example Case:
A large To Do App grows into a production task management app with 100,000+ users.
A reasonable starting structure could be:

        src/
        │
        ├── components/
        │   ├── Button/
        │   ├── Input/
        │   ├── Modal/
        │   └── TaskItem/
        │
        ├── features/
        │   └── tasks/
        │       ├── components/
        │       │   ├── TaskList.tsx
        │       │   ├── TaskItem.tsx
        │       │   └── TaskForm.tsx
        │       │
        │       ├── hooks/
        │       │   └── useTasks.ts
        │       │
        │       ├── services/
        │       │   └── taskService.ts
        │       │
        │       ├── types.ts
        │       └── utils.ts
        │
        ├── hooks/
        │   ├── useDebounce.ts
        │   └── useAuth.ts
        │
        ├── services/
        │   ├── api.ts
        │   └── authService.ts
        │
        ├── types/
        │   └── user.ts
        │
        ├── utils/
        │   ├── validation.ts
        │   └── formatting.ts
        │
        ├── pages/
        │   ├── LoginPage.tsx
        │   ├── TasksPage.tsx
        │   └── TaskDetailsPage.tsx
        │
        ├── routes/
        │   └── AppRoutes.tsx
        │
        └── App.tsx
