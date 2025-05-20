function App() {
  window.electronMethods.logData()
  window.electronMethods
    .logInvoke()
    .then((response: string) => console.log(response))

  return (
    <>
      <p>Home Page</p>
      <a href='/clients'>clients</a>
      <br />
      <a href='/dashboards'>dashboards</a>
    </>
  )
}

export default App
