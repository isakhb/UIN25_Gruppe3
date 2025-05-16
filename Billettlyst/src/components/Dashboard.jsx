export default function Dashboard() {
    return (
        <section>
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