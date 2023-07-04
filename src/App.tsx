import useRouteElements from './useRouterElements';

function App() {
  const routeElements = useRouteElements();
  return <div>{routeElements}</div>;
}

export default App;
