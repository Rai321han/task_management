export default function Badge({ type, children }) {
    let badgeStyle = ""
    switch (type) {
        case "success":
            badgeStyle = "bg-secondary"
            break;
        case "error":
            badgeStyle = "bg-error"
        case "danger":
            badgeStyle = "bg-danger"
        default:
            break;
    }
    return (
        <div className={`p-1.5 rounded-md text-xs ${badgeStyle} inline-block whitespace-nowrap`}>
            {children}
        </div>
    );
}