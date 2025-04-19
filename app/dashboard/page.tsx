import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    return (
        <div style={{ padding: 20 }}>
            <h2>Welcome, {session?.user?.name}!</h2>
            <form action="/api/auth/signout" method="post">
                <button type="submit">Logout</button>
            </form>
        </div>
    );
}
