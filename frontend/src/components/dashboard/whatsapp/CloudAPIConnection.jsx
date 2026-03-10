import React, { useState } from 'react';
import { Shield, Save, KeyRound, CheckCircle2, Eye, EyeOff } from 'lucide-react';

export default function CloudAPIConnection() {
    const [formData, setFormData] = useState({
        phoneNumberId: '',
        whatsappBusinessAccountId: '',
        permanentAccessToken: ''
    });

    const [showToken, setShowToken] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        setIsSaving(true);
        // Mock save API Call
        setTimeout(() => {
            setIsSaving(false);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        }, 1500);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
                <form onSubmit={handleSave} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                    <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                            <Shield className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-dark">API Credentials</h3>
                            <p className="text-sm text-gray-500">Securely store your Meta Developer tokens</p>
                        </div>
                    </div>

                    <div className="p-6 space-y-6">
                        {/* Phone Number ID */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-dark flex items-center justify-between">
                                Phone Number ID
                                <span className="text-xs text-blue-500 hover:underline cursor-pointer">Where to find this?</span>
                            </label>
                            <input
                                type="text"
                                name="phoneNumberId"
                                value={formData.phoneNumberId}
                                onChange={handleChange}
                                placeholder="e.g. 102345678912345"
                                className="w-full bg-light border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark transition-all placeholder:text-gray-400"
                                required
                            />
                        </div>

                        {/* WABA ID */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-dark flex items-center justify-between">
                                WhatsApp Business Account ID
                            </label>
                            <input
                                type="text"
                                name="whatsappBusinessAccountId"
                                value={formData.whatsappBusinessAccountId}
                                onChange={handleChange}
                                placeholder="e.g. 109876543210987"
                                className="w-full bg-light border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark transition-all placeholder:text-gray-400"
                                required
                            />
                        </div>

                        {/* Access Token */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-dark flex items-center gap-2">
                                <KeyRound className="w-4 h-4 text-gray-400" /> Permanent Access Token
                            </label>
                            <div className="relative">
                                <input
                                    type={showToken ? 'text' : 'password'}
                                    name="permanentAccessToken"
                                    value={formData.permanentAccessToken}
                                    onChange={handleChange}
                                    placeholder="EAA..."
                                    className="w-full bg-light border border-gray-200 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark transition-all placeholder:text-gray-400 font-mono"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowToken(!showToken)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-dark transition-colors"
                                >
                                    {showToken ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                            <p className="text-xs text-gray-400 mt-2">
                                We encrypt this token at rest. It will never be displayed in plain text again once saved.
                            </p>
                        </div>
                    </div>

                    <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="bg-dark text-white px-8 py-3 rounded-full font-medium hover:bg-black transition-all flex items-center gap-2 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {isSaving ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : saved ? (
                                <CheckCircle2 className="w-5 h-5 text-green-400" />
                            ) : (
                                <Save className="w-5 h-5" />
                            )}
                            {isSaving ? 'Saving...' : saved ? 'Saved Securely!' : 'Save Credentials'}
                        </button>
                    </div>
                </form>
            </div>

            {/* Checklist Guide pane */}
            <div className="lg:col-span-2">
                <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 h-full">
                    <h4 className="font-bold text-dark mb-4 text-lg">Setup Checklist</h4>
                    <p className="text-sm text-gray-600 mb-6">
                        Before connecting, ensure you have completed these steps in your Meta Developer console:
                    </p>

                    <ul className="space-y-4">
                        {[
                            'Created a Meta Developer App',
                            'Added "WhatsApp" product to the App',
                            'Linked your Facebook Business Manager',
                            'Added a real phone number (not a test number)',
                            'Generated a Permanent system user token'
                        ].map((step, idx) => (
                            <li key={idx} className="flex gap-3 text-sm text-gray-700">
                                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="text-[10px] font-bold">{idx + 1}</span>
                                </div>
                                <span>{step}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 pt-6 border-t border-blue-200/50">
                        <a href="#" className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1">
                            Read the complete setup guide →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
