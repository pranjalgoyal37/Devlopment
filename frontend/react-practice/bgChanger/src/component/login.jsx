function LogInForm() {
  return (
    <div className="form">
      <form action="">
        <label for="username">Username:</label><br />
        <input type="text" id="username" name="username" required /><br />
        <label for="password">Password:</label><br />
        <input type="password" id="password" name="password" required />
      </form>
    </div>

  )
}
export default LogInForm