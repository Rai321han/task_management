export default function Badge({ type, children, ...rest }) {
    let badgeStyle = ""
    switch (type) {
        case "success":
            badgeStyle = "bg-success-fill border border-success"
            break;
        case "error":
            badgeStyle = "bg-error-fill border border-error"
        case "danger":
            badgeStyle = "bg-danger-fill border border-danger"
        default:
            break;
    }
    return (
        <div {...rest} className={`p-1.5 cursor-pointer rounded-md text-xs ${badgeStyle} inline-block whitespace-nowrap font-bold`}>
            {children}
        </div>
    );
}