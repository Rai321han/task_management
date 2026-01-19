export default function Search({value, onChange}) {
  return (
    <div>
      <form>
        <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search within this page" className="px-3 py-2 border-b outline-none border-secondary"/>
      </form>
    </div>
  );
}