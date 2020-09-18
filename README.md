# sippd-counter-app
Cart/Checkout app assessment for Sippd based on below instructions for modifications of [arnab-datta/counter-app](https://github.com/arnab-datta/counter-app):
1. List should start with no items.
2. User should be able to input item name and price, which on submit would add the item and price to the list.
3. Input fields should be validated as you see fit with error messages.
4. List should show item price.
5. New bottom line should show total item count and total price.
6. The "cart" should persist across page refreshes. If a user hits the browser refresh the cart should not reset back to empty.
7. A checkout button should take the user to a new page with a simple itemized receipt.
# Demonstration
You can watch a video demonstration [here](https://drive.google.com/file/d/1kprUVPpNSNtbnXBwZxf5rR29t26ti6nd/view?usp=sharing) that's hosted on Google Drive

# Local Environment Instructions
- Install nvm in order to use Node 12.18.4: https://github.com/nvm-sh/nvm#installing-and-updating
- `nvm install v12.18.4`
- `nvm use v12.18.4`
- `git clone git@github.com:509dave16/sippd-counter-app.git`
- `cd sippd-counter-app`
- `npm i`
- `npm start`

# Additional Packages Used
- **"redux": "^4.0.5"** - Used in conjunction with **react-redux** for app state management
- **"react-redux": "^7.2.1"** - Used in conjunction with **redux** for app state management
- **"redux-persist": "^6.0.0"** - Used for persisting the **redux** store to Local Storage automatically
- **"redux-orm": "^0.16.2"** - Used for CRUD state management of items in **redux** store
- **"gh-pages": "^3.1.0"** - Added as a dev dependency for deployment to Github Pages. But it's more work than we bargained for to get the assets to load properly.


# Directory Structure
- `components` - Every React component resides here. And they are broken up into three directories
  - `pages` - Is intended for page components that are used in the **SwitchView** component
  - `widgets` - Is intended for shared components that could be used by other widget components or page components
  - `root` - Is intended for headless components or components in general that are renderd in the root App component(i.e. **NavBar** and **SwitchView**)
- `config` - Anything related to configuration like constants, colors, dimensions, shared styles, env variables, etc... should go here
- `state` - Every aspect pertaining to the global application state goes here and it broken up into 4 directories:
  - `actions` - This where actions for different features should go. A file for a feature includes the action types and the action creators
  - `models` - This is where any models for resources used in the app should go(i.e. Item). These models are a part of the integration of `redux-orm`.
  - `reducers` - This is where any reducers for slices of feature/app state should go. `redux-orm` has a special `createReducer` function that is used for creating reducer to hold the data for all the models.
  - `selectors` - This is where any selectors for memoizing slices of feature/app state should go. `redux-orm` has a special `createSelector` function used for selecting data for a particular model. A`QuerySet` for each model can be accessed from the `session` in the final callback of `createSelector`
- `utils` - This is where files containing collections of common functions for different concepts can be found. Such as for formatting, aggregation, etc...
    
# Deficiencies
- **No hover/click animated feedback on Cart navigation button**

