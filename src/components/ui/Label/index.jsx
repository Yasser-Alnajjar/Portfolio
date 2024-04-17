export default function Label({ id, required, className, children }) {
  return (
    <label className={`flex align-center gap-1 mb-2 ${className}`} htmlFor={id}>
      {children} {required ? <span className="text-danger">*</span> : ''}
    </label>
  );
}
