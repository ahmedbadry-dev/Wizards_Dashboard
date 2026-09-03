import { DashboardLayout } from "../../../components/layout/DashboardLayout"

const DashboardPage = () => {
    return (
        <DashboardLayout>
            <section>
                <h1 className="heading-1 md:text-4xl">
                    Wizarding Registry Dashboard
                </h1>
                <p className="mt-2 text-muted">
                    Overseeing the mystical equilibrium across all magical realms.
                </p>
            </section>
        </DashboardLayout>
    )
}

export default DashboardPage
