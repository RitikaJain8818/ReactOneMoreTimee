useEffect

//1. If no dependency array, useEffect is called everytime the component renders
//2. If dependency array is empty = [], useEffect gets called only on initial render(just once).
//3. If dependency array is [loginBtnName], useEffect is called everytime loginBtnName get updated.

useState

//1. useState should not be written outside the component, always be written inside the functional component
//2. State variables should not be created inside if/else, for/while loops or even functions.
//3. Best practice is to create all state variables at the top of the functional component. It is to avoid any inconsistency.
