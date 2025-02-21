# Core Router

While working with `react-router-dom`, we often use it without understanding its internal workings. In this project, I have recreated the functionality of a *Single Page Application (SPA)* using the *History API*, showing how client-side routing works behind the scenes.

![JS-router-core](https://github.com/user-attachments/assets/099a9832-8a93-4c2d-9456-ecf2df456d99)

## BrowserRouter
The `BrowserRouter` is a *function/component* that informs React Router about the application's current location. Under the hood, it utilizes the *History API* and *React Context* to manage navigation within the app.

## History API
The *History API* provides several methods that allow navigation through the history stack. Below are some key methods:

- `history.back()` - Moves to the previous entry in the history stack.
- `history.forward()` - Moves to the next entry in the history stack.
- `history.go(n)` - Moves to a specific position in the history stack, where `n` can be positive (forward) or negative (backward).

### Managing History Entries

- `history.pushState(state, title, url)`
  - Adds a *new entry* to the history stack *without reloading the page*.
  - **Note:** This method *does not check whether the URL exists*; it simply updates the browser history.

- `history.replaceState(state, title, url)`
  - *Replaces* the current entry in the history stack instead of adding a new one.

### Key Point
One crucial thing to understand about `pushState()` is that it *changes the URL without triggering a page reload*. Its primary function is to *modify the history stack, not to fetch new content* from the server.

If you have suggestions or improvements, feel free to submit a *pull request*.

### Contributions

If you have suggestions or improvements, feel free to submit a pull request.

