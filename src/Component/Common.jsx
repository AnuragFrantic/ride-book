// 🔹 Reusable Components
export const Input = ({ label, type = "text", ...props }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        <input
            type={type}
            {...props}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black"
            required
        />
    </div>
);

export const FileInput = ({ label, ...props }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        <input
            type="file"
            {...props}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black"
        />
    </div>
);

export const SelectField = ({ label, name, value, onChange, options }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black"
            required
        >
            <option value="">Select</option>
            {options.map((opt) => (
                <option key={opt} value={opt}>
                    {opt}
                </option>
            ))}
        </select>
    </div>
);

export const Section = ({ title, icon, children }) => (
    <>
        <div className="w-full bg-gray-200 text-black text-sm p-2 border-l border-black flex items-center gap-2 rounded-md mb-4 mt-4">
            {icon} {title}
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">{children}</div>
    </>
);
