export const FileInput = ({ label, name, onChange }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
            {label}
        </label>
        <input
            type="file"
            id={name}
            name={name}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            required
        />
    </div>
);
