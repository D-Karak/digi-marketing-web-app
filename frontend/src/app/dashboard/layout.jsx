import ProtectedRoute from "../../components/ProtectedRoute";
import Sidebar from "../../components/dashboard/Sidebar";

export default function DashboardLayout({ children }) {
    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-light flex">
                <Sidebar />
                <div className="flex-1 flex flex-col w-full h-screen overflow-hidden">
                    {children}
                </div>
            </div>
        </ProtectedRoute>
    );
}
