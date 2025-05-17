export default function Dashboard() {
    return (
        <section>
            <h1>Dashboard</h1>
            <form>
                <h2>Logg inn</h2>
                <label>
                    Brukernavn:
                    <input type="text" placeholder="brukernavn"/>
                </label>
                <input type="submit" value="Logg inn"/>
            </form>
        </section>
    )
}