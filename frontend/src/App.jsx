import { useEffect } from "react"

export default function App() {
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const username = data.get("username")
    const email = data.get("email")

    fetch("https://test-api-ek6p.onrender.com/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <center>
          <h1>Test API</h1>
          <table border="1">
            <thead>
              <tr>
                <th colSpan={2}>
                  <h2>Formulaire</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="username">{"Nom d'utilisateur"}</label>
                </td>
                <td>
                  <input type="text" id="username" name="username" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">Adresse Email</label>
                </td>
                <td>
                  <input type="email" id="email" name="email" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" value="Envoyer" />
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </form>
    </div>
  )
}
