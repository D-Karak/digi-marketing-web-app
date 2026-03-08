import ProtectedRoute from "../../components/ProtectedRoute";

export default function DashboardLayout({ children }) {
    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-light flex flex-col">
                {/* Later in Phase 3, we can extract the Sidebar/Topbar to a separate component here */}
                {children}
            </div>
        </ProtectedRoute>
    );
}
